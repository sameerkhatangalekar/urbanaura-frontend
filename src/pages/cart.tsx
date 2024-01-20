import { IoIosAdd, IoIosRemove } from "react-icons/io"
import { product2 } from "../assets/images"

const Cart = () => {
    return (
        <div className="p-5 flex flex-col max-sm:p-2.5">
            <h1 className="font-light text-center text-3xl">YOUR BAG</h1>
            <div className="flex items-center justify-between p-5">
                <button className="p-2.5 font-semibold cursor-pointer  bg-black text-white" >CONTINUE SHOPPING</button>

                <div className="max-sm:hidden">
                    <span className="underline cursor-pointer mx-2.5">Shopping Bag (2)</span>
                    <span className="underline cursor-pointer mx-2.5">Yout wishlist (0)</span>
                </div>

                <button className="p-2.5 font-semibold cursor-pointer bg-black text-white">CHECKOUT NOW</button>
            </div>

            <div className="flex justify-between space-x-1 max-sm:flex-col max-sm:space-y-1">
                <div className="flex-[3] p-5 space-y-3 border rounded-md">
                    <div className="flex justify-between max-sm:flex-col">
                        <div className=" flex flex-[2]">
                            <img src={product2} alt="" className="w-56 h-56 object-cover" />
                            <div className="p-5 flex flex-col justify-around">
                                <span><b>Product:</b> JESSIE THUNDER SUITS</span>
                                <span><b>ID:</b> 4577186787</span>
                                <div className="rounded-full h-8 w-8 bg-amber-100 border border-black"></div>
                                <span><b>Size:</b> M</span>
                                <div className="max-sm:flex items-center justify-between hidden ">
                                    <div className="flex items-center">
                                        <IoIosAdd className="cursor-pointer" />
                                        <div className="text-2xl m-5">1
                                        </div>
                                        <IoIosRemove className="cursor-pointer" />
                                    </div>
                                    <div className="text-3xl font-extralight">
                                        $80
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col items-center justify-center max-sm:hidden">
                            <div className="flex items-center mb-5">
                                <IoIosAdd className="cursor-pointer" />
                                <div className="text-2xl m-5">1
                                </div>
                                <IoIosRemove className="cursor-pointer" />
                            </div>
                            <div className="text-3xl font-extralight">
                                $80
                            </div>
                        </div>
                    </div>




                </div>

                <div className="flex-1 border-[0.5px] border-solid rounded-md  p-5 h-[50vh]">
                    <h1 className="font-extralight text-3xl">ORDER SUMMARY</h1>
                    <div className="my-8 flex justify-between">
                        <span>Subtotal</span>
                        <span>$80</span>
                    </div>
                    <div className="my-8 flex justify-between">
                        <span>Estimated Shipping</span>
                        <span>+ $5.90</span>
                    </div>
                    <div className="my-8 flex justify-between">
                        <span>Shipping Discount</span>
                        <span>- $5.90</span>
                    </div>
                    <div className="my-8 flex justify-between font-medium text-2xl">
                        <span>Total</span>
                        <span>$80</span>
                    </div>

                    <button className="w-full bg-black text-white p-2.5 font-semibold ">
                        CHECKOUT NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart