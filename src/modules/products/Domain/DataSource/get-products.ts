import { IProduct } from "../entities/product.entities";


export interface IGetProductsDataSource{
    getProductsByPage(options: { limit?: number, offset?: number }): Promise<IProduct[]>;
    getProductsById(id: string): Promise<IProduct>;
    searchProductByTerm(term: string): Promise<IProduct[]>;

}
