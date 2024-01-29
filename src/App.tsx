import { Toaster } from "react-hot-toast"

import Cart from "./pages/cart"
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
import PaymentSuccess from "./pages/payment-success"
import Orders from "./pages/orders"
import Layout from "./pages/layout"
import Order from "./pages/order"


function App() {
  const user = useAppSelector(state => state.user.isLoggedIn)

  return (
    <>
      <Routes>
        <Route path='/login' element={user ? <Navigate replace to={"/"} /> : <Login />} />
        <Route path='/register' element={user ? <Navigate replace to={"/"} /> : <Register />} />
        <Route path='/success' element={<PaymentSuccess />} />
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Landing />} />
          <Route path='/products'>
            <Route index element={<Products />} />
            <Route path='/products/:id/:categoryName' element={<Products />} />
          </Route>
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={user ? <Cart /> : <Navigate replace to={"/"} />} />

          <Route path='/orders'   >
            <Route index element={user ? <Orders /> : <Navigate replace to={"/"} />} />
            <Route path="/orders/:id" element={user ? <Order /> : <Navigate replace to={"/"} />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}

export default App
