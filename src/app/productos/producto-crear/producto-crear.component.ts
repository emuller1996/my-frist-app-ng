import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/categoria.service';
import { Categoria } from 'src/app/models/categoria.mode';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto-crear',
  templateUrl: './producto-crear.component.html',
  styleUrls: ['./producto-crear.component.css']
})
export class ProductoCrearComponent implements OnInit {

  listaCategoria!: Observable<Categoria[]>;
  producto:Producto = new Producto();

  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.listaCategoria = this.categoriaService.getCategorias();
  }
 


  onSaveProducto(){
    this.producto.estado=true;
    console.log(this.producto)
    this.productoService.postProducto(this.producto).subscribe(data => {
      console.log("Producto saved")
      this.router.navigate(['/productos'])
    });
  }


}
