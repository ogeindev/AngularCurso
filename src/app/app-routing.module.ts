import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  // ejemplo de routing no lazy, si se deja asi no podria guardarse en favorito
  // { path: 'home', component: HomeComponent },


  //Enrutamiento LAZY
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tareas',
    loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'libros',
    loadChildren: () => import('./libros/libros.module').then(m => m.LibrosModule)
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' } //Para cuando escribe una ruta diferente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
