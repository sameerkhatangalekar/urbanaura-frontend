import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import {  privateRequestInstance } from "../../lib/constants";
import { ErrorObj } from "../../lib/types";
import { resetCartState } from "./cart-slice";

export const logout = createAsyncThunk("logout", async (_,{rejectWithValue,dispatch})=>{
    try {
        const response = await privateRequestInstance.put('/auth/logout');
        dispatch(resetUserState())
        dispatch(resetCartState())
        return response.data;
    } catch (error : unknown) {
       if(axios.isAxiosError(error))
       {
        if( error.response)
        {
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


export const login = createAsyncThunk("login", async (user : { email : string, password : string},{rejectWithValue})=>{
    try {
        const response = await privateRequestInstance.post('/auth/login',user);
        
        return response.data;
    } catch (error : unknown) {
       if(axios.isAxiosError(error))
       {
        if( error.response)
        {
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






type UserState = {
    isLoggedIn : Boolean,
    isFetching : boolean,
    error : boolean
}

const initialState : UserState  = {
    isLoggedIn :  false,
    isFetching : false,
    error : false
}


export const UserSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        resetUserState : (state)=>{
            state.isFetching = false;
            state.isLoggedIn = false;
            state.error = false
        }
    },
   
    extraReducers(builder) {
        builder.addCase(login.fulfilled,(state) =>{
            state.isFetching = false;
            state.isLoggedIn = true;
            state.error  = false;
        });

        builder.addCase(login.pending,(state) =>{
            state.isFetching = true;
            state.error = false;
        });

        builder.addCase(login.rejected,(state) =>{
            state.isFetching = false;
            state.error = true;
        });
    },
})

  export  const {resetUserState} = UserSlice.actions;
export default UserSlice.reducer;


