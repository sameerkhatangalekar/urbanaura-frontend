import { IoIosAdd, IoIosRemove } from "react-icons/io"

import { useEffect, useState } from "react"
import { ProductProps } from "../lib/types";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../lib/constants";
import { LineWave } from "react-loader-spinner";
import toast from "react-hot-toast";
import { addProduct } from "../redux/cart-slice";;
import { useAppDispatch } from "../redux/redux-hooks";


const Product = () => {

    const { id } = useParams();
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState<ProductProps | null>(null)
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState<string | null>(null)
    const [size, setSize] = useState<string | null>(null)
    const dispatch = useAppDispatch()

    const handleQuantityUpdate = (operation: 'asc' | 'dsc') => {
        operation === 'asc' ? setQuantity((prev) => ++prev) : setQuantity((prev) => --prev);

    }

    const handleColorChange = (event: { target: { name: string; value: string } }) => {
        console.log(event.target.value)
        setColor(event.target.value);
    }

    const handleSizeChange = (event: { target: { name: string; value: string } }) => {
        console.log(event.target.value)
        setSize(event.target.value);
    }

    const handleClick = () => {

        if (product && color && size) {
            dispatch(addProduct({
                ...product, color: color!, productQuantity: quantity,
                size: size
            }));
        }


    }

    useEffect(() => {

        const controller = new AbortController();
        ; (async () => {
            try {
                setLoading(true);
                setError(false)
                const response = await axios.get(`${baseUrl}/product/${id}`, {
                    signal: controller.signal
                })

                setProduct(response.data);
                setColor(response.data.colors[0])
                setSize(response.data.sizes[0])

            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message)
                    return;
                }
                setError(true)
                toast.error('Oops Something went wrong 😥')
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        )()

        return () => controller.abort();
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
        <>
            <div className="p-12 flex max-sm:flex-col max-sm:p-2.5 max-sm:space-y-2">
                <div className="flex-1 ">
                    <img src={product?.images[0]} alt="Product 1 " className="w-full h-[90vh] max-sm:h-[40vh] object-cover" />
                </div>
                <div className="flex-1 px-12 max-sm:px-2.5">
                    <h1 className="text-3xl font-extralight">{product?.title}</h1>
                    <p className="my-5">{product?.description}</p>
                    <span className=" font-thin text-4xl">${product?.price}</span>
                    <div className="flex justify-between  w-[50%] max-sm:w-full my-8 space-x-2">
                        <div className="flex items-center">
                            <span className="text-xl font-extralight">Color</span>

                            <select name="color" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400  ml-2.5 p-1 border border-gray-400" onChange={handleColorChange} defaultValue={product?.colors[0]}>
                                {
                                    product?.colors.map((color) => (<option key={color} value={color} >{color}</option>))
                                }
                            </select>


                        </div>

                        <div className="flex items-center">
                            <span className="text-xl font-extralight">Size</span>

                            <select name="size" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400  ml-2.5 p-1 border border-gray-400" onChange={handleSizeChange} defaultValue={product?.sizes[0]}>
                                {
                                    product?.sizes.map((size) => (<option key={size} value={size} >{size}</option>))
                                }
                            </select>


                        </div>


                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center font-bold text-black space-x-2">
                            <IoIosRemove onClick={() => handleQuantityUpdate('dsc')} />

                            <span className="w-16 h-12 rounded-md border font-light text-center flex items-center justify-center">{quantity}</span>
                            <IoIosAdd onClick={() => handleQuantityUpdate('asc')} />
                        </div>
                        <button className="p-4 border-2 border-solid font-medium border-teal-700 hover:bg-[#f8f4f4] shadow-xl" onClick={handleClick}>ADD TO CART</button>

                    </div>
                </div>

            </div>

        </>

    )
}

export default Product