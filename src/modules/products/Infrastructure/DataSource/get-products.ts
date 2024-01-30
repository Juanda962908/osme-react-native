import { IGetProductsDataSource } from "../../Domain/DataSource/get-products";
import { IProduct } from "../../Domain/entities/product.entities";
import axiosClient from "../../../../commons/utils/apiClient";
import { productMapper } from "../mappers/product.mapper";
import axios from "axios";


export class GetProductsDataSource implements IGetProductsDataSource {
    getProductsById(id: string): Promise<IProduct> {
        return
    }

    async getProductsByPage(options: { limit?: number; offset?: number }): Promise<IProduct[]> {
        const {limit = 10, offset = 0} = options
        const response = await axios.get<[]>(`http://192.168.11.10:3000/api/products?limit=${limit}&offset=${offset}`);
        console.log("4::::", response)
        const products = (response.data || []).map(product => productMapper(product))
        console.log("5::::", products)
        return products
    }

    searchProductByTerm(term: string): Promise<IProduct[]> {
        return Promise.resolve([]);
    }

}
