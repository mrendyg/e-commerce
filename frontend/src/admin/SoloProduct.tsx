import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../Interfaces";

const SoloProduct = (props: { product: Product }) => {
  const { product } = props;
  const { nombre } = product; 

  const { data } = useQuery({
    queryFn: () => getProduct(nombre),
    queryKey: ['Product', nombre]
  });

 

  return (
    <>
    </>
  );
};

export default SoloProduct;