import { useQuery } from "@tanstack/react-query"
import { fetchCategory, fetchProducts } from "../api/product.api"

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
