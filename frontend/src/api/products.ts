import { authApi, axi } from "./useAxios"
import { Product } from "../Interfaces"

export const searchProducts = async (nombre: string) => {
  const res = await axi.get(`products/search/?query=${nombre}`)
  return res.data
}

export const deleteProduct = async (nombre: string) => {
  await authApi.delete(`products/delete/${nombre}/`)
}

export const getProduct = async (nombre: string) => {
  if (!nombre) {
    throw new Error('No se encontró ningún producto con ese nombre.'); 
  }
  else {
  const res = await axi.get(`products/get/${nombre}`)
  return res.data
  }
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
  await authApi.put(`products/update/${data.nombre}/`, formData);
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