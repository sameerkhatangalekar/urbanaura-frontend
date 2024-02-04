import { FaInstagram, FaFacebook } from "react-icons/fa"
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6"
import { usefulLinks } from "../lib/constants"
import { IoMdMail } from "react-icons/io"
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer >
            <div className="w-screen flex items-start justify-center max-sm:flex-col">
                <div className="flex-1 flex flex-col p-5  items-start justify-center">
                    <h1 className="font-bold text-2xl">UrbanAura</h1>
                    <p className="my-5">Welcome to Urbanaura – where style meets sophistication, and fashion transcends boundaries. Immerse yourself in a world of curated clothing that seamlessly blends urban chic with an aura of timeless elegance. </p>
                    <div className="flex">
                        <div className="w-10 h-10 mr-5 bg-[#cd486b] rounded-full flex items-center justify-center text-white cursor-pointer">
                            <FaInstagram />
                        </div>
                        <div className="w-10 h-10 mr-5 bg-[#316FF6]  rounded-full flex items-center justify-center text-white cursor-pointer">
                            <FaFacebook />
                        </div>
                        <div className="w-10 h-10 mr-5 bg-black   rounded-full flex items-center justify-center text-white cursor-pointer">
                            <FaXTwitter />
                        </div>

                    </div>
                </div>
                <div className="flex-1 flex flex-col p-5 items-start justify-start ">
                    <h3 className="mb-8 font-bold text-xl">Useful Links</h3>
                    <ul className="flex flex-col flex-1  m-0 p-0">
                        {
                            usefulLinks.map((link) => (
                                <Link to={link.path} key={link.name}>
                                    <li className="mb-2.5">
                                        {
                                            link.name
                                        }
                                    </li>
                                </Link>

                            ))
                        }
                    </ul>
                </div>
                <div className="flex-1 p-5 flex flex-col items-start justify-center ">
                    <h3 className="mb-8 font-bold text-xl">Contact</h3>
                    <div className="mb-5 flex items-center">
                        <FaLocationDot className="mr-2.5" /> 622 Dixie Path , South Bombay 98336
                    </div>
                    <div className="mb-5 flex items-center">
                        <FaPhone className="mr-2.5" />  +1 234 56 78
                    </div>
                    <div className="mb-5 flex items-center">
                        <IoMdMail className="mr-2.5" /> contact@urbanaura.dev
                    </div>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment methods" className="w-[50%]" />
                </div>
            </div>
        </footer>
    )
}

export default Footer