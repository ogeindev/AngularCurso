import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({ //Decora la clase entera
  selector: 'cas-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {

  @ViewChild('refUserName', {static: true}) userName: ElementRef; //Decorador especifico. Modifica su comportamiento

  constructor() { }

  ngOnInit(): void {
    console.dir(this.userName.nativeElement)
    console.log(this.userName.nativeElement)
  }

}
