import { IProduct } from "../../Domain/entities/product.entities";

export const productMapper = (product): IProduct => ({
    id: product._id,
    title: product.title,
    price: parseFloat(product.price.toString()),
    description: product.description,
    slug: product.slug,
    inStock: product.inStock,
    sizes: product.sizes.map((size: any) => size.toString()),
    gender: product.gender,
    tags: product.tags.map((tag: any) => tag.toString()),
    images: product.images.map((image: string) =>
        image.startsWith('http') ? image : `http://192.168.11.10:3000/api/files/product/${image}`
    ),
});

