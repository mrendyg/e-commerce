import { authApi, axi } from "./useAxios";


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

// Old users request
/*
export const getUsersRequest = async () => {
  const res = await authApi.get('/users/users/')
  return res.data
}
*/