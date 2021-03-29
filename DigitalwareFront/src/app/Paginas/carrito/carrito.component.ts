import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../Models/cliente';
import { Factura } from '../../Models/factura';
import { FacturaProducto } from '../../Models/factura-producto';
import { Producto } from '../../Models/producto';
import { FacturasService } from '../../services/facturas.service';
import { UrlStorageService } from '../../services/url-storage.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private FaturarSer: FacturasService) { }
  Valor: number = 0;
  formularioCliente: FormGroup;
  listaProductos: Producto[];
  listaProductosFactura: FacturaProducto[] = new Array();
  Cliente: Cliente;
  Factura: Factura = new Factura;
  ngOnInit(): void {
    this.formularioCliente = this.fb.group(
      {
        id: ["", Validators.required],
        nombre: ["", Validators.required],
        edad: [0, Validators.required],
      
      });

    this.GetCarrito();
  }
  GetCarrito() {
    this.listaProductos = JSON.parse(sessionStorage.getItem(UrlStorageService.StorageProductos));
    for (var i = 0; i < this.listaProductos.length; i++) {
      this.Valor += this.listaProductos[i].valor * this.listaProductos[i].cantidadPedido;
    }
    }
  Eliminar(li) {
    try {
      let find = this.listaProductos.filter(x => x.id == li.id);

      let i = this.listaProductos.indexOf(li);

      this.listaProductos.splice(i);

    } catch (e) {

    }
  }
  CrearCompra() {

    this.Cliente = this.formularioCliente.value;
    this.Cliente.id = this.Cliente.id.toString();
    this.Factura.clienteId = this.Cliente.id;
    this.Factura.total = this.Valor;
    this.Factura.id = UrlStorageService.IdEmty;

    for (var i = 0; i < this.listaProductos.length; i++) {

      let fp: FacturaProducto = new FacturaProducto();

      fp.cantidad = this.listaProductos[i].cantidad;
      fp.facturaId = UrlStorageService.IdEmty;
      fp.id = UrlStorageService.IdEmty;
      fp.nombre = this.listaProductos[i].nombre;
      fp.productoId = this.listaProductos[i].id;

      this.listaProductosFactura.push(fp);
    }
    this.Factura.cliente = this.Cliente;
    this.Factura.FacturaProductos = this.listaProductosFactura;
    console.log(this.Factura);

    this.FaturarSer.Post(this.Factura).subscribe(x => { this.ConfirmacionFacturar(x) }, error => console.log(error));

  }
    ConfirmacionFacturar(x: Factura) {
      if (x != null) {
        this.listaProductos = null;
        sessionStorage.removeItem(UrlStorageService.StorageProductos);
        this.route.navigate([""]);
      }
    }
}
