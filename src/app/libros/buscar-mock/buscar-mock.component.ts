import { Component, OnInit } from '@angular/core';
import { MockLibrosService } from 'src/app/services/mock-libros.service';

@Component({
  selector: 'cas-buscar-mock',
  templateUrl: './buscar-mock.component.html',
  styleUrls: ['./buscar-mock.component.css']
})
export class BuscarMockComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public mockLibros: MockLibrosService) {

  }

  ngOnInit(): void {
    this.aLibros = [];
  }
  onClickBuscar(){
    this.aLibros = this.mockLibros.getLibros(this.clave);
  }
  onClickBuscarAsync(){
    this.mockLibros.getLibrosAsync(this.clave)
    .then( (resp: Array<string>) => this.aLibros = resp)



    // callback(this.aLibro);
  }
}
