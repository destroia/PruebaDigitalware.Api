import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './Paginas/productos/productos.component';
import { TiendaComponent } from './Paginas/tienda/tienda.component';
import { CarritoComponent } from './Paginas/carrito/carrito.component';
import { FacturasComponent } from './Paginas/facturas/facturas.component';
import { FacturaProductosComponent } from './Paginas/factura-productos/factura-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    TiendaComponent,
    CarritoComponent,
    FacturasComponent,
    FacturaProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
