import connection from "../data/connection";
import { Product } from "../types";

export const selectAllProducts = async (order?: string, search?: string): Promise<Product[]> => {

    const response: Product[] = await connection("labecommerce_products")
        .select()
        .orderBy("labecommerce_products.price", order)
        .where("labecommerce_products.name", "like", `%${search}%`)
        .orWhere("labecommerce_products.price", "like", `%${search}%`)
        .orWhere("labecommerce_products.id", "like", `%${search}%`)
        .orWhere("labecommerce_products.image_url", "like", `%${search}%`)

    return response
}