import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks";
import { ProductElement, cancelOrder } from "../redux/slices/order-slice";



const Order = () => {
    const orders = useAppSelector(state => state.orders);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const order = orders.orders.find((item) => item._id === id);
    return (
        <div className="p-5 flex flex-col max-sm:p-2.5">
            <h1 className="font-light text-center text-3xl">YOUR BAG</h1>


            <div className="flex justify-between space-x-1 max-sm:flex-col max-sm:space-y-1 max-sm:space-x-0 bg-slate-50">
                <div className="flex-[3] p-2 max-sm:p-2.5 border rounded-md   h-[60vh] flex flex-col">
                    <div className="flex justify-between">
                        <h2>
                            Order Id : #{order!.orderId}
                        </h2>
                        <h2>
                            Status : {order!.status.toUpperCase()}
                        </h2>
                    </div>
                    <span>Placed Date : {new Date(order!.createdAt).toLocaleString()}</span>
                    <div className="flex-1 overflow-y-auto bg-white space-y-1 p-1 border">
                        {
                            order!.products.map((item: ProductElement) => (
                                <div className="flex justify-between max-sm:flex-col  shadow-lg bg-white rounded-xl border">
                                    <div className="flex flex-[2]">
                                        <img src={item.product.images[0]} alt="" className=" max-sm:w-24 max-sm:h-auto  w-32 h-auto object-cover rounded-xl p-1" />
                                        <div className="max-sm:p-1 p-5 flex flex-col justify-around">
                                            <span className='max-sm:text-sm'><b>Product:</b> {item.product.title}</span>
                                            <span className='max-sm:text-sm'><b>Color:</b> {item.color}</span>

                                            <span className='max-sm:text-sm'><b>Size:</b> {item.size}</span>
                                            <span className='max-sm:text-sm'><b>Qty:</b> {item.quantity}</span>
                                            <div className="max-sm:flex items-center justify-between hidden">
                                                <div className="max-sm:text-xl text-3xl font-extralight">
                                                    {item.itemAmount}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col items-center justify-center max-sm:hidden">

                                        <div className="text-3xl font-extralight">
                                            {item.itemAmount}
                                        </div>
                                    </div>

                                </div>

                            ))
                        }
                    </div>

                </div>

                <div className="flex-1 border-[0.5px] border-solid rounded-md  p-5 max-sm:p-2.5 bg-slate-50">
                    <h1 className="font-bold text-xl">ORDER SUMMARY</h1>
                    <div className="my-8 flex justify-between">
                        <span>Subtotal</span>
                        <span>{order!.totalAmount}</span>
                    </div>
                    <div className="my-8 flex justify-between font-medium text-2xl">
                        <span>Total</span>
                        <span>{order!.totalAmount}</span>
                    </div>
                    <div className="border mb-1"></div>
                    <h1 className="text-xl font-bold">Shipping</h1>
                    <div className="flex flex-col text-md">
                        <span>{order!.shipping.line1}</span>
                        <span>{order!.shipping.line2}</span>
                        <span>{order!.shipping.city}</span>
                        <span>{order!.shipping.postal_code}</span>
                        <span>{order!.shipping.state}</span>
                        <span>{order!.shipping.country}</span>
                    </div>
                    {
                        order?.status === 'pending' ? <button type="submit" className="bg-teal-700 text-white py-3 px-5 mt-5 select-none" onClick={() => dispatch(cancelOrder(order._id)).then(() => navigate('/orders'))}>Cancel Order</button> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Order