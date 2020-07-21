import { Component, OnInit, ViewChild } from '@angular/core';
import { MasterData } from 'src/app/models/master-data';
import { CURSOS, TURNOS } from 'src/app/models/datos';
import { Alumno } from 'src/app/models/alumno';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cas-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  turnos: Array<MasterData>;
  cursos: Array<MasterData>;
  alumno: Alumno;
  @ViewChild('refForm', {static:true}) form: NgForm;


  constructor() { }

  ngOnInit(): void {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.alumno = new Alumno();
    console.log(this.form);
  }

  enviarForm(){
    console.log('Enviando ', this.alumno);
  }
}
