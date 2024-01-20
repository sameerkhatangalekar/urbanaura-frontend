import { FiSend } from "react-icons/fi"

const Newsletter = () => {
    return (
        <div className="bg-rose-50 flex items-center justify-center h-[60vh] flex-col">
            <h1 className="font-bold text-7xl mb-6 max-sm:text-6xl">
                Newsletter
            </h1>
            <p className="text-2xl font-light mb-5 max-sm:text-center">
                Get timely updates from your favorite products
            </p>

            <div className="flex items-center justify-start  w-[30%] max-sm:w-[80%]  h-10 border-[1px] border-solid rounded-md shadow-lg bg-white">
                <input type="email" placeholder="Your Email" className="flex-grow py-2 px-8 required border-none outline-none rounded-l-md" />
                <button className="flex items-center justify-center bg-slate-300  h-full   rounded-r-md  group px-4">
                    <FiSend className="group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition " />
                </button>
            </div>
        </div>
    )
}

export default Newsletter