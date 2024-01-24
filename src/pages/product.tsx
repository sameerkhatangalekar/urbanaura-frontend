import { IoIosAdd, IoIosRemove } from "react-icons/io"

import { useEffect, useState } from "react"
import { ProductProps } from "../lib/types";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../lib/constants";
import { LineWave } from "react-loader-spinner";


const Product = () => {

    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState<ProductProps | null>(null)


    useEffect(() => {
        // const controller = new AbortController();
        ; (async () => {
            try {
                setLoading(true);
                setError(false)
                const response = await axios.get(`${baseUrl}/product/${id}`, {
                    // signal: controller.signal
                })

                setProduct(response.data);

            } catch (error) {
                setError(true)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        )()

        // return () => controller.abort();
    }, [])

    if (error) {
        return <h1 className="text-4xl font-bold text-center text-gray-400 py-3">Something went wrong !</h1>
    }
    if (isLoading) {
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
        <div className="p-12 flex max-sm:flex-col max-sm:p-2.5 max-sm:space-y-2">
            <div className="flex-1 ">
                <img src={product?.images[0]} alt="Product 1 " className="w-full h-[90vh] max-sm:h-[40vh] object-cover" />
            </div>
            <div className="flex-1 px-12 max-sm:px-2.5">
                <h1 className="text-3xl font-extralight">{product?.title}</h1>
                <p className="my-5">{product?.description}</p>
                <span className=" font-thin text-4xl">${product?.price}</span>
                <div className="flex justify-between  w-[50%] max-sm:w-full my-8">
                    <div className="flex items-center">
                        <span className="text-xl font-extralight mr-1">Color:</span>
                        {
                            product?.colors.map((color) => (<div key={color} className="w-5 h-5 rounded-full bg-black mx-1 cursor-pointer" />))
                        }
                    </div>

                    <div className="flex items-center">
                        <span className="text-xl font-extralight">Size</span>

                        <select name="size" id="sizeFilter" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400  ml-2.5 p-1 border border-gray-400">
                            {
                                product?.sizes.map((size) => (<option key={size} value={size} >{size}</option>))
                            }
                        </select>


                    </div>


                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center font-bold text-black space-x-2">
                        <IoIosAdd />
                        <span className="w-16 h-12 rounded-md border font-light text-center flex items-center justify-center">10000</span>
                        <IoIosRemove />
                    </div>
                    <button className="p-4 border-2 border-solid font-medium border-teal-700 hover:bg-[#f8f4f4] shadow-xl">ADD TO CART</button>

                </div>
            </div>

        </div>
    )
}

export default Product