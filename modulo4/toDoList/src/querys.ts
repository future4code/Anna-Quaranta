import connection from "./connection";

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

export const getTaskById = async (id: string): Promise<any> => {
    const result = connection("ToDoListTask")
        .select("ToDoListTask.taskId","ToDoListTask.title","ToDoListTask.description","ToDoListTask.limitDate","ToDoListTask.status","ToDoUsers.id as creatorUserId","ToDoUsers.nickname as creatorUserNickname")
        .join('ToDoUsers', 'ToDoUsers.id', '=', 'ToDoListTask.creatorUserId')
        .where("ToDoUsers.id", id)

        return result
}