export interface IProduct {
    id:         string;
    description: string;
    images:      string[];
    inStock:     number;
    price:       number;
    sizes:       string[];
    slug:        string;
    tags:        string[];
    title:       string;
    type?:        string;
    gender:      string;
    __v?:         number;
    createdAt?:   Date;
    updatedAt?:   Date;
}
