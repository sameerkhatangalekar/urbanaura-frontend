import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ErrorObj } from "../../lib/types";
import axios from "axios";
import toast from "react-hot-toast";
import { privateRequestInstance } from "../../lib/constants";
import { resetUserState } from "./user-slice";
import { resetOrderState } from "./order-slice";



type AddProductToCartProps = {
    quantity : number,
    product : string,
    size : string,
    color : string

}




export const addProductToCart = createAsyncThunk('addProductToCart',async (product : AddProductToCartProps,{dispatch,signal,rejectWithValue},) =>{
    try {
        const response = await privateRequestInstance.post(`/cart/secured`,product,{
            signal : signal,
            withCredentials : true
        });
        toast.success(response.data.message);
        dispatch(getCart())
        return response.data;
    } catch (error : unknown) {
        if(axios.isAxiosError(error))
        {
            if( error.response)
            {
                if( error.response.status === 401)
                {
                 dispatch(resetCartState())   
                 dispatch(resetUserState())   
                 dispatch(resetOrderState()) 
                }
              const errObj = error.response.data as ErrorObj;
              toast.error(errObj.message);
              return rejectWithValue(errObj.message)
            }
        }
        else {
         toast.error('Something went wrong 😥')
         console.log(error);
         return rejectWithValue('Something went wrong 😥')
        }   
    }


})

export const removeProductToCart = createAsyncThunk('removeProductToCart',async (cartItemId : string,{dispatch,signal,rejectWithValue},) =>{
    try {
        const response = await privateRequestInstance.delete(`/cart/secured/${cartItemId}`,{
            signal : signal,
            withCredentials : true
        });
        toast.success(response.data.message);
        dispatch(getCart())
        return response.data;
    } catch (error : unknown) {
        if(axios.isAxiosError(error))
        {
            if( error.response)
            {
                if( error.response.status === 401)
                {
                 dispatch(resetCartState())   
                 dispatch(resetUserState())   
                 dispatch(resetOrderState()) 
                }
              const errObj = error.response.data as ErrorObj;
              toast.error(errObj.message);
              return rejectWithValue(errObj.message)
            }
        }
        else {
         toast.error('Something went wrong 😥')
         console.log(error);
         return rejectWithValue('Something went wrong 😥')
        }   
    }
})


export const checkout =  createAsyncThunk('checkout',async (_,{dispatch,rejectWithValue},) =>{
    try {
        const response = await privateRequestInstance.get(`/checkout/secured`,{
            withCredentials : true
        });
        
         window.location.href = response.data.url;
    
        return response.data;
    } catch (error : unknown) {
        if(axios.isAxiosError(error))
        {
            if( error.response)
            {
                if( error.response.status === 401)
                {
                 dispatch(resetCartState())   
                 dispatch(resetUserState()) 
                 dispatch(resetOrderState())   
                }
              const errObj = error.response.data as ErrorObj;
              toast.error(errObj.message);
              return rejectWithValue(errObj.message)
            }
        }
        else {
         toast.error('Something went wrong 😥')
         console.log(error);
         return rejectWithValue('Something went wrong 😥')
        }   
    }
})


export const getCart = createAsyncThunk('getCart',async (_,{signal,rejectWithValue,dispatch}) =>{
    try {
        const response = await privateRequestInstance.get(`/cart/secured/`,{
            withCredentials : true,
            signal : signal
        });
       
        return response.data;
    } catch (error : unknown) {
        
        if(axios.isAxiosError(error))
        {
        
            if( error.response)
            {
                if( error.response.status === 401)
                {
                 dispatch(resetCartState())   
                 dispatch(resetUserState())   
                 dispatch(resetOrderState()) 
                }
              const errObj = error.response.data as ErrorObj;
              toast.error(errObj.message);
              return rejectWithValue(errObj.message)
            }
        }
        else {
         toast.error('Something went wrong 😥')
         console.log(error);
         return rejectWithValue('Something went wrong 😥')
        } 
    }
})



export type CartItemProps = {
    product:    Product;
    quantity:   number;
    size:       string;
    color:      string;
    _id:        string;
    itemAmount: number;
}

export type Product = {
    _id:    string;
    title:  string;
    images: string[];
    price:  number;
}


type Cart = {
    _id?:    string;
    products : CartItemProps[];
    cartQuantity  : number;
    cartTotalAmount : number;
}

type CartState = {
    isAdding : boolean,
    isRemoving : boolean,
    isFetching : boolean;
    isCheckingout : boolean;
 
    error : boolean;
    cart : Cart
}

const initialState : CartState = {
    isAdding : false,
    isRemoving : false,
    isFetching : false,
    isCheckingout : false,
    error : false,
    cart : {
        products : [],
        cartQuantity : 0,
        cartTotalAmount : 0
    }
}


export const CartSlice = createSlice({
    name : "cart",
    initialState : initialState,
    reducers: {
        resetCartState : (state)=> {
                state.isAdding = initialState.isAdding;
                state.isRemoving = initialState.isRemoving;
                state.isFetching = initialState.isFetching;
                state.error = initialState.error;
                state.cart = initialState.cart;
        }
    },
    extraReducers(builder) {
        builder.addCase(getCart.pending,(state)=>{
            state.isFetching = true
            state.error = false
        });
        builder.addCase(getCart.rejected,(state)=>{
            state.isFetching = false
            state.error = true
        });
        builder.addCase(getCart.fulfilled,(state,action : PayloadAction<Cart>)=>{
            state.isFetching = false
            state.error = false
            state.cart = action.payload
            state.cart.cartQuantity = state.cart.products.length
        })
        builder.addCase(addProductToCart.pending,(state)=>{
            state.isAdding = true
        });

        builder.addCase(addProductToCart.fulfilled,(state)=>{
            state.isAdding = false
        });

        builder.addCase(addProductToCart.rejected,(state)=>{
            state.isAdding = false
        });

        builder.addCase(removeProductToCart.pending,(state)=>{
            state.isRemoving = true
        });

        builder.addCase(removeProductToCart.fulfilled,(state)=>{
            state.isRemoving = false
        });

        builder.addCase(removeProductToCart.rejected,(state)=>{
            state.isRemoving = false
        });


        builder.addCase(checkout.pending,(state)=>{
            state.isCheckingout = true
        });

        builder.addCase(checkout.fulfilled,(state)=>{
            state.isCheckingout = false
        });

        builder.addCase(checkout.rejected,(state)=>{
            state.isCheckingout = false
        });
    },
});


export default CartSlice.reducer;

 export const { resetCartState} = CartSlice.actions;