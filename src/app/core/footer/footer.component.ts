import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  autor:string;
  hoy: Date;
  constructor() { }

  ngOnInit(): void {
    this.autor = 'Alejandro';
    this.hoy = new Date();
  }

}
