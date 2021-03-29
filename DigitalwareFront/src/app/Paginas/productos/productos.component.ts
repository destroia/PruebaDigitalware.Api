import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Producto } from '../../Models/producto';
import { ProductosService } from '../../services/productos.service';
import { UrlStorageService } from '../../services/url-storage.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  errorCrear: boolean = false;
  lookUpdate: boolean = false;
  lookForm: boolean = false;
  formularioProductos: FormGroup;
  lookCrear: boolean = false;
  listaProductos: Producto[];
  ProductoCrear: Producto;
  constructor(private fb: FormBuilder, private ProductoService: ProductosService, private route: Router) { }

  InitFormulario() {
    this.formularioProductos = this.fb.group(
      {
        id: ["",],
        nombre: ["", Validators.required],
        costo: [0, Validators.required],
        valor: [0, Validators.required],
        cantidad: [0, Validators.required]
      });

    this.Load();
  }
  Load() {
    this.ProductoService.Get().subscribe(x => { this.LoadEditoriales(x), error => console.log(error) });

  }
  LoadEditoriales(x: Producto[]) {
    this.listaProductos = null;
    this.listaProductos = x;
  }
  ngOnInit(): void {
   
    this.InitFormulario();
  }

  LookCreate() {
    this.formularioProductos = this.fb.group(
      {
        id: ["",],
        nombre: ["", Validators.required],
        costo: [0, Validators.required],
        valor: [0, Validators.required],
        cantidad: [0, Validators.required]
      });
    this.lookCrear = true;
    this.lookForm = true;
    this.lookUpdate = false;
  }
  CrearProducto() {
    this.ProductoCrear = this.formularioProductos.value;
    this.ProductoCrear.id = UrlStorageService.IdEmty;
    console.log(this.formularioProductos.value)
    this.ProductoService.Post(this.formularioProductos.value)

      .subscribe(x => { this.ConfirmacionCreacion(x), x => console.log(x) })


  }
  ConfirmacionCreacion(x: any) {
    if (x != null) {
      this.formularioProductos = this.fb.group(
        {
          id: ["",],
          nombre: ["", Validators.required],
          costo: [0, Validators.required],
          valor: [0, Validators.required],
          cantidad: [0, Validators.required]
        });
      this.errorCrear = false;
      this.lookCrear = false;
      this.Load();
    } else {
      this.errorCrear = true;
    }
  }
  Eliminar(li: Producto) {
    this.ProductoService.Delete(li).subscribe(x => { this.ConfirmarEliminacion(x), error => console.log(error) });
  }
  ConfirmarEliminacion(x: boolean) {
    this.Load();
    if (x) {
      alert("Se a eliminado el elemento ");
    } else {
      alert("No se a podido eliminar el elemento");
    }
  }
  
  Update(li: Producto) {
    this.lookUpdate = true;
    this.lookForm = true;
    this.lookCrear = false;
    console.log(li);

    this.formularioProductos.setValue(li);
  }
  Actualizar() {
    this.ProductoService.Update(this.formularioProductos.value)
      .subscribe(x => { this.ConfirmacionActualizacion(x), error => console.log(error) });

  } ConfirmacionActualizacion(x: Producto) {
    if (x == null) {
      alert("Algo inesperado sucedio ");
    } else {
      alert("se a actualizado el elemento")
      this.Load();
    }
  }
  LookUpdate() {
    this.lookCrear = false;
    this.lookForm = true;
    this.lookUpdate = true;

  }
  Tienda() {
    this.route.navigate(["Tienda"])
  }
  Facturas() {
    this.route.navigate(["Facturas"]);
  }
}
