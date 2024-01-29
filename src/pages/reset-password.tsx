import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Triangle } from "react-loader-spinner";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { publicRequestInstance } from "../lib/constants";
import { ErrorObj } from "../lib/types";
const ResetPassword = () => {

    const { state } = useLocation();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();


    const resetPassword = async (params: {
        password: string
    }) => {
        try {
            setLoading(true);
            const response = await publicRequestInstance.post('/auth/reset', {
                email: state.email,
                otp: state.otp,
                password: params.password
            });
            toast.success(response.data.message);
            navigate('/', {
                replace: true,
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
            password: ''
        },
        validationSchema: Yup.object({
            password: Yup.string().min(4, 'Password should be of minimum 4 characters').max(12, 'Maximum password length is 12 characters').required('Password is required')
        }),
        onSubmit: async (values) => {
            if (state !== null) {
                await resetPassword(values);
            }

        }
    })

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300 max-sm:max-w-[80%]">
            <h1 className="text-4xl font-medium max-sm:text-2xl">Reset password</h1>
            <p className="text-slate-500">Fill up the form to reset the password</p>

            <form className="my-10" onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Password</p>
                        <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="w-full py-3 px-3 border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" placeholder="Enter new password" />
                        {formik.touched.password && formik.errors.password && <span className="text-red-500">{formik.errors.password}</span>}
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

                </div>
            </form>
        </div>
    )
}

export default ResetPassword