import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http: HttpClient
  ) { }

  getProducto() {
    var s = {
      include: [
        {
          "relation": "TIENE_UNA_CATEGORIA"
        }
      ]
    }
    const strin = JSON.stringify(s)
    console.log(strin)

    console.log( new URLSearchParams(strin));
    console.log(new URLSearchParams(strin).toString())

    

    return this.http.get<Producto[]>('http://localhost:3000/productos?filter='+strin,);
  }

  postProducto(producto: Producto){
    return this.http.post<Producto>('http://localhost:3000/productos',producto);
  }

  getProductById(id: number){
    return this.http.get<Producto>('http://localhost:3000/productos/'+id);
  }

  putProduct(producto: Producto){
    return this.http.put<Producto>('http://localhost:3000/productos/'+producto.id,producto);
  }
}
