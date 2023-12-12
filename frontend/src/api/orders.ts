import { Order } from "../Interfaces";
import { authApi } from "./useAxios";


export const create_order = async (data: Order ) => {
    await authApi.post('/orders/create/', data)
}