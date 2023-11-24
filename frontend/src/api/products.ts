import { authApi, axi } from "./useAxios"
import { Product } from "../Interfaces"

export const searchProducts = async (id: number) => {
  const res = await axi.get(`products/search/?query=${id}`)
  return res.data
}

export const deleteProduct = async (id: number) => {
  await authApi.delete(`products/delete/${id}/`)
}

export const getProduct = async (id: number) => {
  if (!id) {
    throw new Error('No product found with that name.'); 
  }
  const res = await axi.get(`products/get/${id}`)
  return res.data
}

export const putProduct = async (data: Product) => {
  const formData = new FormData();
  formData.append("name", data.nombre);
  formData.append("description", data.descripcion);
  formData.append("stock", data.cantidad_stock.toString());
  formData.append("category", data.categoria);
  formData.append("price", data.precio.toString());
  if (data.imagen && typeof data.imagen !== "string") {
    formData.append("image", data.imagen);
  }
  await authApi.put(`products/update/${data.id}/`, formData);
}

export const postProduct = async (data: Product) => {
  const formData = new FormData();
  formData.append("nombre", data.nombre);
  formData.append("descripcion", data.descripcion);
  formData.append("count_in_stock", data.cantidad_stock.toString());
  formData.append("activo", data.activo.toString());
  formData.append("categoria", data.categoria);
  formData.append("precio", data.precio.toString());
  if (data.imagen) {
    formData.append("imagen", data.imagen);
  }
  await authApi.post('products/create/', formData);
}


export const getProducts = async ({ pageParam = 1 }) => {
  const response = await axi.get(`/products/?page=${pageParam}&pages=9`);
  return response.data;
}