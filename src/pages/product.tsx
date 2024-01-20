import { IoIosAdd, IoIosRemove } from "react-icons/io"
import { product1 } from "../assets/images"


const Product = () => {
    return (
        <div className="p-12 flex max-sm:flex-col max-sm:p-2.5 max-sm:space-y-2">
            <div className="flex-1 ">
                <img src={product1} alt="Product 1 " className="w-full h-[90vh] max-sm:h-[40vh] object-cover" />
            </div>
            <div className="flex-1 px-12 max-sm:px-2.5">
                <h1 className="text-3xl font-extralight">Pastel Hoodie</h1>
                <p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ducimus eum voluptates. Exercitationem rerum tenetur optio quasi, voluptatem repudiandae veritatis inventore temporibus nisi veniam dolor at nesciunt beatae autem. Illum.</p>
                <span className=" font-thin text-4xl">$20</span>
                <div className="flex justify-between  w-[50%] max-sm:w-full my-8">
                    <div className="flex items-center">
                        <span className="text-xl font-extralight mr-1">Color:</span>
                        <div className="w-5 h-5 rounded-full bg-black mx-1 cursor-pointer" />
                        <div className="w-5 h-5 rounded-full bg-blue-900 mx-1 cursor-pointer" />
                        <div className="w-5 h-5 rounded-full bg-gray-800 mx-1 cursor-pointer" />
                    </div>

                    <div className="flex items-center">
                        <span className="text-xl font-extralight">Size</span>

                        <select name="size" id="sizeFilter" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400  ml-2.5 p-1 border border-gray-400">
                            <option value="M" >M</option>
                            <option value="L" >L</option>
                            <option value="XL" >XL</option>
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