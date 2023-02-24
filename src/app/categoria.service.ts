import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from './models/categoria.mode';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) {}


  getCategorias() {
    return this.http.get<Categoria[]>('http://localhost:3000/categorias');
  }

  postCategoria(categoria:Categoria){

    return this.http.post<{ id:number ,nombre:string , descripcion:string}>('http://localhost:3000/categorias',categoria);
  }

  getCategoriaById(id:number){
    return this.http.get<{ id:number, nombre:string, descripcion:string }>(`http://localhost:3000/categorias/${id}`)
  }

  putCategoria(categoria:Categoria){
      return this.http.put<{ id:number, nombre:string, descripcion:string }>(`http://localhost:3000/categorias/${categoria.id}`,categoria);
  }

  deleteCategoria(id:number){
    return this.http.delete(`http://localhost:3000/categorias/${id}`);
  }
}
