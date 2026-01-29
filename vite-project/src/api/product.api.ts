import type { DetailItem, Item } from "../common/Item";
import { productApi } from "./axios";

export const fetchProducts = async (): Promise<Item[]>=> {
    const res= await productApi.get("");
    return res.data.products;
}

export const searchProduct = async (term:string): Promise<Item[]> => {
    const res = await productApi.get(`/search?q=${term}`);
    return res.data.products;
}

export const fetchProductByCategory = async (category:string) : Promise<Item[]> =>{
    const res = await productApi.get(`/category/${category}`)
    return res.data.products;
}

export const fetchCategory = async (): Promise<string[]> => {
    const res = await productApi.get("category-list");
    return res.data;
}

export const fetchProductById = async (id:number): Promise<DetailItem> => {
    const res = await productApi.get(id.toString());
    return res.data;
}

