import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Models/producto';
import { UrlStorageService } from './url-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  Get(): Observable<Producto[]>
  {
    return this.http.get<Producto[]>(UrlStorageService.Url + "Productos/Get");
  }
  Update(v: Producto): Observable<Producto> {
    return this.http.post<Producto>(UrlStorageService.Url + "Productos/Update",v);
  }
  Post(v: Producto): Observable<Producto> {
    return this.http.post<Producto>(UrlStorageService.Url + "Productos/Post", v);
  }
  Delete(v: Producto): Observable<boolean> {
    return this.http.post<boolean>(UrlStorageService.Url + "Productos/Delete", v);
  }
}
