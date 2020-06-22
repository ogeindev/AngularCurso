import { Component, OnInit, ViewChild } from '@angular/core';


@Component({ //Decora la clase entera
  selector: 'cas-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {

  //@ViewChild() userName //Decorador especifico. Modifica su comportamiento

  constructor() { }

  ngOnInit(): void {
  }

}
