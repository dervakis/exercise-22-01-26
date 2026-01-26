import type { Item } from "../common/Item";
import { productApi } from "./axios";

export const fetchProducts = async (): Promise<Item[]>=> {
    const res= await productApi.get("");
    return res.data.products;
}

export const searchProduct = async (term:string): Promise<Item[]> => {
    const res = await productApi.get(`/search?q=${term}`);
    return res.data.products;
}

export const fetchCategory = async (): Promise<string[]> => {
    const res = await productApi.get("category-list");
    return res.data;
}

