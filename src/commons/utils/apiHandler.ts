import axiosClient from "./apiClient";


export function getProduct(){
    return axiosClient.get('/product');
}

export function addProduct(data){
    return axiosClient.post('/product', JSON.stringify(data));
}
