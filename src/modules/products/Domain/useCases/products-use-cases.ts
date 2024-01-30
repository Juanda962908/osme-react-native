import { IProduct } from "../entities/product.entities";

export interface IProductsUseCases{
    getProductsByPage(options: { limit?: number; offset?: number }): Promise<IProduct[]>;
    getProductsById(id: string): Promise<IProduct>;
    searchProductByTerm(term: string): Promise<IProduct[]>;
}


