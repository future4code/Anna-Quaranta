import connection from '../data/connection';
import { Purchase } from './../types';


export const sendPurchase = async (userId: string, productId: string, quantity: number, price: number) => {

    const purchase: Purchase = {
        id: Date.now().toString(),
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        total_price: quantity * price
    }

    await connection("labecommerce_purchases")
        .insert(purchase)
}