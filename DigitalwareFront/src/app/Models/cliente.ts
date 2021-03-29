import { Factura } from './factura';

export class Cliente {
  id: string;
  nombre: string;
  edad: number;
  facturas: Factura[];
}
