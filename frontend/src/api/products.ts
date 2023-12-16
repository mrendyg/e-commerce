import { Product } from "../Interfaces";
import { authApi, axi } from "./useAxios";

/*  authAxios, 
export const search_prod = async (nombre: string) => {
  const res = await axi.get(`products/search/?query=${nombre}`)
  return res.data
}*/

export const cate_api = async (category: string) =>{
  const response = await authApi.get(`/products/cate/${category}/`)
  return response.data
}

export const search_prod = async (query: string) => {
  const response = await authApi.get(`/products/search/?query=${query}`)
  return response.data;
}


export const deleteProduct = async (nombre: string) => {
  await authApi.delete(`products/delete/${nombre}/`)
}

export const getProduct = async (id: number) => {
  if (!id) {
    throw new Error('No se encontró ningún producto con ese nombre.'); 
  }

  const res = await axi.get(`products/get/${id}`)
  return res.data
  
}

export const get_solo_product = async (nombre: string) => {
  if (!nombre) {
    throw new Error('No se encontró ningún producto con ese nombre.'); 
  }

  const res = await axi.get(`products/get/client/${nombre}`)
  return res.data
  
}

export const putProduct = async (data: Product) => {
  const formData = new FormData();
  formData.append("nombre", data.nombre);
  formData.append("descripcion", data.descripcion);
  formData.append("cantidad_stock", data.cantidad_stock.toString());
  formData.append("categoria", data.categoria);
  formData.append("precio", data.precio.toString());
  if (data.imagen && typeof data.imagen !== "string") {
    formData.append("imagen", data.imagen);
  }
  await authApi.put(`products/update/${data.nombre}/`, formData);
}

export const postProduct = async (data: Product) => {
  const formData = new FormData();
  formData.append("nombre", data.nombre);
  formData.append("descripcion", data.descripcion);
  formData.append("cantidad_stock", data.cantidad_stock.toString());
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