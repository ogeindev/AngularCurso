import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StoreTareasService } from 'src/app/services/store-tareas.service';

@Component({
  selector: 'cas-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aTareas: Array<Tarea>;
  nueva: Tarea;

  constructor(public store : StoreTareasService) {

   }

  ngOnInit(): void {
    //localStorage  --> Tiene 3 metodos, get, set, delete, put
    //JSON --> no es instanciable y tiene dos propiedaddes: PARSE y STRINGIFY
    //this.aTareas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : [];
    this.aTareas = this.store.getTareas();
    this.nueva = new Tarea();
  }

  addTareas(tarea: Tarea){
    this.aTareas.push(tarea);
    this.save();
  }

  onCheckChange(index){
    this.aTareas[index].completed = !this.aTareas[index].completed;
    this.save();
  }

  onClickDelete(index){
    this.aTareas.splice(index, 1);
    this.save();
  }

  private save(){
    //localStorage.setItem('tareas', JSON.stringify(this.aTareas))
    this.store.setTareas(this.aTareas);
  }

}
