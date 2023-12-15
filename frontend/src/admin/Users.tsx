import { useQuery, useMutation, useQueryClient, QueryClient  } from "@tanstack/react-query";
import { getUsersRequest, deleteUser, setStaffUser } from "../api/users";
import Loader from "../components/Loader";
import  toast from "react-hot-toast";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai"
import { User } from './InterfazUser';
import React, { useState, useEffect, ChangeEvent } from "react";


interface Props {
  param: string
  close: () => void
}


const Users = () => {

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsersRequest,
  })

  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      useQueryClient.invalidateQueries(["users"])  //funciona
      toast.success("Usuario eliminado exitosamente")
    }, 
    onError: (error) => {
      console.error(error);
    },
  })

  // const editStaff = ({ close, param }: Props) => {
  //   const [is_staff, setStaff] = useState<boolean>(false)

  //   useEffect(() => {
  //     if(data){
  //       setStaff(data.is_staff)
  //     }
  //   }, [data]);
  
  
  //   const editUserStaffmutation = useMutation({
  //     mutationFn: setStaffUser,
  //     onSuccess: () => {
  //       useQueryClient.invalidateQueries({ queryKey: ["users"]})
  //       toast.success("Usuario modificado")
  //     },
  //     onError: (error) => {
  //       console.error(error)
  //     }
  //   })
  
  //   const handleStaffChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     event.preventDefault();
  //     setStaff(true);
  //   };

  // }

  

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   editUserStaffmutation.mutate({
  //     is_staff: is_staff
  //   })
  //   close()
  // }


  if(isLoading) return <Loader />

  if(error instanceof Error) return <>{toast.error(error.message)}</>

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-3">ID Usuario</th>
            <th scope="col" className="px-4 py-3">Nombre</th>
            <th scope="col" className="px-4 py-3">Apellido</th>
            <th scope="col" className="px-4 py-3">Correo</th>
            <th scope="col" className="px-4 py-3">Borrar</th>
          </tr>
        </thead>

        <tbody>
        {Array.isArray(data) && data.map((user: User) => (
            <tr className="border-b dark:border-gray-700">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{user.id}</th>
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.last_name}</td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}





export default Users