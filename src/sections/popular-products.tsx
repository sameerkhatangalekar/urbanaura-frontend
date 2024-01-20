import { popularProducts } from "../lib/dummy-data"
import ProductCard from "../components/product-card"

const PopularProducts = () => {
    return (

        <div className="p-5 flex flex-wrap justify-between"  >
            {
                popularProducts.map((product) => (<ProductCard key={product.id} {...product} />))
            }

        </div>
    )
}

export default PopularProducts