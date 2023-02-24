import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../models/categoria.mode';
@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit{

  listaCategorias : Observable<Categoria[]>;
  loading : boolean =true;
  
  constructor(
    private categoryService:CategoriaService
  ) { }

  ngOnInit(): void {
    this.listaCategorias = this.categoryService.getCategorias();
    this.loading=true;
  }

  onDeleteCategoria(id:number){

    this.categoryService.deleteCategoria(id).subscribe(data=>{
      console.log(data);
      this.listaCategorias = this.categoryService.getCategorias();
    })
  }

  

}
