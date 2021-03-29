import { FacturaProducto } from './factura-producto';

export class Producto {

  id: string;
  nombre: string;
  costo: number;
  valor: number;
  cantidad: number;
  cantidadPedido: number = 0;
  facturaProductos: FacturaProducto[]; 

}
