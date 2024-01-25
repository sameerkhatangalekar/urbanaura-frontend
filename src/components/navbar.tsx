import { CiShoppingCart } from "react-icons/ci"
import { FaSearch } from "react-icons/fa"
import Badge from "./badge"

import { Link } from "react-router-dom"
import { useAppSelector } from "../redux/redux-hooks"

const Navbar = () => {
    const cartQuantity = useAppSelector(state => state.cart.cartQuantity)
    return (
        <header className="h-16 w-full max-sm:h-[50px]">
            <nav className="flex max-sm:px-1 px-5 py-3 justify-center items-center">
                {/* Left */}
                <div className="flex-[1] flex  items-center justify-start ">
                    <span className="text-base cursor-pointer max-sm:hidden">EN</span>
                    <div className="flex items-center justify-between border-[1px] border-solid border-gray-300 ml-6 p-[5px] rounded-md space-x-1 max-sm:ml-0">
                        <input type="text" className="outline-none max-sm:w-12" placeholder="Search" />
                        <FaSearch color="gray" className="max-sm:h-3 max-sm:w-3 h-8 w-8" />
                    </div>

                </div>
                {/* Center */}
                <div className="flex-[1] text-center">
                    <h1 className="font-bold text-3xl max-sm:text-2xl">UrbanAura</h1>
                </div>
                {/* Right */}
                <div className="max-sm:flex-[2]  flex-1 flex  max-sm:justify-end max-sm:space-x-1 justify-end items-center space-x-2 ">
                    <div className="text-base cursor-pointer max-sm:text-xs max-sm:ml-2.5">REGISTER</div>
                    <div className="text-base cursor-pointer max-sm:text-xs max-sm:ml-2.5">SIGN IN</div>
                    <Link to={'/cart'}>
                        <div className="flex relative">
                            <CiShoppingCart className="max-sm:h-6 max-sm:w-6 h-8 w-8" />
                            {
                                cartQuantity > 0 ? <Badge cartItemsCount={cartQuantity} /> : null
                            }
                        </div>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Navbar