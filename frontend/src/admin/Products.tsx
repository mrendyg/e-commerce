import React from 'react';
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from "../api/products";
import Loader from "../components/Loader"
import  toast from "react-hot-toast"
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Product } from "../Interfaces";
import AddProduct from './ProductForm';
import EditProduct from './EditProduct';
import { Link } from 'react-router-dom';

const Products = () => {

  const { ref, inView } = useInView()
  const [show, setShow] = useState(false)
  const [edit, setEdit] = useState(false)
  const queryClient = useQueryClient()

  const { data, isLoading, error, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(
    ['products'],
    getProducts,
    {
      getNextPageParam: (lastPage: any ) => lastPage.meta.next
    }
  )

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"])
      toast.success("Producto eliminado exitosamente")
    }, 
    onError: (error) => {
      console.error(error);
    },
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  if (isLoading) return <Loader/>
  if(error instanceof Error) return <>{toast.error(error.message)}</>

  return (
    <>

      {show ? (

        <AddProduct close={() => setShow(false)} />

      ) : (

          <>
          <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
            <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
              <div className="flex items-center flex-1 space-x-4">
                <h5>
                  <span className="text-gray-500"></span>
                  <span className="dark:text-white"></span>
                </h5>
                <h5>
                  <span className="text-gray-500"></span>
                  <span className="dark:text-white"></span>
                </h5>
              </div>
              <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                <button 
                  onClick={() => setShow(true)}
                  type="button" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                  <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                  Nuevo producto
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">Producto</th>
                    <th scope="col" className="px-4 py-3">Categoria</th>
                    <th scope="col" className="px-4 py-3">Stock</th>
                    <th scope="col" className="px-4 py-3">Precio</th>
                    <th scope="col" className="px-4 py-3">Acciones</th>
                  </tr>
                </thead>
                <tbody>

                  {data?.pages.map((page: any, i) => (

                    <React.Fragment key={i}>

                      {page.data.map((product: Product)=> (

                        <>

                          <tr key={product.id} className="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <img src={`http://127.0.0.1:8000${product.imagen}`} alt={product.nombre} className="w-auto h-8 mr-3"/>

                              {product.nombre}
                            </th>
                            <td className="px-4 py-2">
                              <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                                {product.categoria}
                              </span>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center">
                                <div className="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                {product.cantidad_stock}
                              </div>
                            </td>
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">${product.precio}</td>
                            
                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              <div className="flex items-center space-x-4">
                                <BsFillTrashFill 
                                  onClick={() => {
                                    if (product.id) {
                                      deleteProductMutation.mutate(product.nombre);
                                    }
                                  }}
                                  className="text-red-500 w-6 h-6 cursor-pointer hover:text-white"/>
                                <Link
                                  to={`edit/${product.id}`}
                                >
                                <AiFillEdit 
                                    onClick={() => { 
                                        setEdit(true)
                                        console.log("Estas editando " + product.nombre)     ////Revisar esta linea para poder editar los articulos
                                      }}
                                  className="text-blue-500 w-6 h-6 cursor-pointer hover:text-white"/>
                                </Link>
                              </div>
                            </td>
                          </tr>
        
              {/* {edit && (
                
        // <EditProduct param={product.nombre} close={() => setEdit(false)} />

              )} */}

                        </>

                      ))}

                    </React.Fragment>

                  ))}

                  {!isLoading && data?.pages.length === 0 && <p className="text-xl text-slate-800 dark:text-slate-200">No more results</p>}
                  {!isLoading && data?.pages?.length !== undefined && data.pages.length > 0 && hasNextPage && (
                    <div ref={ref}>
                      {isLoading || isFetchingNextPage ? <Loader /> : null}
                    </div>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          </>
        )}
    </>
  )
}

export default Products