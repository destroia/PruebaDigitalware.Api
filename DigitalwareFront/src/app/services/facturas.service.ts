import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Factura } from '../Models/factura';
import { UrlStorageService } from './url-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private http: HttpClient) { }

  Post(v: Factura): Observable<Factura> {
    return this.http.post<Factura>(UrlStorageService.Url + "Facturas/Post", v);
  }
  Get(): Observable<Factura[]> {
    return this.http.get<Factura[]>(UrlStorageService.Url + "Facturas/Get");
  }
}
