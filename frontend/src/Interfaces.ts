export interface Product {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    cantidad?: number
    cantidad_stock: number
    categoria: string
    imagen: File | null;
  }

  export interface Order {
    total_price: number;
    addres: string
    city: string
    orderItem: Product[]
}

  export interface Token {
      exp: number
  };