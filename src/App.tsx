import { Toaster } from "react-hot-toast"
import Annoucement from "./components/annoucement"
import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Cart from "./pages/cart"
import Home from "./pages/home"
import Login from "./pages/login"
import Product from "./pages/product"
import Products from "./pages/products"
import Register from "./pages/register"


import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";


function App() {
  const user = true

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Navigate replace to={"/"} /> : <Login />} />
        <Route path='/register' element={user ? <Navigate replace to={"/"} /> : <Register />} />

        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path='/products/:id/:categoryName' element={<Products />} />
        </Route>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
      <Toaster />
    </>

    // <>


    //   <Navbar />
    //   <Annoucement />
    //   <Login />
    //   <Register />
    //   <Home />
    //   <Products />
    //   <Product />
    //   <Cart />
    //   <Newsletter />
    //   <Footer />
    // </>
  )
}

export default App
