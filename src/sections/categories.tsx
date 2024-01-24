import { useEffect, useState } from "react";
import CategoryItem from "../components/category-card"

import { CategoryProps, ProductProps } from "../lib/types";
import axios from "axios";
import { LineWave } from "react-loader-spinner";

const Categories = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState<CategoryProps[]>([])

    useEffect(() => {
        ; (async () => {
            try {
                setLoading(true);
                setError(false)
                const response = await axios.get('http://localhost:5000/api/v1/category/ ',)
                setCategories(response.data)
            } catch (err: unknown) {
                console.log(err)
                setError(true)
            }
            finally {
                setLoading(false);
            }


        })();
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