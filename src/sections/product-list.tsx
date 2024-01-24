import ProductCard from "../components/product-card"
import { useEffect, useState } from "react"
import axios from "axios"
import { LineWave } from "react-loader-spinner"
import { ProductProps } from "../lib/types"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

interface ProductListProps {
    sort: string,
    filter: Object,
    slice: number;

}



const ProductList = ({ sort, filter, slice }: ProductListProps) => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    const [products, setProducts] = useState<ProductProps[]>([])

    useEffect(() => {
        const controller = new AbortController();
        ; (async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await axios.get("http://localhost:5000/api/v1/product", {
                    signal: controller.signal,
                    params: filter
                });
                setProducts(response.data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message)
                    return;
                }
                setError(true)
                toast.error('Oops Something went wrong 😥')
                console.log(error)
                console.log(err)

            }
            finally {
                setLoading(false)
            }
        })()

        return () => controller.abort();
    }, [filter])


    useEffect(() => {
        if (sort === 'newest') {
            setProducts(prev => [...prev].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()))
        }
        else if (sort === 'asc') {
            setProducts(prev => [...prev].sort((a, b) => a.price - b.price))
        } else {
            setProducts(prev => [...prev].sort((a, b) => b.price - a.price))

        }
    }, [sort])


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

    if (products.length === 0) {

        return (<div className="p-5 grid items-center justify-center"  >
            <h1 className="text-black text-3xl">Oops no products available for current filter!</h1>

        </div>)
    }

    return (

        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 min-w-min"  >
            {
                slice > 0 ? products.slice(0, slice).map((product) => (<Link to={`/product/${product._id}`} key={product._id}><ProductCard  {...product} /></Link>)) : products.map((product) => (<Link to={`/product/${product._id}`} key={product._id}><ProductCard  {...product} /></Link>))
            }

        </div>
    )
}

export default ProductList