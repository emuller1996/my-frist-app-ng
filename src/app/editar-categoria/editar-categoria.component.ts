import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../models/categoria.mode';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent  implements OnInit {

    
  idCategoria:number;
  categoriaUpdate:Categoria;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private categoriaService:CategoriaService
  ){}

  ngOnInit(): void {
    console.log('ngOnInit')
    this.idCategoria = this.route.snapshot.params['id'];

    this.categoriaService.getCategoriaById(this.idCategoria).subscribe( async(data) => {
      
      this.categoriaUpdate = data;
      console.log(this.categoriaUpdate)
    });
  }

  onUpdateCategoria(){

    console.log(this.categoriaUpdate);
    this.categoriaService.putCategoria(this.categoriaUpdate).subscribe( data=>{
      alert("Editado Correctamente")
      this.router.navigate(['categorias']);
    })
    
  }

}
