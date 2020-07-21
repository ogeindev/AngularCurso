import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'cas-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css']
})
export class BuscarGoogleComponent implements OnInit {

  clave: string;
  aLibros: Array<Libro>;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.aLibros = [];
  }

  onClickBuscar(){
    if(!this.clave){
      return;
    }
    const urlBase = environment.urlLibros;
    //const resp = this.http.get(urlBase+this.clave).toPromise();
    this.http.get(urlBase+this.clave).toPromise().then(
      (resp: any) => {
        this.aLibros = resp.items.map(item => {
          return new Libro(
            item.id, item.volumeInfo.title, item.volumeInfo.authors
          )

        });
        this.clave = '';
      }
    )
   // console.log(resp);
  }

}
