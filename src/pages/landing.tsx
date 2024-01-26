import Categories from '../sections/categories'
import HeroSection from '../sections/hero-section'
import ProductList from '../sections/product-list'

const Landing = () => {
    return (
        <>
            <HeroSection />
            <Categories />
            <ProductList sort={""} filter={{}} slice={4} />
        </>
    )
}

export default Landing