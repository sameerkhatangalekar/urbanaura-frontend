import { Link } from "react-router-dom";
import { CategoryProps } from "../lib/types";
import { useState } from "react";

const CategoryItem = ({ name, image, _id }: CategoryProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (
        <div className="flex-1 m-1 h-[70vh] relative overflow-hidden group">
            <Link to={`/products/${_id}/${name}`}>

                {!imageLoaded && (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 rounded-md animate-pulse">

                    </div>
                )}
                <img
                    src={image}
                    alt="product image"
                    className={`object-cover w-full h-full group-hover:scale-105 transition duration-[600ms] ${imageLoaded ? '' : 'hidden'}`}
                    onLoad={handleImageLoad}

                />
                <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center flex-col">
                    <h1 className="text-white mb-5 font-bold text-4xl text-wrap select-none">{name}</h1>
                    <button className="bg-white p-2.5 border-none text-gray-600 max-sm:hover:scale-100 hover:scale-110 transition duration-[600ms]  font-semibold select-none">
                        SHOP NOW
                    </button>
                </div>
            </Link>


        </div>
    )
}

export default CategoryItem