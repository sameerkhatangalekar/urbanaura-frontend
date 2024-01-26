import { IoIosAdd, IoIosRemove } from 'react-icons/io'
import { CartItemProps } from '../redux/cart-slice'

const CartItem = ({ _id, title, size, price, productQuantity, images, color }: CartItemProps) => {
    return (
        <div className="flex justify-between max-sm:flex-col">
            <div className=" flex flex-[2]">
                <img src={images[0]} alt="" className="w-56 h-56 object-cover" />
                <div className="p-5 flex flex-col justify-around">
                    <span><b>Product:</b> {title}</span>
                    <span className='inline'><b>ID:</b> {_id}</span>
                    <span><b>Color:</b> {color}</span>

                    <span><b>Size:</b> {size}</span>
                    <div className="max-sm:flex items-center justify-between hidden ">
                        <div className="flex items-center">
                            <IoIosAdd className="cursor-pointer" />
                            <div className="text-2xl m-5">{productQuantity}
                            </div>
                            <IoIosRemove className="cursor-pointer" />
                        </div>
                        <div className="text-3xl font-extralight">
                            {price * productQuantity}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center max-sm:hidden">
                <div className="flex items-center mb-5">
                    <IoIosAdd className="cursor-pointer" />
                    <div className="text-2xl m-5">{productQuantity}
                    </div>
                    <IoIosRemove className="cursor-pointer" />
                </div>
                <div className="text-3xl font-extralight">
                    {price * productQuantity}
                </div>
            </div>
        </div>
    )
}

export default CartItem