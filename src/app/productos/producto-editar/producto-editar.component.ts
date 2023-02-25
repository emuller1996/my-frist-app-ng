import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoriaService } from 'src/app/categoria.service';
import { Categoria } from 'src/app/models/categoria.mode';
import { Producto } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/producto.service';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  listaCategoria!: Observable<Categoria[]>;
  producto:Producto;
  indice:number;
  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listaCategoria = this.categoriaService.getCategorias();
    this.indice = this.route.snapshot.params['id'];
    this.productoService.getProductById(this.indice).subscribe(data=>{
      this.producto = data;
    })
  }

  onUpdateProducto(){

    console.log(this.producto);
    this.productoService.putProduct(this.producto).subscribe(data=>{
      alert('Editado Correctamente');
      console.log(data);
      this.router.navigate(['/productos'])
    })

  }

}
