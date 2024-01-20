import Annoucement from "./components/annoucement"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Cart from "./pages/cart"
import Home from "./pages/home"
import Login from "./pages/login"
import Product from "./pages/product"
import Products from "./pages/products"
import Register from "./pages/register"
import Newsletter from "./sections/news-letter"

function App() {


  return (


    <>


      <Navbar />
      <Annoucement />
      <Login />
      <Register />
      <Home />
      <Products />
      <Product />
      <Cart />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
