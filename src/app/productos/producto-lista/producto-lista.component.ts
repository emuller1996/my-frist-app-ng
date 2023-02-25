import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit{

  listaProductos!  : Observable<Producto[]>;

  constructor(
    private productoService: ProductoService
    
  ) {}

  ngOnInit(): void {
    this.listaProductos = this.productoService.getProducto();
    
  }

}
