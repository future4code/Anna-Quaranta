import connection from "../data/connection"

export const delUser = async (id: string): Promise<void> => {
    await connection("User")
        .where({id})
        .delete()
}