export interface Product {
    id?: number
    nombre: string
    descripcion: string
    precio: number
    cantidad?: number
    categoria: string
    cantidad_stock: number
    usuario?: number
    imagen: File | null;
  }

  export interface Order {
    total_price: number;
    address: string
    orderItem: Product[]
    city: string
}

  export interface Token {
    exp: number
    user_id: number;
  };

  // export interface Categoria {
  //   id?: number
  //   nombre: string
  //   descripcion: string;
  // }