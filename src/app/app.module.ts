import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

//module, forma de organizar la logica de la app
@NgModule({
  //metadados que definimios dentro de un modulo
  declarations: [
    //Declara componentes
    AppComponent
  ],
  imports: [
    //Importa los modulo, primero tienes que importarlos como ECS6 y posteriormente en la estructura de angular
    //Es decir, primero utiliza la logica ECS6 y luego la conduce por Angular
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
      //Cuando un modulo provee de servicios, aqui se declararian los servicios

  ],
  exports: [
    // exporta modules

  ],
  bootstrap: [AppComponent] //Carga el componente principal, el por defecto
})
export class AppModule { }

//Los componentes pertenecen a un modulo y un modulo puede contener varios componentes.
