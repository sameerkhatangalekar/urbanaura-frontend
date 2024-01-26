import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type UserProps = {
    accessToken : string
} | null;

type UserState = {
    currentUser : UserProps | null,
    isFetching : boolean,
    error : boolean
}

const initialState : UserState  = {
    currentUser :  null,
    isFetching : false,
    error : false
}


export const UserSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {
        loginStart : (state) =>{
            state.isFetching = true;
        },
        loginSucess : (state , action : PayloadAction<UserProps>) =>{
           state.isFetching = false;
           state.error = false;
           state.currentUser = action.payload;
          
        },
        loginFailure : (state) =>{
            state.isFetching = false;
            state.error = true;
        },

        logout : (state) => {
            state.currentUser = null;
        }
    }
})

export  const {loginStart ,loginSucess,loginFailure,logout} = UserSlice.actions;
export default UserSlice.reducer;