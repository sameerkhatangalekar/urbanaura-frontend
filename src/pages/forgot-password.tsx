import { useFormik } from "formik"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import * as Yup from 'yup'
import { publicRequestInstance } from "../lib/constants"
import toast from "react-hot-toast"
import axios from "axios"
import { ErrorObj } from "../lib/types"
import { Triangle } from "react-loader-spinner"


const ForgotPassword = () => {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();


    const requestOTP = async (params: { email: string }) => {
        try {
            setLoading(true);
            const response = await publicRequestInstance.post('/auth/forgot', params);
            toast.success(response.data.message);
            navigate('/otp', {
                replace: true,
                state: {
                    email: params.email
                }
            });

            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {

                    const errObj = error.response.data as ErrorObj;
                    toast.error(errObj.message);
                }
            }
            else {
                toast.error('Something went wrong 😥')
                console.log(error);

            }
        }
        finally {
            setLoading(false);
        }
    }
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Please provide valid email").required('Email is required'),
        }),
        onSubmit: async (values) => {
            await requestOTP(values);
        }
    })
    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 max-sm:max-w-[80%] ">
            <h1 className="text-4xl font-medium max-sm:text-2xl">Reset password</h1>
            <p className="text-slate-500 max-sm:text-base">Fill up the form to reset the password</p>

            <form className="my-10" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full py-3 px-3 border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" placeholder="Enter email address" />
                        {formik.touched.email && formik.errors.email && <span className="text-red-500 max-sm:text-base">{formik.errors.email}</span>}
                    </label>

                    <button type="submit" className="w-full py-3 font-medium text-white bg-teal-600 hover:bg-teal-500 rounded-lg border-teal-500 hover:shadow inline-flex space-x-2 items-center justify-center" disabled={isLoading}>{isLoading ? <Triangle
                        visible={true}
                        height="20"
                        width="20"
                        color="#FFFFFF"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : 'Reset Password'
                    }
                    </button>
                    <Link to={'/register'} className="mx-auto max-sm:text-sm" >Not registered yet? <span className="text-teal-500 font-bold max-sm:text-base">Sign-up</span></Link>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword