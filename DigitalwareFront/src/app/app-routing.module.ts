import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarritoComponent } from './Paginas/carrito/carrito.component';
import { FacturaProductosComponent } from './Paginas/factura-productos/factura-productos.component';
import { FacturasComponent } from './Paginas/facturas/facturas.component';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { TiendaComponent } from './Paginas/tienda/tienda.component';

const routes: Routes = [
  { path: "", component: ProductosComponent },
  { path: "Tienda", component: TiendaComponent },
  { path: "Carrito", component: CarritoComponent },
  { path: "Facturas", component: FacturasComponent },
  { path: "Factura-Productos", component: FacturaProductosComponent },
  { path: "**", component: ProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
