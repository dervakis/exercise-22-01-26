import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { ActivityIcon } from "lucide-react"
import { useEffect } from "react"


export type CartEntry={
    id:number,
    title: string,
    price: number,
    quantity: number
}

type CartState={
    items: CartEntry[],
}
const prevd: CartEntry[] = JSON.parse(localStorage.getItem('cartItems')!) as CartEntry[]
const initialState : CartState ={
    items: prevd || []
} 

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddItem: (state, action) => {
            const ei = state.items.find(i => i.id == action.payload.id);
            if(ei)
                ei.quantity += action.payload.quantity;
            else
                state.items.push(action.payload)
            console.log(state.items.length)
            localStorage.setItem('cartItems', JSON.stringify(state.items))
        },
        RemoveItem: (state, action: PayloadAction<number>) => {
            console.log(action)
            state.items = state.items.filter(i => i.id != action.payload);
                        localStorage.setItem('cartItems', JSON.stringify(state.items))

        },
        // Clear: (state, action) => {
        //     state.items = []
        // }
    }
})

export const {AddItem, RemoveItem} = cartSlice.actions;
export default cartSlice.reducer;