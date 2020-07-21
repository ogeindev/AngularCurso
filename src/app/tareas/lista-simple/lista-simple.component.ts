import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {

  tarea: string;
  // aTareas: Array<any>;
  aTareas: Array<string>; // El tipo no crea la variable, solo asegura que  cuando se vaya a crear no
  // se cree una variable distinta a ese tipo
  constructor() { }

  ngOnInit(): void {
    this.aTareas = []; // Creando la varibale
  }

  addTarea() {
    this.aTareas.push(this.tarea);
    this.tarea = '';
    console.log(this.aTareas);
  }

  //Error tipico: pensar que por el hecho de dclarar el tipola variable esta creada
}
