import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { privateRequestInstance } from "../../lib/constants";
import { ErrorObj } from "../../lib/types";
import { resetCartState } from "./cart-slice";
import { resetUserState } from "./user-slice";

// To parse this data:
//
//   import { Convert, Order } from "./file";
//
//   const order = Convert.toOrder(json);

export type Order = {
    user:        User;
    _id:         string;
    status:      string;
    products:    ProductElement[];
    totalAmount: number;
    shipping:    Shipping;
    orderId:     string;
    createdAt:   Date;
    updatedAt:   Date;
}

 type ProductElement = {
    product:    Product;
    quantity:   number;
    size:       string;
    color:      string;
    itemAmount: number;
    _id:        string;
} & Product

 type Product = {
    _id:    string;
    title:  string;
    images: string[];
}

 type Shipping = {
    city:        string;
    country:     string;
    line1:       string;
    line2:       string | null;
    postal_code: string;
    state:       string;
}

 type User = {
    userId: string;
    email:  string;
}




type OrderState = {
    isFetching : Boolean;
    orders : Order[];
    error : Boolean;
}

const initialState : OrderState = 
{
    isFetching : false,
    orders : [],
    error : false
} 

export const getOrders = createAsyncThunk('getOrders', async (_,{signal,rejectWithValue,dispatch})=>{
 try {
        const response = await privateRequestInstance.get(`/order/my-orders/`,{
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




export const OrdersSlice = createSlice({
    name  : 'orders',
    initialState : initialState,
    reducers : {},
    extraReducers  (builder) {
        builder.addCase(getOrders.pending,(state)=>{
            state.isFetching = true
            state.error = false
        });
        builder.addCase(getOrders.rejected,(state)=>{
            state.isFetching = false
            state.error = true
        });
        builder.addCase(getOrders.fulfilled,(state,action : PayloadAction<Order[]>)=>{
            state.isFetching = false
            state.error = false
            state.orders = action.payload
        })
    }

})

export default OrdersSlice.reducer;