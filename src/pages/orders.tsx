
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks"
import { getOrders } from "../redux/slices/order-slice";
import { LineWave } from "react-loader-spinner";
import { Link } from "react-router-dom";
import OrderItem from "../components/order-item";

const Orders = () => {
    const ordersState = useAppSelector(state => state.orders)
    const user = useAppSelector(state => state.user.isLoggedIn);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user) {
            const getOrdersCall = dispatch(getOrders())
            return () => getOrdersCall.abort()
        }

    }, [])

    if (user === false) {
        return <div className="h-[50vh] flex items-center justify-center "><Link to={'/login'} className="underline">Login into your account</Link></div>;
    }

    if (user === true && ordersState.error === true) {
        return <h1 className="text-4xl font-bold text-center text-gray-400 py-3">Something went wrong !</h1>
    }

    if (user === true && ordersState.isFetching === true) {
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
        <>

            <div className="p-5 flex flex-col max-sm:p-2.5 space-y-2">
                <h1 className="font-light text-center text-3xl">YOUR ORDERS</h1>
                <div className="p-5 max-sm:p-2 space-y-3 border rounded-md bg-slate-50 max-sm:w-full w-[70%] mx-auto">
                    {
                        ordersState.orders.length === 0 ? <h1 className="text-4xl font-bold text-center text-gray-900">Cart is empty </h1> : ordersState.orders.map((order) => (<OrderItem key={order._id} {...order} />))
                    }

                </div>

            </div>


        </>
    )
}

export default Orders