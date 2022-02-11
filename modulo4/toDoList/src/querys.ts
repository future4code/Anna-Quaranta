import connection from "./connection";

export const getAllUsers = async (): Promise<any> => {

    const result = connection("ToDoUsers")
        .select("ToDoUsers.id", "ToDoUsers.nickname")

    return result
}

export const searchUser = async (query: string): Promise<any> => {

    const result: any = await connection.raw(`
        SELECT id, nickname FROM ToDoUsers WHERE nickname LIKE '%${query}%' OR email LIKE '%${query}%'
    `)

    return result[0]
}

export const getUserById = async (id: string): Promise<any> => {
    const result = await connection()
        .select("id", "nickname")
        .from("ToDoUsers")
        .where("id", id)

    return result
}

export const createUser = async (name: string, nickname: string, email: string): Promise<void> => {

    await connection("ToDoUsers")
        .insert({
            id: Date.now().toString(),
            name: name,
            nickname: nickname,
            email: email
        })

}

export const updateUser = async (id: string, name?: string, nickname?: string, email?: string): Promise<void> => {

    await connection("ToDoUsers")
        .update({
            name: name,
            nickname: nickname,
            email: email,
        })
        .where("id", id)
}

export const deleteUser = async (idUser: string): Promise<void> => {

    const infoResp = await connection("ToDoUsers")
        .join("ToDoListTask", "ToDoUsers.id", "ToDoListTask.creatorUserId")
        .where("ToDoUsers.id", idUser)


    infoResp.forEach(async (taskRes): Promise<void> => {
        await deleteResponsible(taskRes.taskId, "")
    })

    infoResp.forEach(async (taskRes): Promise<void> => {
        await deleteTask(taskRes.taskId)
    })

    await connection("ToDoUsers")
        .where("ToDoUsers.id", idUser)
        .del()

}

export const getTasks = async (id: string, status: string, query: string): Promise<any> => {

    let result;

    if (id && !status && !query) {
        result = await connection("ToDoListTask")
            .select("ToDoListTask.taskId", "ToDoListTask.title", "ToDoListTask.description", "ToDoListTask.limitDate", "ToDoUsers.id as creatorUserId", "ToDoListTask.status", "ToDoUsers.nickname as creatorUserNickname")
            .join('ToDoUsers', 'ToDoUsers.id', '=', 'ToDoListTask.creatorUserId')
            .where("ToDoUsers.id", id)

    } else if (status && !id && !query) {
        result = await connection("ToDoListTask")
            .select("ToDoListTask.taskId", "ToDoListTask.title", "ToDoListTask.description", "ToDoListTask.limitDate", "ToDoUsers.id as creatorUserId", "ToDoUsers.nickname as creatorUserNickname")
            .join('ToDoUsers', 'ToDoUsers.id', '=', 'ToDoListTask.creatorUserId')
            .where("ToDoListTask.status", status)

    } else {
        result = await connection.raw(`
        SELECT ToDoListTask.taskId, ToDoListTask.title, ToDoListTask.description, ToDoListTask.limitDate, ToDoUsers.id as creatorUserId, ToDoUsers.nickname as creatorUserNickname FROM ToDoListTask
        JOIN ToDoUsers
        ON ToDoUsers.id = ToDoListTask.creatorUserId
        WHERE ToDoListTask.title LIKE '%${query}%' OR ToDoListTask.description LIKE '%${query}%'
        `)

        return result[0]
    }

    return result
}

export const getTasksDelayed = async (): Promise<any> => {

    // pegando data de hoje e formatando para o YYYY-MM-DD
    let date: any = new Date().toLocaleString().slice(0, 10).split("/")
    date = `${date[2]}-${date[1]}-${date[0]}`

    //-----

    const result = await connection("ToDoListTask")
        .select("ToDoListTask.taskId", "ToDoListTask.title", "ToDoListTask.description", "ToDoListTask.limitDate", "ToDoUsers.id as creatorUserId", "ToDoUsers.nickname as creatorUserNickname")
        .join('ToDoUsers', 'ToDoUsers.id', '=', 'ToDoListTask.creatorUserId')
        .where("ToDoListTask.limitDate", "<", date)

    return result
}

export const getTaskById = async (id: string): Promise<any> => {

    let result = await connection("ToDoListTask")
        .select("ToDoListTask.taskId",
            "ToDoListTask.title",
            "ToDoListTask.description",
            "ToDoListTask.limitDate",
            "ToDoListTask.status",
            "ToDoUsers.id as creatorUserId",
            "ToDoUsers.nickname as creatorUserNickname")
        .join('ToDoUsers', 'ToDoUsers.id', 'ToDoListTask.creatorUserId')
        .where("ToDoListTask.taskId", id)

    const resultResponsiblesNames = await getResponsibles(id)

    result[0].responsibleUsers = resultResponsiblesNames;

    return result
}

export const getResponsibles = async (id: string): Promise<any> => {
    const result = await connection("ToDoListResponsibles")
        .select("ToDoUsers.id", "ToDoUsers.name")
        .join("ToDoUsers", "ToDoUsers.id", "=", "ToDoListResponsibles.responsible_user_id")
        .where("ToDoListResponsibles.taskId", id)

    return result
}

export const createTask = async (title: string, description: string, limitDate: Date, creatorUserId: string): Promise<any> => {
    await connection("ToDoListTask")
        .insert({
            taskId: Date.now().toString(),
            title: title,
            description: description,
            limitDate: limitDate,
            creatorUserId: creatorUserId
        })
}

export const createResponsible = async (taskId: string, responsibleUserId: string[]): Promise<void> => {

    responsibleUserId.forEach(async (id) => {
        await connection("ToDoListResponsibles")
            .insert({
                taskId: taskId,
                responsible_user_id: id
            })
    })

}

export const updateStatusTask = async (id: string[], status: string): Promise<void> => {

    id.forEach(async (id) => {
        await connection("ToDoListTask")
            .where("taskId", id)
            .update({
                status: status
            })
    })

}

export const deleteResponsible = async (taskId?: string, responsibleUserId?: string): Promise<void> => {

    if (responsibleUserId && taskId) {
        await connection("ToDoListResponsibles")
            .where("responsible_user_id", responsibleUserId)
            .andWhere("taskId", taskId)
            .del()
    } else if (!responsibleUserId && taskId) {
        await connection("ToDoListResponsibles")
            .where("taskId", taskId)
            .del()
    } else {
        await connection("ToDoListResponsibles")
            .where("taskId", taskId)
            .del()
    }

}

export const deleteTask = async (idTask: string): Promise<void> => {

    await deleteResponsible(idTask, "")

    await connection("ToDoListTask")
        .where("ToDoListTask.taskId", idTask)
        .del()
}