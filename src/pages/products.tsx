import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import ProductList from "../sections/product-list";

const Products = () => {
    const { id } = useParams();
    const [filter, setFilter] = useState({});
    const [sort, setSort] = useState('newest');
    console.log(id)


    const handleFilters = (event: { target: { name: string; value: string } }) => {
        const value = event.target.value;
        setFilter({
            ...filter,
            [event.target.name]: value,
        },)


    }
    const handleSort = (event: { target: { name: string; value: string } }) => {

        setSort(event.target.value);

    }
    useEffect(() => {
        setFilter({
            ...filter,
            ['category']: id,
        },)
    }, [])


    return (
        <div className="h-full w-full relative ">
            <div className="bg-white sticky top-0 left-0 right-0 z-[10] border-b">
                <h1 className="font-bold m-5 text-3xl">Dresses</h1>
                <div className="flex justify-between">

                    <div className="flex-1 m-5 max-sm:my-0 flex items-center  max-sm:flex-col max-sm:items-start space-y-1">
                        <span className="text-xl font-semibold mr-5 max-sm:mr-0">Filter Products:</span>
                        <select name="color" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400 p-2.5 mr-5" onChange={handleFilters} defaultValue='Color'>
                            <option disabled value='Color' >Color</option>
                            <option value="Black" >Black</option>
                            <option value="Blue" >Blue</option>
                            <option value="White" >White</option>
                            <option value="Gray" >Gray</option>
                            <option value="Yellow" >Yellow</option>
                            <option value="Pink" >Pink</option>
                        </select>
                        <select name="size" className="appearance-auto  bg-white focus:outline-none focus:border focus:border-gray-400 p-2.5 mr-5" onChange={handleFilters} defaultValue='Size'>
                            <option disabled value='Size'>Size</option>
                            <option value="XS" >XS</option>
                            <option value="S" >S</option>
                            <option value="M" >M</option>
                            <option value="L" >L</option>
                            <option value="XL" >XL</option>
                            <option value="XXl" >XXl</option>
                        </select>

                    </div>

                    <div className="flex-1 m-5 max-sm:my-0 flex  items-center  max-sm:flex-col max-sm:items-start space-y-1">
                        <span className="text-xl font-semibold mr-5 max-sm:mr-0 ">Sort Products:</span>
                        <select name="" id="" className="appearance-auto bg-white focus:outline-none focus:border focus:border-gray-400 p-2.5 mr-5" onChange={handleSort} defaultValue={'newest'}>
                            <option value='newest'>Newest</option>
                            <option value='asc'>Price(asc.)</option>
                            <option value='dsc'>Price(dsc.)</option>
                        </select>
                    </div>
                </div>
            </div>
            <ProductList sort={sort} filter={filter} slice={0} />
        </div>
    )
}

export default Products