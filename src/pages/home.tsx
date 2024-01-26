import { Outlet } from "react-router-dom"
import Annoucement from "../components/annoucement"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Newsletter from "../sections/news-letter"

const Home = () => {
    return (
        <main >
            <Navbar />
            <Annoucement />
            <Outlet />
            <Newsletter />
            <Footer />
        </main>
    )
}

export default Home