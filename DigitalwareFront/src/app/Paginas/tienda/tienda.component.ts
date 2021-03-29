import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../Models/cliente';
import { Producto } from '../../Models/producto';
import { ProductosService } from '../../services/productos.service';
import { UrlStorageService } from '../../services/url-storage.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(private productoSer: ProductosService, private router: Router) { }
  ListProductos: Producto[];
  carrito: string = "carrito";
  ListCompras: Producto[] = new Array();
  listaCarrito: Producto[] = new Array();
  lookBtnCarrito: boolean = false;
  ngOnInit(): void {
    
   
    this.BtnCarrito();
    this.productoSer.Get().subscribe(x => { this.ConfirmarProductos(x) }, error => console.log(error));
  }

  BtnCarrito() {
    try {
      this.listaCarrito = null;
      this.listaCarrito = JSON.parse(sessionStorage.getItem(UrlStorageService.StorageProductos));

      if (this.listaCarrito.length != 0 || this.listaCarrito == null) {
        this.lookBtnCarrito = true;
      } else {
        this.lookBtnCarrito = false;
      }
    } catch (e) {

      this.lookBtnCarrito = false;
      console.log(this.listaCarrito);
    }
   
  }
  ConfirmarProductos(x: Producto[]) {
    for (var i = 0; i < x.length; i++) {
      x[i].cantidadPedido = 0;
    }
    this.ListProductos = x;

  }
  Menos(li: Producto) {
    if (li.cantidadPedido > 0) {
      li.cantidadPedido -= 1;
    }
  }
  Mas(li: Producto) {
    
    
   
    if (li.cantidadPedido == li.cantidad) {
      alert("Ya exedio el numero de existencias");
      return;
    }
    li.cantidadPedido = li.cantidadPedido + 1;
    console.log(li);
  }
  Agregar(li: Producto) {
    try {
      if (li.cantidadPedido == 0) {
        return;
      }
      let findCarrito = this.ListCompras.filter(x => x.id == li.id);
      if (findCarrito[0] != null) {
        if (findCarrito[0].cantidadPedido != li.cantidadPedido) {
          this.ListCompras.push(li);
          let i = this.listaCarrito.indexOf(findCarrito[0])
          this.ListCompras.splice(i);
        }
      }
      let find = this.ListCompras.filter(x => x.id == li.id);
      if (li.id == find[0].id && li.cantidadPedido == find[0].cantidadPedido ) {
        return;
      } else if (li.id == find[0].id) {
        let i = this.ListCompras.indexOf(find[0])
        this.ListCompras.splice(i);
      }
    } catch (e) {

    }

    this.ListCompras.push(li);


    console.log(this.ListCompras)
    sessionStorage.setItem(UrlStorageService.StorageProductos, JSON.stringify(this.ListCompras));
    this.BtnCarrito();
  }

  Eliminar(li: Producto) {

    console.log(this.ListCompras)
    try {
      let find = this.ListCompras.filter(x => x.id == li.id);
      
      let i = this.ListCompras.indexOf(li);

      this.ListCompras.splice(i);

    } catch (e) {

    }

    console.log(this.ListCompras)
    sessionStorage.setItem(UrlStorageService.StorageProductos, JSON.stringify(this.ListCompras));
    this.BtnCarrito();
  }

  Comprar() {
    if (this.listaCarrito[0] == null) {
      alert("no hay nada en el carrito");
      return;
    }

    this.router.navigate(["Carrito"]);
   
  }
  ConfirmarCompra(x: boolean) {
    if (x) {
      this.router.navigate(["/Facturas"])
    } else {
      alert("Algo inesperado ha sucedido")
    }
  }

}
