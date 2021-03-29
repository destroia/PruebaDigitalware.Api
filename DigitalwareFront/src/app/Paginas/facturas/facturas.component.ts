import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Factura } from '../../Models/factura';
import { FacturasService } from '../../services/facturas.service';
import { UrlStorageService } from '../../services/url-storage.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  ListaFacturas: Factura[] = new Array();
  constructor(private FacturaSer: FacturasService, private router: Router) { }

  ngOnInit(): void {
    this.FacturaSer.Get().subscribe(x => { this.confirmacionGet(x) }, error => console.log(error));
   
  }
    confirmacionGet(x: Factura[]) {
      this.ListaFacturas = x;
      console.log(this.ListaFacturas[0]);
    }

  Ver(li: Factura) {
    sessionStorage.setItem(UrlStorageService.StorageFacturaProductos, JSON.stringify(li));
    this.router.navigate(["Factura-Productos"]);
  }
}
