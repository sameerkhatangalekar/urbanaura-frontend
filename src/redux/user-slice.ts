import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { baseUrl } from "../lib/constants";
import { ErrorObj } from "../lib/types";


export const login = createAsyncThunk("login", async (user : { 
    email : string,
    password : string
})=>{
    try {
        const response = await axios.post(`${baseUrl}/auth/login`,user);
        return response.data;
    } catch (error : unknown) {
       if(axios.isAxiosError(error))
       {
        if( error.response)
        {
             const errObj = error.response.data as ErrorObj
             toast.error(errObj.message)
        }
    
       }
       else {
        toast.error('Something went wrong 😥')
        console.log(error);
    
       }
       return error;
    }
})






export type UserProps = {
    accessToken : string
} | null;



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
        // loginStart : (state) =>{
        //     state.isFetching = true;
        // },
        // loginSucess : (state ) =>{
        //    state.isFetching = false;
        //    state.error = false;
        //    state.currentUser = true;
          
        // },
        // loginFailure : (state) =>{
        //     state.isFetching = false;
        //     state.error = true;
        // },

        logout : (state) => {
            state.isLoggedIn = false;
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
        });

        builder.addCase(login.rejected,(state) =>{
            state.isFetching = false;
            state.error = true;
        });
    },
})

 export  const {logout} = UserSlice.actions;
export default UserSlice.reducer;