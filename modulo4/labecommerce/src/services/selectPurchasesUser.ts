import connection from "../data/connection"

export const selectPurchasesUser = async (idUsers: string): Promise<any[]> => {

    const purchases = await connection("labecommerce_purchases")
        .select("labecommerce_products.id", "labecommerce_products.image_url",
            "labecommerce_purchases.id as date",
            "labecommerce_products.name as nameProduct", "labecommerce_products.price", "labecommerce_purchases.quantity", "labecommerce_purchases.total_price")
        .leftJoin("labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id")
        .where("labecommerce_purchases.user_id", idUsers)

    return purchases

}