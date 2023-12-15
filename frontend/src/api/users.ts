import { authApi, axi } from "./useAxios";
import { User } from "../admin/InterfazUser";


export const search_users = async (query: string) => {
  const response = await authApi.get(`/users/search/?query=${query}`) 
  return response.data
};


export const registerRequest = async (email: string, name: string, last_name: string, username: string, password: string) => {
  axi.post("/users/register/", {email, name, last_name, username, password});
}

export const loginRequest = async (email: string, password: string) => {
  const response = axi.post("/users/login/", {email, password});
  return response;
}

export const getUsersRequest = async ({ pageParam = 1 }) => {
  const response = await authApi.get(`/users/get/?page=${pageParam}&pages=10`);
  return response.data;
}

export const deleteUser = async (id: number) => {
  await authApi.delete(`/users/delete/${id}`);
}

export const setStaffUser = async (email: string) => {
  await authApi.put(`/users/edit/${email}`);
}


export const edit_user = async (data: User) => {
  const formData = new FormData();
  formData.append("name", data.name)
  formData.append("last_name", data.last_name)
  formData.append("email", data.email)
  if (data.avatar) {
      formData.append("avatar", data.avatar)
  }
  await authApi.put(`/users/edit/${data.email}/`, formData)
};

export const get_solo_user = async (id: number) => {
  const response = await authApi.get(`/users/get/solo/${id}/`) 
  return response.data
};


// Old users request
/*
export const getUsersRequest = async () => {
  const res = await authApi.get('/users/users/')
  return res.data
}
*/