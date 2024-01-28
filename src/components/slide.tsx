import { FaArrowRight } from "react-icons/fa";
import { heroProducts } from "../lib/dummy-data";
import { Link } from "react-router-dom";

type SlideProps = typeof heroProducts[number];

const Slide = ({ imageURL, title, description }: SlideProps) => {
    return (
        <div className="h-screen w-screen flex items-center">

            <div className="flex-1 h-full flex flex-col justify-start px-5 items-center pt-20">
                <img src={imageURL} alt="Hero Image" className="object-contain h-[80%]" />
            </div>

            <div className="flex-1 p-12 flex flex-col justify-start items-start"  >
                <h1 className="font-bold text-7xl">
                    {title}
                </h1>
                <p className="text-xl my-12 pr-4 font-medium tracking-[3px] text-wrap inline-block">{description}</p>
                <Link to={'/products'}>     <button className="rounded-full text-black text-xl bg-slate-300 px-4 py-3 shadow-2xl  flex justify-center items-center gap-3 hover:scale-105 group transition">SHOP NOW<FaArrowRight className="group-hover:translate-x-1 transition" /></button>
                </Link>
            </div>

        </div>
    )
}

export default Slide