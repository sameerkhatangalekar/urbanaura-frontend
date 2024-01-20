import PopularProducts from "../sections/popular-products"

const Products = () => {
    return (
        <div className="h-full w-full">
            <h1 className="font-bold m-5 text-3xl">Dresses</h1>
            <div className="flex justify-between">

                <div className="flex-1 m-5 max-sm:my-0 flex items-center  max-sm:flex-col max-sm:items-start space-y-1">
                    <span className="text-xl font-semibold mr-5 max-sm:mr-0">Filter Products:</span>
                    <select name="color" id="colorFilter" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400 p-2.5 mr-5">
                        <option disabled selected>Color</option>
                        <option value="Black" >Black</option>
                        <option value="Blue" >Blue</option>
                        <option value="White" >White</option>
                        <option value="Gray" >Gray</option>
                        <option value="Yellow" >Yellow</option>
                        <option value="Pink" >Pink</option>
                    </select>
                    <select name="size" id="sizeFilter" className="appearance-auto  bg-white focus:outline-none focus:border focus:border-gray-400 p-2.5 mr-5">
                        <option disabled selected>Size</option>
                        <option value="Black" >S</option>
                        <option value="Blue" >M</option>
                        <option value="White" >L</option>
                        <option value="Gray" >XL</option>
                        <option value="Yellow" >XXl</option>
                    </select>

                </div>

                <div className="flex-1 m-5 max-sm:my-0 flex  items-center  max-sm:flex-col max-sm:items-start space-y-1">
                    <span className="text-xl font-semibold mr-5 max-sm:mr-0 ">Sort Products:</span>
                    <select name="" id="" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400 p-2.5 mr-5">
                        <option selected>Newest</option>
                        <option >Price(asc.)</option>
                        <option >Price(dsc.)</option>
                    </select>
                </div>
            </div>
            <PopularProducts />
        </div>
    )
}

export default Products