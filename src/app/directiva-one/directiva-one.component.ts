import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva-one',
  templateUrl: './directiva-one.component.html',
  styleUrls: ['./directiva-one.component.css']
})
export class DirectivaOneComponent {

  mensaje:string ='';
  registrado:boolean = false;
  nombre:string = '';
  apellido:string = ''

  registrarUsuario(){
    this.mensaje = 'Usuario registrado con exito';
    this.registrado =!this.registrado;
  }

  

}
