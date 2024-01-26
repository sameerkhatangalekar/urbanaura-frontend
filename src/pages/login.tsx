import { useFormik } from "formik";
import * as Yup from 'yup'
import { login } from "../redux/apiCalls";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { Triangle } from "react-loader-spinner";


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

            login(dispatch, values)
        }

    });

    return (
        <div className="flex items-center max-sm:justify-center justify-start h-screen w-screen bg-[url('./assets/images/login.jpg')] bg-cover  max-sm:bg-center">


            <div className="p-12 max-sm:w-[80%]  w-[35%] bg-white rounded-md shadow-2xl max-sm:ml-0 ml-56">
                <h1 className="text-2xl font-light mb-3">
                    SIGN IN
                </h1>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-start">
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="flex-1 min-w-[40%] w-full my-2 p-2 border border-gray-500  focus:border-teal-500 focus:ring-teal-500 outline-none" />
                    {formik.touched.email && formik.errors.email && <span className="text-red-500">{formik.errors.email}</span>}
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="flex-1 min-w-[40%] w-full my-2 mb-2 p-2 border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" />
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
                    <a href="" className="my-2 text-xs underline cursor-pointer">
                        FORGOT PASSWORD?
                    </a>
                    <a href="" className="my-2 text-xs underline cursor-pointer">
                        CREATE A NEW ACCOUNT
                    </a>
                </form>
            </div>

        </div>
    )
}

export default Login


