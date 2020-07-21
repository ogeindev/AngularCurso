import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import  localeEs  from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');

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
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
      //Cuando un modulo provee de servicios, aqui se declararian los servicios
      // {provide: LOCALE_ID,  useValue: 'en-US'}
      {provide: LOCALE_ID,  useValue: 'es'}
  ],
  exports: [
    // exporta modules

  ],
  bootstrap: [AppComponent] //Carga el componente principal, el por defecto
})
export class AppModule { }

//Los componentes pertenecen a un modulo y un modulo puede contener varios componentes.
