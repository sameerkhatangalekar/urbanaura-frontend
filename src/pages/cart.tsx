import { Link } from "react-router-dom";

import CartItem from "../components/cart-item";

import { useAppSelector } from "../redux/redux-hooks";



const Cart = () => {
    const cart = useAppSelector(state => state.cart);
    const user = useAppSelector(state => state.user.isLoggedIn);
    return (
        <>

            {
                user === false ? <div className="h-[50vh] flex items-center justify-center "><Link to={'/login'} className="underline">Login into your account</Link></div> : <div className="p-5 flex flex-col max-sm:p-2.5">
                    <h1 className="font-light text-center text-3xl">YOUR BAG</h1>
                    <div className="flex items-center justify-between p-5 max-sm:space-x-2">
                        <button className="p-2.5 font-semibold cursor-pointer  bg-black text-white" >CONTINUE SHOPPING</button>

                        <div className="max-sm:hidden">
                            <span className="underline cursor-pointer mx-2.5">Shopping Bag ({cart.cartQuantity})</span>
                            <span className="underline cursor-pointer mx-2.5">Yout wishlist (0)</span>
                        </div>

                        <button className="p-2.5 font-semibold cursor-pointer bg-black text-white">CHECKOUT NOW</button>
                    </div>

                    <div className="flex justify-between space-x-1 max-sm:flex-col max-sm:space-y-1">
                        <div className="flex-[3] p-5 space-y-3 border rounded-md">
                            {
                                cart.products.map((product) => (<CartItem key={product._id} {...product} />))
                            }

                        </div>

                        <div className="flex-1 border-[0.5px] border-solid rounded-md  p-5 ">
                            <h1 className="font-extralight text-3xl">ORDER SUMMARY</h1>
                            <div className="my-8 flex justify-between">
                                <span>Subtotal</span>
                                <span>{cart.cartTotal.toFixed(2)}</span>
                            </div>

                            <div className="my-8 flex justify-between font-medium text-2xl">
                                <span>Total</span>
                                <span>{cart.cartTotal.toFixed(2)}</span>
                            </div>

                            <button className="w-full bg-black text-white p-2.5 font-semibold ">
                                CHECKOUT NOW
                            </button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Cart