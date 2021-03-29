import { Cliente } from './cliente';
import { FacturaProducto } from './factura-producto';

export class Factura {
  id: string;
  clienteId: string;
  total: number;
  fecha: string;
  FacturaProductos: FacturaProducto[];
  cliente: Cliente;
}
