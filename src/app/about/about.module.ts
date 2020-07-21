import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HomeModule } from '../home/home.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AboutComponent, UsuariosComponent, ContactoComponent, MenuComponent],
  imports: [ //El orden importa
    CommonModule,
    FormsModule,
    AboutRoutingModule,
    HomeModule
  ]
})
export class AboutModule { }
