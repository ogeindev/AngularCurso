import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
//Todos los componentes tienen un controlador, que es la
//clase con el constructor
export class HeaderComponent implements OnInit {

  public title: string;
  logo: string;
  //Las variables puedes ponerla tanto en el constructor como en el
  //ngOnInit, por defecto es mejor ponerlas en el OnInit
  constructor() {
    //En el constructor se reserva para aquellos procesos que tienen que estar hechos antes de renderizar
    //que son la inyeccion de dependencias y la creacion de algunos elementos de comunicacion
    //de los componntntes como los emisores de eventos

    //this.title = 'Cuso de Angular';
    //this.logo = '../../../assets/logo.svg';
   }

  ngOnInit(): void {
    // segunda etapa del constructor, pero despues del renderizado
    this.title = 'Cuso de Angular';
    this.logo = '../../../assets/logo.svg';
  }

}

/*FASES

  -Instanciacion del componente
  -Ejecucion del constructor
  -Renderizado
  -Ejecucion del OnInit

*/
