import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../redux/redux-hooks"
import { useEffect } from "react";
import { getCart } from "../redux/slices/cart-slice";


const PaymentSuccess = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const call = dispatch(getCart());


        return () => call.abort();
    }, [])
    return (
        <div className="h-screen w-screen bg-red-50 flex justify-center items-center ">
            <div className="bg-white max-sm:w-[70%] max-sm:h-[40%] w-1/3 h-1/4 shadow-2xl rounded-xl flex flex-col py-3 px-3 space-y-2 relative">
                <span className="text-violet-500 font-bold text-sm">Payment succesfull</span>
                <h1 className="max-sm:text-2xl font-bold">Thanks for ordering! 😁</h1>
                <p className="text-base font-medium">We appreciate your order, we’re currently processing it. So hang tight and we’ll send you confirmation very soon!</p>
                <Link to={'/'}><div className="absolute bottom-3 right-3 z-[10] flex items-center justify-between text-violet-500 font-bold text-sm p-2 space-x-2"><span>Continue Shopping</span> <span><FaLongArrowAltRight /></span></div>
                </Link>
            </div>


        </div>
    )
}

export default PaymentSuccess