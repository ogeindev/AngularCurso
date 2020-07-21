import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { GoogleLibrosService } from 'src/app/services/google-libros.service';

@Component({
  selector: 'cas-buscar-by-service',
  templateUrl: './buscar-by-service.component.html',
  styleUrls: ['./buscar-by-service.component.css']
})
export class BuscarByServiceComponent implements OnInit {

  clave: string;
  aLibros: Array<Libro>;

  constructor(public gLibros: GoogleLibrosService) { }

  ngOnInit(): void {
    this.aLibros = [];
    this.clave = "";
  }

  onClickBuscar() {
    if (!this.clave) {
      return;
    }
    this.gLibros.buscar(this.clave)
    .then(
      (resp: Array<Libro>) => this.aLibros = resp)
  }

}
