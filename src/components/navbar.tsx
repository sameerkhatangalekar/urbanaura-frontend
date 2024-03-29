import { CiShoppingCart } from "react-icons/ci"
import Badge from "./badge"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/redux-hooks"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { IoIosLogOut } from "react-icons/io"
import { logout } from "../redux/slices/user-slice"
import { TfiPackage } from "react-icons/tfi"
import { VscAccount } from "react-icons/vsc"

const Navbar = () => {
    const cartQuantity = useAppSelector(state => state.cart.cart.cartQuantity)

    const user = useAppSelector(state => state.user.isLoggedIn)
    const dispatch = useAppDispatch();

    return (
        <header className="h-16 w-full max-sm:h-[50px] sticky  top-0 left-0 right-0 z-[20] bg-white " autoFocus>
            <nav className="flex max-sm:px-1 px-5 py-3 justify-center items-center">

                <div className="flex-[1] flex max-sm:hidden">

                </div>

                <div className="flex-[2] text-center max-sm:text-start  max-sm:px-3">
                    <Link to={'/'} ><h1 className="font-bold text-3xl max-sm:text-2xl">UrbanAura</h1></Link>
                </div>

                {
                    user === false ? <div className="max-sm:flex-[2]  flex-1 flex  max-sm:justify-end max-sm:space-x-1 justify-end items-center space-x-2 ">
                        <Link to={'/register'}>
                            <div className="text-base hover:border p-2 cursor-pointer max-sm:text-xs max-sm:ml-2.5 transition">REGISTER</div>
                        </Link>
                        <Link to={'/login'}>
                            <div className="text-base hover:border p-2 cursor-pointer max-sm:text-xs max-sm:ml-2.5 transition">SIGN IN</div>
                        </Link>



                        <Link to={'/login'}>
                            <div className="flex relative">
                                <CiShoppingCart className="max-sm:h-6 max-sm:w-6 h-8 w-8" />
                                {
                                    cartQuantity > 0 ? <Badge cartItemsCount={cartQuantity} /> : null
                                }
                            </div>
                        </Link>

                    </div> : <div className="max-sm:flex-[1]  flex-1 flex  max-sm:justify-end max-sm:space-x-2 justify-end items-center space-x-2 ">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="rounded-full flex items-center">
                                    <VscAccount className="max-sm:h-4 max-sm:w-4 h-7 w-7" />

                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        <Menu.Item>
                                            {({ active }) => (

                                                <div className={`${active ? 'bg-teal-500 text-white' : 'text-gray-900'
                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm justify-between`} onClick={() => {
                                                        dispatch(logout())
                                                    }}>
                                                    Logout
                                                    <IoIosLogOut />
                                                </div>
                                            )}

                                        </Menu.Item>

                                    </div>

                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <Link to={'/orders'}>
                            <TfiPackage className="max-sm:h-4 max-sm:w-4 h-6 w-6" />
                        </Link>


                        <Link to={'/cart'}>
                            <div className="flex relative">
                                <CiShoppingCart className="max-sm:h-6 max-sm:w-6 h-8 w-8" />
                                {
                                    cartQuantity > 0 ? <Badge cartItemsCount={cartQuantity} /> : null
                                }
                            </div>
                        </Link>

                    </div>
                }
            </nav>
        </header>
    )
}

export default Navbar