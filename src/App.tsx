import { Toaster } from "react-hot-toast"

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
import { useAppSelector } from "./redux/redux-hooks"
import Landing from "./pages/landing"


function App() {
  const user = useAppSelector(state => state.user.currentUser)

  return (
    <>
      <Routes>
        <Route path='/login' element={user ? <Navigate replace to={"/"} /> : <Login />} />
        <Route path='/register' element={user ? <Navigate replace to={"/"} /> : <Register />} />
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Landing />} />
          <Route path='/products'>
            <Route index element={<Products />} />
            <Route path='/products/:id/:categoryName' element={<Products />} />
          </Route>
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
