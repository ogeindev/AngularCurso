import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  titulo: string;
  msg: string;
  userName: string;
  constructor() { }

  ngOnInit(): void {
    this.titulo = 'Saludo';
    this.msg = 'Componente inicial del Curso de Angular';
    this.userName = 'Pepe';

  }

  onClickBorar(ev){
    this.userName= '';
    console.log(ev);
  }
}
