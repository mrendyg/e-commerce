import { Order } from "../Interfaces";
import {  authApi } from "./useAxios";


export const search_order = async (query: string) => {
    const response = await authApi.get(`/orders/search/?query=${query}`)
    return response.data;
};

export const edit_order = async (id: number) => {
   await authApi.put(`/orders/deliver/${id}/`)
};

export const get_orders = async () => {
    const response = await authApi.get(`/orders/`)
    return response.data
};

export const solo_order = async (id: number) => {
    const response = await authApi.get(`/orders/solo/${id}/`)
    return response.data
};

export const my_orders = async () => {
   const response = await authApi.get('orders/my/orders/') 
   return response.data
};

export const create_order = async (data: Order) => {
    await authApi.post('/orders/create/', data)
};


