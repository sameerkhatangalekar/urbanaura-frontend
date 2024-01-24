import Annoucement from "../components/annoucement"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Categories from "../sections/categories"
import HeroSection from "../sections/hero-section"
import Newsletter from "../sections/news-letter"
import ProductList from "../sections/product-list"

const Home = () => {
    return (
        <main >
            <Navbar />
            <Annoucement />
            <HeroSection />
            <Categories />
            <ProductList sort={""} filter={{}} category={''} />
            <Newsletter />
            <Footer />
        </main>
    )
}

export default Home