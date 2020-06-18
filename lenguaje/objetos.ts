let msg: string
msg = 'Hola desde TypeScript'
console.log(msg)

class PersonTS {
  /*public nombre: string
  private edad: number
  constructor(nombre, edad: number) {
      this.nombre = nombre
      this.edad = edad
  }*/
  constructor(public nombre: string, public edad: number){

  }
  saludar() {
      console.log(`Hola, soy ${this.nombre}`)
  }
}

const p1 = new PersonTS('Rosa', 23)
console.log(p1)
const p2 = new PersonTS('Ernesto', 26)
console.log(p2)
//p2.edad = 27 // no se puede manipular si la edad es privada
p2.nombre = 'Fran' // Se puede manipular si es publico
// error -> p2.apellido = 'Perez'
console.log(p2)

//PARA CARGARLO
// node_modules/.bin/ts-node lenguaje/objetos.ts

class AlumnoTS extends PersonTS {
  constructor(nombre, edad, public curso: string) {
      super(nombre, edad)
      this.curso = curso
  }
  saludar() {
      super.saludar
      console.log(`Hola soy ${this.nombre} y estudio ${this.curso}`)
  }
}

const a1 = new AlumnoTS('MariCarmen', 76 , 'VUE')
console.log(a1)
a1.saludar()

//TypeScript nos permite programar interfaces
//interface, es un equivalente a una clase pero sin instanciaciones.
//Definen una tipologia.No hay constructor
//Los interfaces son siempre publicos
interface Mascota {
  nombre: string;
  especie: string;
}

let m1: Mascota;
m1 = {
  nombre : 'Rufo',
  especie : 'canario'
}

let p5: PersonTS;
p5 = {
  nombre : '',
  edad: null,
  saludar: null
}
