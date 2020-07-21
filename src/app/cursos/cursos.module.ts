import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { TdformComponent } from './tdform/tdform.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, TdformComponent],
  imports: [
    CommonModule,
    FormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
