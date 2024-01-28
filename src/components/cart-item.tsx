import { CartItemProps, removeProductToCart } from '../redux/slices/cart-slice'
import { CiCircleRemove } from 'react-icons/ci'
import { useAppDispatch } from '../redux/redux-hooks'

const CartItem = ({ product, size, color, quantity, _id }: CartItemProps) => {
    const dispatch = useAppDispatch();
    return (
        <div className="flex justify-between max-sm:flex-col  shadow-lg bg-white rounded-xl relative">
            <div className="flex flex-[2]">
                <img src={product.images[0]} alt="" className=" max-sm:w-24 max-sm:h-auto  w-56 h-56 object-cover rounded-xl p-1" />
                <div className="max-sm:p-1 p-5 flex flex-col justify-around">
                    <span className='max-sm:text-sm'><b>Product:</b> {product.title}</span>
                    <span className='max-sm:text-sm truncate'><b>ID:</b> {product._id}</span>
                    <span className='max-sm:text-sm'><b>Color:</b> {color}</span>

                    <span className='max-sm:text-sm'><b>Size:</b> {size}</span>
                    <span className='max-sm:text-sm'><b>Qty:</b> {quantity}</span>
                    <div className="max-sm:flex items-center justify-between hidden">
                        <div className="max-sm:text-xl text-3xl font-extralight">
                            {product.price * quantity}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center max-sm:hidden">

                <div className="text-3xl font-extralight">
                    {product.price * quantity}
                </div>
            </div>

            <div className='absolute right-3 top-3 max-sm:top-1 max-sm:right-1'>
                <CiCircleRemove size={24} onClick={() => { dispatch(removeProductToCart(_id)) }} />
            </div>
        </div>
    )
}

export default CartItem