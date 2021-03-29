import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlStorageService {


  constructor() { }

  static Url: string = "https://localhost:44364/api/";
  static StorageProductos: string = "poiuytrewqñlkjhgfds.,mnbvcxz";
  static StorageFacturaProductos: string = "asdfghgsdfsdf";
  static IdEmty: string = "00000000-0000-0000-0000-000000000000";
}
