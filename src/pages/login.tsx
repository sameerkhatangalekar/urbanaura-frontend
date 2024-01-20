

const Login = () => {
    return (
        <div className="flex items-center max-sm:justify-center justify-start h-screen w-screen bg-[url('./assets/images/login.jpg')] bg-cover  max-sm:bg-center">


            <div className="p-12 max-sm:w-[80%]  w-[35%] bg-white rounded-md shadow-2xl max-sm:ml-0 ml-56">
                <h1 className="text-2xl font-light mb-3">
                    SIGN IN
                </h1>
                <form action="" className="flex flex-col items-start">
                    <input type="text" placeholder="Email" className="flex-1 min-w-[40%]   w-full  my-2    border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <input type="text" placeholder="Password" className="flex-1 min-w-[40%]   w-full my-2 mb-2   border border-gray-300 p-2 placeholder:text-gray-500  focus:outline-1 focus-within:outline-gray-500" />
                    <button className="bg-teal-700 text-white py-3 px-5 mt-5 select-none">LOGIN</button>
                    <a href="" className="my-2 text-xs underline cursor-pointer">
                        FORGOT PASSWORD?
                    </a>
                    <a href="" className="my-2 text-xs underline cursor-pointer">
                        CREATE A NEW ACCOUNT
                    </a>
                </form>
            </div>

        </div>
    )
}

export default Login