import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})

export class ListaUsuariosComponent {

  listaUsuarios: {
    nombre:string,
    apellido:string
  }[] = [
    {
      nombre: 'Estefano  ',
      apellido: 'Muller'
    },
    {
      nombre: 'Felipe',
      apellido: 'Lopez'
    }
  ]



 

}
