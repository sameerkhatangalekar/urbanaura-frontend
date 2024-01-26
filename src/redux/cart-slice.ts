import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../lib/types";


export type CartItemProps = {
    color: string,
    size: string,
    productQuantity: number
} & ProductProps;

type CartState = {
        products : CartItemProps[];
        cartQuantity  : number;
        cartTotal : number
}

const initialState : CartState = {
    products : [],
    cartQuantity : 0,
    cartTotal : 0
}


export const CartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers: {
        addProduct : (state , action : PayloadAction<CartItemProps>) =>{
            state.cartQuantity += 1;
            state.products.push(action.payload);
            state.cartTotal += action.payload.price * action.payload.productQuantity;
        }
    }
});


export default CartSlice.reducer;

export const { addProduct} = CartSlice.actions;