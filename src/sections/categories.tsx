import CategoryItem from "../components/category-card"
import { categoriesData } from "../lib/dummy-data"

const Categories = () => {
    return (
        <div className="flex p-5 justify-between max-sm:flex-col max-sm:p-0">
            {
                categoriesData.map((category) => (<CategoryItem key={category.id} {...category} />))
            }

        </div>
    )
}

export default Categories