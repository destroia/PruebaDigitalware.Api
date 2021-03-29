import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from '../../Models/factura';
import { FacturaProducto } from '../../Models/factura-producto';
import { UrlStorageService } from '../../services/url-storage.service';

@Component({
  selector: 'app-factura-productos',
  templateUrl: './factura-productos.component.html',
  styleUrls: ['./factura-productos.component.css']
})
export class FacturaProductosComponent implements OnInit {

  constructor(private router: Router) { }
  FacturaProducto: Factura;
  FacturaProductos: FacturaProducto[] = new Array();
  ngOnInit(): void {
    let FP: Factura = JSON.parse(sessionStorage.getItem(UrlStorageService.StorageFacturaProductos));
    
    this.FacturaProducto = FP;
    console.log( FP.FacturaProductos);
    this.FacturaProductos = this.FacturaProducto.FacturaProductos;
    if (FP != null) {
     
      console.log(this.FacturaProductos);
    } else {
      this.router.navigate([""]);
    }
  }

}
