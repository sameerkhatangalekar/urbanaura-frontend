import { BsCartPlus } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { ProductProps } from "../lib/types";



const ProductCard = ({ images, price, title }: ProductProps) => {
    return (
        <div className="flex flex-col m-1 rounded-md shadow-md bg-white hover:scale-105 transition">
            <div className="h-72 mt-3 mx-3 overflow-hidden bg-red-50 rounded-md">
                <img src={images[0]} alt="product image" className="!object-cover h-72 w-full transition" />
            </div>
            <div className="mx-3 my-2 flex flex-col space-y-2 ">
                <h1 className="font-medium text-base  truncate">{title}</h1>
                <div className="flex w-full justify-between">
                    <span className="font-bold text-xl">${price}</span> <MdFavoriteBorder />
                </div>
                <button className="bg-slate-900 text-white flex items-center justify-center p-3 rounded-md font-semibold text-base"><BsCartPlus /> Add to cart</button>
            </div>

        </div>


    )
}

export default ProductCard