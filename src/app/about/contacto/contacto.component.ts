import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  images: Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

}
