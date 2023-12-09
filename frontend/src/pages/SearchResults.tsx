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
        <>
            {data && data.products.map((product: Product) => (
                <ProductCard product={product}/>
            ))}
        </>
    )
}
export default SearchResults