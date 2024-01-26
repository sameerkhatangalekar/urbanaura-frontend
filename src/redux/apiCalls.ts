import axios from "axios"
import { useAppDispatch } from "./redux-hooks"
import { loginFailure, loginStart, loginSucess } from "./user-slice"
import { baseUrl } from "../lib/constants"
import { ErrorObj } from "../lib/types"
import toast from "react-hot-toast"


export const login =async (dispatch :ReturnType<typeof useAppDispatch>, user : { email : string , password : string} ) => {

    dispatch(loginStart())
    try {
        const res = await axios.post(`${baseUrl}/auth/login`,user);
        console.log(res.data)
        dispatch(loginSucess(res.data))
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
  
    dispatch(loginFailure())
    }
}
