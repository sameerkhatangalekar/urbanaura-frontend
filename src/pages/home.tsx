import Categories from "../sections/categories"
import HeroSection from "../sections/hero-section"
import PopularProducts from "../sections/popular-products"

const Home = () => {
    return (
        <main >
            <HeroSection />
            <Categories />
            <PopularProducts />
        </main>
    )
}

export default Home