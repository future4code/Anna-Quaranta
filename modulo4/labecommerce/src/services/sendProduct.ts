import connection from '../data/connection';
import { Product } from './../types';

export const sendProduct = async (product: Product): Promise<void> => {
    await connection("labecommerce_products")
        .insert(product)
}

