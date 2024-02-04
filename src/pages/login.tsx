import { useFormik } from "formik";
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { Triangle } from "react-loader-spinner";
import { login } from "../redux/slices/user-slice";
import { Link } from "react-router-dom";
import { hero1 } from "../assets/images";


const Login = () => {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Please provide valid email").required('Email is required'),
            password: Yup.string().min(4, 'Password should be of minimum 4 characters').max(12, 'Maximum password length is 12').required('Password is required')
        }),
        onSubmit: (values) => {
            dispatch(login(values))
        }

    });

    return (
        <div className="flex  h-screen w-screen bg-teal-500 items-center justify-center">
            <div className="w-[50%] h-[70%] max-sm:h-fit max-sm:w-[70%] bg-white  flex rounded-md text-white shadow-2xl shadow-gray-600">
                <div className="flex-1 flex flex-col items-center justify-start px-12 py-16 max-sm:px-6 max-sm:py-6">
                    <h1 className="text-2xl font-semibold mb-3 w-full text-black">
                        SIGN IN
                    </h1>
                    <form onSubmit={formik.handleSubmit} className="flex flex-col items-start w-full">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%] w-full py-2 border border-teal-500 focus:border-teal-500 focus:ring-teal-500 outline-none bg-white bg-opacity-50 text-black rounded-sm px-4 placeholder:text-gray-600" />
                        {formik.touched.email && formik.errors.email && <span className="text-red-500 ">{formik.errors.email}</span>}
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%] w-full py-2 border border-teal-500 focus:border-teal-500 focus:ring-teal-500 outline-none bg-white bg-opacity-50 text-black rounded-sm px-4 placeholder:text-gray-600" />
                        {formik.touched.password && formik.errors.password && <span className="text-red-500">{formik.errors.password}</span>}
                        <button type="submit" className="bg-teal-700 text-white py-3 px-5 mt-5 select-none outline-none" disabled={user.isFetching}>{user.isFetching ? <Triangle
                            visible={true}
                            height="20"
                            width="20"
                            color="#FFFFFF"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> : 'LOGIN'}</button>

                        <Link replace to={'/forgot'} >
                            <span className="my-2 text-xs underline cursor-pointer text-black">
                                FORGOT PASSWORD?
                            </span>
                        </Link>

                        <Link replace to={'/register'} >
                            <span className="my-2 text-xs underline cursor-pointer text-black">
                                CREATE A NEW ACCOUNT
                            </span>
                        </Link>

                    </form>
                </div>
                <div className="flex-1 flex justify-end  max-sm:hidden">
                    <img src={hero1} alt="" className="object-cover rounded-md" />
                </div>
            </div>
        </div>

    )
}

export default Login


