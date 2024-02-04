import { useEffect } from 'react'
import Categories from '../sections/categories'
import HeroSection from '../sections/hero-section'
import ProductList from '../sections/product-list'
import { useAppDispatch, useAppSelector } from '../redux/redux-hooks'
import { getCart } from '../redux/slices/cart-slice'
import { Link } from 'react-router-dom'

const Landing = () => {
    const user = useAppSelector(state => state.user.isLoggedIn);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user) {
            const getCartCall = dispatch(getCart());

            return () => getCartCall.abort();
        }


    }, [])

    return (
        <>
            <HeroSection />
            <div className='pb-2 pl-6 max-sm:p-1'>
                <Link to={'/products'} >
                    <button className='p-3 bg-slate-200 hover:scale-105 transition border border-gray-700 max-sm:w-full max-sm:'>Explore all</button>
                </Link>
            </div>
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