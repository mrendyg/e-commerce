
import { Product } from "../Interfaces"
import { Link } from "react-router-dom"
// import cart store
import { useCartStore } from "../store/cart"

interface Props {
            product: Product
             page: string
}

const ProductCard = ({ product, page }: Props) => {

  const addToCart = useCartStore(state => state.addToCart)

    return (
    <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/product/${product.nombre}`}>
            <img className="rounded-t-lg w-100 h-100 " src={`http://127.0.0.1:8000${product.imagen}`}  alt="image_in_home" />
            </Link>
            <div className="p-5 ">
            <Link to={`/product/${product.nombre}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.nombre}
            </h5>
            <div className="flex justify-between">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
            $ {product.precio}
            </h5>
            <div className="flex items-center">
            <span className="ml-1 text-gray-500 dark:text-gray-400"></span> 
        </div>
        </div>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {product.descripcion}
    </p>


        <button 
        onClick={() => addToCart(product)}
        className="inline-flex items-center mx-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Añadir al carro
    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
        </path>
        </svg>
        </button>

        <Link to={`/product/${product.nombre}`} className="inline-flex items-center mx-3
        px-3 py-2 text-sm font-medium text-center text-white 
        bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 
        focus:outline-none focus:ring-blue-300 dark:bg-blue-600 
        dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        {page === 'home' && 'Ver'}
    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
        </path>
        </svg>
        </Link>

        </div>

        </div>
        </div>

        )
}
export default ProductCard