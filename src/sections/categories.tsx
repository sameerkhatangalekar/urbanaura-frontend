import { useEffect, useState } from "react";
import CategoryItem from "../components/category-card"

import { CategoryProps } from "../lib/types";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import { baseUrl } from "../lib/constants";
import toast from "react-hot-toast";

const Categories = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState<CategoryProps[]>([])

    useEffect(() => {
        const controller = new AbortController();
        ; (async () => {
            try {
                setLoading(true);
                setError(false)
                const response = await axios.get(`${baseUrl}/category/`,
                    {
                        signal: controller.signal
                    }
                )
                setCategories(response.data)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message)
                    return;
                }
                console.log(error)
                setError(true)
                toast.error('Oops Something went wrong 😥')
            }
            finally {
                setLoading(false);
            }


        })();

        return () => controller.abort();
    }, [])


    if (error) {
        return <h1 className="text-4xl font-bold text-center text-gray-400 py-3">Something went wrong !</h1>
    }
    if (isLoading) {
        return (
            <div className="h-16 w-full flex justify-center items-center mb-10">
                <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#111827"
                    ariaLabel="line-wave-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                />
            </div>
        );
    }
    return (
        <div className="flex p-5 justify-between max-sm:flex-col max-sm:p-0">
            {
                categories.map((category) => (<CategoryItem key={category._id} {...category} />))
            }

        </div>
    )
}

export default Categories