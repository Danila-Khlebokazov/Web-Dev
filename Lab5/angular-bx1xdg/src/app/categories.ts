import {Product, products} from "./products";

export interface Category{
    name: string,
    products : Product[]
}

export const categories = [
    {
        name: "phones",
        products : products
    },
    {
        name: "laptops",
        products : []
    }
]