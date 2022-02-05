import connection from "./connection";

export const getActor = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor`)

    return result[0]
}

export const getActorById = async (id: string): Promise<any> => {
    const result = await connection("Actor")
        .where({ "id": id })

    return result
}

export const getActorByName = async (name: string): Promise<any> => {

    const result = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`)

    return result[0]
}

export const getCountActorByGender = async (gender: string): Promise<any> => {

    const result = await connection("Actor")
        .count("* as count")
        .where("gender", gender)

    return result[0].count
}

export const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<string> => {
    await connection
        .insert({
            id: id,
            name: name,
            salary: salary,
            birth_date: dateOfBirth,
            gender: gender,
        })
        .into("Actor");

    return "Usuário criado."
};

export const updateSalary = async (id: string, salary: number): Promise<string> => {
    await connection("Actor")
        .update({ salary: salary })
        .where({ id: id })

    return "Salário atualizado."
}

export const deleteActor = async (id: string): Promise<string> => {
    await connection("Actor")
        .where('id', id)
        .del()

    return "Ator excluído com sucesso."
}

export const mediaSalary = async (gender: string): Promise<any> => {

    const result = await connection("Actor")
        .select("gender")
        .avg("salary as media")
        .where("gender", gender)

    return result[0]
}

//---------------------------------------------------------

export const getAllMovies = async (): Promise<any> => {
    const result = await connection("Movies")
        .select("*").limit(15)

    return result
}

export const getSearchMovie = async (query: string): Promise<any> => {
    const result = await connection.raw(`SELECT * FROM Movies WHERE title LIKE "%${query}%" OR synopsis LIKE "%${query}%"`)

    return result[0]
}


export const createMovie = async (title: string, synopsis: string, releaseDate: Date, playingLimitDate: Date): Promise<void> => {
    await connection.insert({
        id: Date.now().toString(),
        title: title,
        synopsis: synopsis,
        releaseDate: releaseDate,
        playing_limit_date: playingLimitDate
    })
        .into("Movies")
}