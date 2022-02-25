import { BaseDataBase } from "../data/BaseDataBase"

export class Recipes {
    protected createdAt: Date = new Date()

    constructor(protected id?: string, protected title?: string, protected description?: string, protected id_user?: string) { }

    public async createRecipe() {
        try {
            await BaseDataBase.connection("cookenu_recipes")
                .insert({
                    id: this.id,
                    title: this.title,
                    description: this.description,
                    createdAt: this.createdAt,
                    id_user: this.id_user
                })
        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }

    public async getRecipe(id: string) {
        try {
            const recipes = await BaseDataBase.connection("cookenu_recipes")
                .where({ id })

            return recipes

        } catch (error: any) {
            throw new Error(error.sql || error.message)
        }
    }

}