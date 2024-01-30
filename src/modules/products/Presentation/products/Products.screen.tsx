import React from 'react';
import Body from "./components/Body";
import { GetProductsDataSource } from "../../Infrastructure/DataSource/get-products";
import { ProductUseCases } from "../../useCases/product-use-cases";

const dataSource = new GetProductsDataSource()
const useCases = new ProductUseCases(dataSource);
const ProductsScreen = () => {
    return (
        <Body useCases={useCases}/>
    );
};

export default ProductsScreen;
