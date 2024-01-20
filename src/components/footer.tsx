import { FaInstagram, FaFacebook } from "react-icons/fa"
import { FaLocationDot, FaPhone, FaXTwitter } from "react-icons/fa6"
import { usefulLinks } from "../lib/constants"
import { IoMdMail } from "react-icons/io"


const Footer = () => {
    return (
        <footer >
            <div className="w-screen flex items-start justify-center max-sm:flex-col">
                <div className="flex-1 flex flex-col p-5  items-start justify-center">
                    <h1 className="font-bold text-2xl">UrbanAura</h1>
                    <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint minima quia, ut architecto asperiores reprehenderit rem fuga placeat ab quam, quisquam excepturi libero expedita beatae tempore eos quaerat provident pariatur.</p>
                    <div className="flex">
                        <div className="w-10 h-10 mr-5 bg-[#cd486b] rounded-full flex items-center justify-center text-white">
                            <FaInstagram />
                        </div>
                        <div className="w-10 h-10 mr-5 bg-[#316FF6]  rounded-full flex items-center justify-center text-white">
                            <FaFacebook />
                        </div>
                        <div className="w-10 h-10 mr-5 bg-black   rounded-full flex items-center justify-center text-white">
                            <FaXTwitter />
                        </div>

                    </div>
                </div>
                <div className="flex-1 flex flex-col p-5 items-start justify-start ">
                    <h3 className="mb-8 font-bold text-xl">Useful Links</h3>
                    <ul className="flex flex-wrap m-0 p-0">
                        {
                            usefulLinks.map((link) => (
                                <li key={link.name} className="w-[50%] mb-2.5">
                                    {
                                        link.name
                                    }
                                </li>

                            ))
                        }
                    </ul>
                </div>
                <div className="flex-1 p-5 flex flex-col items-start justify-center">
                    <h3 className="mb-8 font-bold text-xl">Contact</h3>
                    <div className="mb-5 flex items-center">
                        <FaLocationDot className="mr-2.5" /> 622 Dixie Path , South Tobinchester 98336
                    </div>
                    <div className="mb-5 flex items-center">
                        <FaPhone className="mr-2.5" />  +1 234 56 78
                    </div>
                    <div className="mb-5 flex items-center">
                        <IoMdMail className="mr-2.5" /> contact@lama.dev
                    </div>
                    <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="payment methods" className="w-[50%]" />
                </div>
            </div>
        </footer>
    )
}

export default Footer