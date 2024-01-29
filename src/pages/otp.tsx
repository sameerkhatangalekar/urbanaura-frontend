import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate, } from "react-router-dom"
import * as Yup from 'yup'
import { publicRequestInstance } from "../lib/constants";
import { ErrorObj } from "../lib/types";
import { useFormik } from "formik";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";

const Otp = () => {

    const [isLoading, setLoading] = useState(false);
    const { state } = useLocation();
    const navigate = useNavigate();

    const verifyOtp = async (params: { otp: number }) => {
        try {
            setLoading(true);
            const response = await publicRequestInstance.post('/auth/verify-otp', params);
            toast.success(response.data.message);
            navigate('/reset', {
                replace: true,
                state: {
                    email: state.email,
                    otp: params.otp
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
            digitOne: '',
            digitTwo: '',
            digitThree: '',
            digitFour: ''
        },
        validationSchema: Yup.object({
            digitOne: Yup.number().min(0).max(9).required(),
            digitTwo: Yup.number().min(0).max(9).required(),
            digitThree: Yup.number().min(0).max(9).required(),
            digitFour: Yup.number().min(0).max(9).required(),
        }),
        onSubmit: async (values) => {
            if (state !== null) {
                await verifyOtp({
                    otp: parseInt(values.digitOne.toString() + values.digitTwo.toString() + values.digitThree.toString() + values.digitFour.toString())
                })
            }

        }
    })

    return (

        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12 ">
            <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl max-sm:max-w-[80%]">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <div className="font-semibold text-3xl">
                            <p>Email Verification</p>
                        </div>
                        <div className="flex flex-row text-sm font-medium text-gray-400">
                            <p>We have sent a code to your email {state?.email}</p>
                        </div>
                    </div>

                    <div>
                        <form method="post" onSubmit={formik.handleSubmit} >
                            <div className="flex flex-col space-y-10">
                                <div className="flex flex-row items-center justify-between max mx-auto w-full max-w-xs">
                                    <div className="w-16 h-16 max-sm:w-12 max-sm:h-12">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500" type="number" name="digitOne" value={formik.values.digitOne} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    </div>
                                    <div className="w-16 h-16  max-sm:w-12 max-sm:h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500" type="number" name="digitTwo" value={formik.values.digitTwo} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    </div>
                                    <div className="w-16 h-16  max-sm:w-12 max-sm:h-12">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500" type="number" name="digitThree" value={formik.values.digitThree} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    </div>
                                    <div className="w-16 h-16  max-sm:w-12 max-sm:h-12 ">
                                        <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-teal-500" type="number" name="digitFour" value={formik.values.digitFour} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                    </div>

                                </div>
                                {!formik.isValid ? <div className="mx-auto"><span className="text-red-500">Please provide valid otp</span></div> : null}
                                <div className="flex flex-col space-y-5">
                                    <button type="submit" className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-teal-500 border-none text-white text-sm shadow-sm" disabled={isLoading}>{isLoading ? <Triangle
                                        visible={true}
                                        height="20"
                                        width="20"
                                        color="#FFFFFF"
                                        ariaLabel="triangle-loading"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                    /> : 'Verify OTP'
                                    }  </button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otp

