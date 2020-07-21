import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class StoreTareasService {

  store: string
  constructor() {
    this.store = 'tareas'
   }
   getTareas(): Array<Tarea> {
     return localStorage.getItem(this.store) ?
     JSON.parse( localStorage.getItem(this.store)) : [];
   }
   setTareas(data : Array<Tarea>){
     localStorage.setItem(this.store, JSON.stringify(data));
   }
}
