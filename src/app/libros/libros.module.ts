import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BuscarMockComponent } from './buscar-mock/buscar-mock.component';
import { FormsModule } from '@angular/forms';
import { BuscarGoogleComponent } from './buscar-google/buscar-google.component';
import { BuscarByServiceComponent } from './buscar-by-service/buscar-by-service.component';


@NgModule({
  declarations: [LibrosComponent, BuscarMockComponent, BuscarGoogleComponent, BuscarByServiceComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule

  ]
})
export class LibrosModule { }
