import { categoriesData } from "../lib/dummy-data"

type CategoryItemProps = typeof categoriesData[number];

const CategoryItem = ({ categoryName, imageURL }: CategoryItemProps) => {
    return (
        <div className="flex-1 m-1 h-[70vh] relative overflow-hidden group">
            <img src={imageURL} alt={`${categoryName} image`} className="w-full h-full max-sm:h-[20vh] object-cover group-hover:scale-105 transition duration-[600ms] " />

            <div className="absolute h-full w-full top-0 left-0 flex justify-center items-center flex-col">
                <h1 className="text-white mb-5 font-bold text-4xl text-wrap select-none">{categoryName}</h1>
                <button className="bg-white p-2.5 border-none text-gray-600 max-sm:hover:scale-100 hover:scale-110 transition duration-[600ms]  font-semibold select-none">
                    SHOP NOW
                </button>
            </div>

        </div>
    )
}

export default CategoryItem