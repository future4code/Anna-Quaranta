import connection from "../data/connection"

export const insertUser = async (id: string, email: string, password: string): Promise<void | null> => {
    try {
        await connection("User")
            .insert({
                id,
                email,
                password
            })
    } catch (error) {
        console.log(error)

        return null
    }
}