import { useFormik } from "formik";
import { useAppSelector, useAppDispatch } from "../redux/redux-hooks";
import * as Yup from 'yup'
import { register } from "../redux/slices/user-slice";
import { Triangle } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";


const Register = () => {
    const user = useAppSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            contact: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First name is required'),
            lastName: Yup.string().required('Last name is required'),
            contact: Yup.string().min(10, 'Please provide valid contact').max(10, 'Please provide valid contact').required('Contact is required'),
            email: Yup.string().email("Please provide valid email").required('Email is required'),
            password: Yup.string().min(4, 'Password should be of minimum 4 characters').max(12, 'Maximum password length is 12 characters').required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values)
            dispatch(register(values)).then(() => {
                navigate('/login')
            });
        }

    });
    return (
        <div className="flex  max-sm:justify-center items-center justify-start h-screen w-screen bg-[url('./assets/images/register.jpg')] bg-cover  max-xl:bg-center">


            <div className="p-12 max-sm:w-[80%] w-[35%] bg-white rounded-md shadow-2xl max-sm:ml-0 ml-56 max-sm:p-10">
                <h1 className="text-2xl font-light mb-3">
                    CREATE AN ACCOUNT
                </h1>
                <form onSubmit={formik.handleSubmit} className="flex flex-col items-start space-y-3">
                    <input type="text" placeholder="First Name" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%] w-full  p-2 border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" />
                    {formik.touched.firstName && formik.errors.firstName && <span className="text-red-500 max-sm:text-sm">{formik.errors.firstName}</span>}
                    <input type="text" placeholder="Last name" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%]  w-full  p-2 border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" />
                    {formik.touched.lastName && formik.errors.lastName && <span className="text-red-500 max-sm:text-sm">{formik.errors.lastName}</span>}
                    <input type="text" placeholder="Contact" name="contact" value={formik.values.contact} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%] w-full  p-2  border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" />
                    {formik.touched.contact && formik.errors.contact && <span className="text-red-500 max-sm:text-sm">{formik.errors.contact}</span>}
                    <input type="email" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%] w-full  p-2  border border-gray-500   focus:border-teal-500 focus:ring-teal-500 outline-none" />
                    {formik.touched.email && formik.errors.email && <span className="text-red-500 max-sm:text-sm">{formik.errors.email}</span>}
                    <input type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="min-w-[40%] w-full   p-2 border border-gray-500 focus:border-teal-500 focus:ring-teal-500 outline-none" />
                    {formik.touched.password && formik.errors.password && <span className="text-red-500 max-sm:text-sm">{formik.errors.password}</span>}
                    <span className="text-justify text-xs">By Creating an account, I consent to the processing of my personal data in accordance with the <b className="inline-block text-xs">PRIVACY POLICY</b></span>
                    <button type="submit" className="bg-teal-700 text-white py-3 px-5 mt-5 select-none " disabled={user.isFetching}>{user.isFetching ? <Triangle
                        visible={true}
                        height="20"
                        width="20"
                        color="#FFFFFF"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                    /> : "SIGN UP"}</button>
                </form>
            </div>

        </div>
    )
}

export default Register
