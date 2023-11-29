import React from "react";
import { useQuery, useMutation, useQueryClient  } from "@tanstack/react-query";
import { getUsersRequest, deleteUser } from "../api/users";
import Loader from "../components/Loader";
import  toast from "react-hot-toast";
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { User } from './InterfazUser';

const Users = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsersRequest,
  })

  if(isLoading) return <Loader />

  if(error instanceof Error) return <>{toast.error(error.message)}</>

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">User ID</th>
            <th scope="col" className="px-4 py-3">Name</th>
            <th scope="col" className="px-4 py-3">Email</th>
            <th scope="col" className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
        {Array.isArray(data) && data.map((user: User) => (
            <tr className="border-b dark:border-gray-700">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3 flex items-center justify-center gap-4">
                <BsFillTrashFill size={22} 
                  onClick={() => {
                    if (user.id) {
                      deleteUserMutation.mutate(user.id);
                    }
                   }}
                  className="text-red-500 w-6 h-6  cursor-pointer"
                  />
                <AiFillEdit size={22} className="text-green-300 cursor-pointer"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


// const queryClient = useQueryClient()

// const deleteUserMutation = useMutation({
//   mutationFn: deleteUser,
//   onSuccess: () => {
//     queryClient.invalidateQueries(["users"])
//     toast.success("User delete")
//   }, 
//   onError: (error) => {
//     console.error(error);
//   },
// })


// export default Users