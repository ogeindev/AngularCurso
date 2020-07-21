import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursosModule } from './cursos.module';
import { CursosComponent } from './cursos.component';


const routes: Routes = [
  { path: '', component: CursosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
