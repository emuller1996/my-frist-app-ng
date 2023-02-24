import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../models/categoria.mode';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent {

  constructor(
    private router:Router,
    private categoriaService:CategoriaService
  ){}

  categoria:Categoria = new Categoria();

  onSaveCategoria(){
    console.log("onSaveCategoria")
    console.log(this.categoria)
    this.categoriaService.postCategoria(this.categoria).subscribe(data=> { 
      alert("Agregado con Exito");
      console.log(data);
      this.router.navigate(["categorias"]);
    })
  }
}
