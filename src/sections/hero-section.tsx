
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import { motion } from 'framer-motion'
import { useState } from "react";
import { heroProducts } from "../lib/dummy-data";
import Slide from "../components/slide";




const HeroSection = () => {


    const [currentIndex, setCurrentIndex] = useState(0);
    const handleClick = (direction: "left" | "right") => {
        if (direction === "left") {
            setCurrentIndex((prevIndex) => (prevIndex === 0 ? heroProducts.length - 1 : prevIndex - 1));
        } else if (direction === "right") {
            setCurrentIndex((prevIndex) => (prevIndex === heroProducts.length - 1 ? 0 : prevIndex + 1));
        }

    }


    return (
        <div className="w-full h-screen flex overflow-hidden  relative max-sm:hidden">

            <div onClick={() => handleClick("left")} className="rounded-full bg-gray-200  flex items-center justify-center bg-opacity-50 backdrop-blur-md mx-2 hover:scale-125 transition cursor-pointer p-2 absolute top-0 bottom-0 m-auto h-12 w-12 left-0 z-10">
                <MdKeyboardArrowLeft size={24} />
            </div>


            <motion.div className="h-full flex"
                initial={{ x: 0 }}
                animate={{ x: -100 * currentIndex + "vw" }}
                transition={
                    {
                        duration: 1.5,
                        ease: 'easeOut',

                    }
                }

            >

                {
                    heroProducts.map((product, index) => (
                        <Slide key={index} {...product} />
                    ))

                }

            </motion.div>

            <div onClick={() => handleClick("right")} className="rounded-full bg-gray-200  flex items-center justify-center bg-opacity-50 backdrop-blur-md mx-2 hover:scale-125 transition cursor-pointer p-2 absolute top-0 bottom-0 m-auto h-12 w-12 right-0 z-10">
                <MdKeyboardArrowRight size={24} />
            </div>

        </div>
    )
}

export default HeroSection