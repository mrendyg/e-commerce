export interface Product {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    cantidad?: number
    cantidad_stock: number
    activo: boolean
    categoria: string
    imagen: File | null;
  }
  
  export interface Token {
      exp: number
  };