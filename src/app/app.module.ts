import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DirectivaOneComponent } from './directiva-one/directiva-one.component';
import { FormsModule } from '@angular/forms';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RouterModule } from '@angular/router';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { ProductoListaComponent } from './productos/producto-lista/producto-lista.component';
import { ProductoCrearComponent } from './productos/producto-crear/producto-crear.component';
import { ProductoEditarComponent } from './productos/producto-editar/producto-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    DirectivaOneComponent,
    ListaUsuariosComponent,
    ListaCategoriaComponent,
    CrearCategoriaComponent,
    EditarCategoriaComponent,
    ProductoListaComponent,
    ProductoCrearComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: DirectivaOneComponent},
      { path: 'usuarios', component: ListaUsuariosComponent},
      { path: 'categorias', component: ListaCategoriaComponent},
      { path: 'categorias/crear', component: CrearCategoriaComponent},
      { path: 'categorias/editar/:id', component: EditarCategoriaComponent},
      { path: 'productos', component: ProductoListaComponent},
      { path: 'productos/crear-producto', component: ProductoCrearComponent},
      { path: 'productos/editar-producto/:id', component: ProductoEditarComponent},






    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
