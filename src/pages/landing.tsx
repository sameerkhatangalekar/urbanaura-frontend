import Categories from '../sections/categories'
import HeroSection from '../sections/hero-section'
import ProductList from '../sections/product-list'

const Landing = () => {
    return (
        <>
            <HeroSection />
            <Categories />

            <div className="relative flex p-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-2xl">Trending Products</span>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>

            <ProductList sort={""} filter={{}} slice={4} />
        </>
    )
}

export default Landing