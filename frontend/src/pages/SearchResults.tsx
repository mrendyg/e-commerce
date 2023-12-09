import { search_prod } from "../api/products"
import { useQuery } from "@tanstack/react-query"
import { useSearchStore } from "../store/search";
import ProductCard from "../components/ProductCard";
import { Product } from "../Interfaces";


const SearchResults = () => {

    const searchTerm = useSearchStore((state) => state.searchTerm);

    const { data } = useQuery({
        queryKey: ['products', searchTerm],
        queryFn: () => {
            if (searchTerm) {
                const results = search_prod(searchTerm);
                console.log('Resultados en el componente:', results); /* para ver por consola los elementos que entrega el buscador*/
                return results;
            }
            return { products: [] }
        }

    })

    return (
        <div className="flex justify-center">
        <div
          
            className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-16"
        >
       
            {data && data.products.map((product: Product) => (
                <ProductCard product={product}/>
            ))}
        </div>
        </div>
    )
}
export default SearchResults