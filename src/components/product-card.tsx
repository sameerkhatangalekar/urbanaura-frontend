import { BsCartPlus } from "react-icons/bs";
import { popularProducts } from "../lib/dummy-data"
import { MdFavoriteBorder } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


type ProductCardProps = typeof popularProducts[number];

const ProductCard = ({ imageURL }: ProductCardProps) => {
    return (
        <div className="flex-1 m-1 min-w-[320px] max-w-[400px] h-[350px] bg-sky-50 relative flex items-center justify-center cursor-pointer">
            <img src={imageURL} alt="Product" className="h-[90%] object-cover" />
            <div className="absolute top-0 left-0 h-full w-full flex  items-center justify-center space-x-1 opacity-0 hover:opacity-100 transition duration-[600ms]">

                <div className="rounded-full bg-white h-10 w-10 hover:scale-110 transition duration-[600ms] flex items-center justify-center">
                    <BsCartPlus />
                </div>
                <div className="rounded-full bg-white h-10 w-10 hover:scale-110 transition duration-[600ms] flex items-center justify-center">
                    <CiSearch />
                </div>

                <div className="rounded-full bg-white h-10 w-10 hover:scale-110 transition duration-[600ms] flex items-center justify-center">
                    <MdFavoriteBorder />
                </div>

            </div>
        </div>
    )
}

export default ProductCard