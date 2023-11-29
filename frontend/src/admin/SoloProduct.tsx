import { useParams } from "react-router-dom"
import { getProduct } from "../api/products"
import { useQuery } from "@tanstack/react-query"

const SoloProduct = () => {

  const { data } = useQuery({
    queryFn: () => getProduct(nombre),
    queryKey: ['product', nombre]
  })

  return (
    <>
    </>
  )
}

export default SoloProduct