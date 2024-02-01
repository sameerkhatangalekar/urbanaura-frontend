import { Link } from "react-router-dom";
import CartItem from "../components/cart-item";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { checkout } from "../redux/slices/cart-slice";
import { LineWave, Triangle } from "react-loader-spinner";



const Cart = () => {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();


    if (cart.error === true) {
        return <h1 className="text-4xl font-bold text-center text-gray-400 py-3">Something went wrong !</h1>
    }

    if (cart.isFetching === true) {
        return (
            <div className="h-16 w-full flex justify-center items-center mb-10">
                <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#111827"
                    ariaLabel="line-wave-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                />
            </div>
        );
    }




    return (
        <div className="p-5 flex flex-col max-sm:p-2.5">
            <h1 className="font-light text-center text-3xl">YOUR BAG</h1>
            <div className="flex items-center justify-between p-5 max-sm:space-x-2">
                <Link to={'/products'}> <button className="p-2.5 font-semibold cursor-pointer  bg-black text-white" >CONTINUE SHOPPING</button></Link>

                <div className="max-sm:hidden">
                    <span className="underline cursor-pointer mx-2.5">Shopping Bag ({cart.cart.cartQuantity})</span>
                    <span className="underline cursor-pointer mx-2.5">Yout wishlist (0)</span>
                </div>

                <button className="p-2.5 font-semibold cursor-pointer bg-black text-white" disabled={cart.cart.cartQuantity <= 0 || cart.isCheckingout === true} onClick={() => dispatch(checkout())}> {
                    cart.isCheckingout
                        ? <Triangle
                            visible={true}
                            height="20"
                            width="20"
                            color="#FFFFFF"
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> :
                        "CHECKOUT NOW"}</button>
            </div>

            <div className="flex justify-between space-x-1 max-sm:flex-col max-sm:space-y-1 max-sm:space-x-0">
                <div className="flex-[3] p-5 max-sm:p-2.5 border rounded-md bg-slate-50  h-[60vh] overflow-y-scroll space-y-2">
                    {
                        cart.cart.cartQuantity === 0 ? <h1 className="text-4xl font-bold text-center text-gray-900">Cart is empty </h1> : cart.cart.products.map((product) => (<CartItem key={product._id} {...product} />))
                    }

                </div>

                <div className="flex-1 border-[0.5px] border-solid rounded-md  p-5 max-sm:p-2.5 bg-slate-50">
                    <h1 className="font-extralight text-3xl">ORDER SUMMARY</h1>
                    <div className="my-8 flex justify-between">
                        <span>Subtotal</span>
                        <span>{cart.cart.cartTotalAmount.toFixed(2)}</span>
                    </div>

                    <div className="my-8 flex justify-between font-medium text-2xl">
                        <span>Total</span>
                        <span>{cart.cart.cartTotalAmount.toFixed(2)}</span>
                    </div>

                    <button className="w-full bg-black text-white p-2.5 font-semibold transition text-center" disabled={cart.cart.cartQuantity <= 0 || cart.isCheckingout === true} onClick={() => dispatch(checkout())}> {
                        cart.isCheckingout
                            ? <Triangle
                                visible={true}
                                height="20"
                                width="20"
                                color="#FFFFFF"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /> :
                            "CHECKOUT NOW"}</button>
                </div>
            </div>
        </div>)
}

export default Cart