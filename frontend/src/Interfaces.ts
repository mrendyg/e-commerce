export interface Product {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    count_in_stock : number
    activo: boolean
    categoria: string
    imagen: File | null;
    cantidad?: number
  }
  
  export interface Token {
      exp: number
  };