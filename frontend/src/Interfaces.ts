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
  
  export interface Token {
      exp: number
  };

  export interface Order {
    total_price: number;
    address: string
    city: string
    postal_code: string
    order_items: Product[]
};
