import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockLibrosService {

  constructor() { }

  getLibros(clave: string) : Array<string>{
    return ['Libros 1', 'Libro 2', 'Libro 3'];
  }

  getLibrosAsync(clave: string) : Promise<Array<string>>{
    return new Promise((resolve, reject)=>{
      setTimeout(
        ()=>{
        const data = ['Libros 1', 'Libro 2', 'Libro 3'];
        console.log(data);
        resolve(data);
      },
         1000
         )
    });

  }
}

