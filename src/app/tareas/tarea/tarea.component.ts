import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';


@Component({
  selector: 'cas-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tarea: Tarea;
  @Input() index: number;
  @Output() checkChanged: EventEmitter<number>;
  @Output() clickDeleted: EventEmitter<number>;
  constructor() {
    this.checkChanged = new EventEmitter;
    this.clickDeleted = new EventEmitter;
  }

  ngOnInit(): void {
    this.tarea={...this.tarea} //desestructura un objeto.
    //si se lo haces a  una array convierte en array, convierte el array en cada uno de sus items
    // si es a un objeto, convierto el objeto en cada uno de sus items
    // obtienes un clon del objeto
  }

  sendCheckChange(){
    //this.checkChanged.next(); // EVENTO DONDE NO HAY CONTENIDO DE DATOS, SIN PARAMETRO PORQUE ES UN BOOLEAN
    this.checkChanged.next(this.index - 1);
  }

  sendDeleteClick(){
    this.clickDeleted.next(this.index - 1);
  }
}
