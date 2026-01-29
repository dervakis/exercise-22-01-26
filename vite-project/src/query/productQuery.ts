import { useQuery } from "@tanstack/react-query"
import { fetchCategory, fetchProductByCategory, fetchProductById, fetchProducts, searchProduct } from "../api/product.api"

export const useProducts = () =>{
    return useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    })
}
export const useCategory = () => {
    return useQuery({
        queryKey: ['categorys'],
        queryFn: fetchCategory,
        staleTime: Infinity
    })
}
export const useProductByCategory = (category:string) => {
    return useQuery({
        queryKey: ['category_products', category],
        queryFn: () => fetchProductByCategory(category)
    })
}
export const useProductById = (id:number) =>{
    return useQuery({
        queryKey: ['product', id],
        queryFn:()=> fetchProductById(id)
    })
}

export const useProductBySearch = (search:string) =>{
    return useQuery({
        queryKey: ['serched_products', search],
        queryFn: ()=> searchProduct(search)
    })
}
