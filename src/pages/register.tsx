

const Register = () => {
    return (
        <div className="flex  max-sm:justify-center items-center justify-start h-screen w-screen bg-[url('./assets/images/register.jpg')] bg-cover  max-xl:bg-center">


            <div className="p-12 max-sm:w-[80%] w-[35%] bg-white rounded-md shadow-2xl max-sm:ml-0 ml-56 max-sm:p-10">
                <h1 className="text-2xl font-light mb-3">
                    CREATE AN ACCOUNT
                </h1>
                <form action="" className="flex flex-wrap items-start">
                    <input type="text" placeholder="First Name" className="flex-1 min-w-[40%] mt-5 mr-2.5   border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <input type="text" placeholder="Last name" className="flex-1 min-w-[40%] mt-5   mr-2.5  border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <input type="text" placeholder="Contact" className="flex-1 min-w-[40%] mt-5   mr-2.5 border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <input type="text" placeholder="Email" className="flex-1 min-w-[40%] mt-5   mr-2.5  border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <input type="text" placeholder="Password" className="flex-1 min-w-[40%] mt-5 mr-2.5 mb-2   border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <span className="text-justify text-xs">By Creating an account, I consent to the processing of my personal data in accordance with the <b className="inline-block text-xs">PRIVACY POLICY</b></span>
                    <button className="bg-teal-700 text-white py-3 px-5 mt-5 select-none">SIGN UP</button>
                </form>
            </div>

        </div>
    )
}

export default Register
