import { IProductsUseCases } from "../Domain/useCases/products-use-cases";
import { IProduct } from "../Domain/entities/product.entities";
import { GetProductsDataSource } from "../Infrastructure/DataSource/get-products";
import { useRecoilState } from "recoil";


// useCases = repositories
export class ProductUseCases implements IProductsUseCases {

    constructor(private getProductsDataSource: GetProductsDataSource) {
    }

    getProductsById(id: string): Promise<IProduct> {
        return
    }

    getProductsByPage(options: { limit?: number; offset?: number }): Promise<IProduct[]> {
         return  this.getProductsDataSource.getProductsByPage(options);

    }

    searchProductByTerm(term: string): Promise<IProduct[]> {
        return Promise.resolve([]);
    }

}

