import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';


@Component({
  selector: 'cas-nueva',
  templateUrl: './nueva.component.html',
  styleUrls: ['./nueva.component.css']
})
export class NuevaComponent implements OnInit {

  tarea: Tarea;
  @Output() addTarea: EventEmitter<Tarea>;
  constructor() {
    this.addTarea = new EventEmitter();
   }

  ngOnInit(): void {
    this.tarea = new Tarea();
  }
   // avisa de que hay una nueva tarea
  sendAddTarea(){
    this.addTarea.next(this.tarea);
    // con este codigo hacemos que sean diferentes objetivos del tipo Tarea
    this.tarea = new Tarea();
  }

}
