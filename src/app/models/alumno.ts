import { MasterData } from './master-data';

export class Alumno {
  constructor(
    public nombre: string = '',
    public apellidos: string = '',
    public dni: string = '',
    public email: string = '',
    public passw: string = '',
    public nacim: string = '',
    public coment: string = '',
    public isOk: boolean = false,
    public turno: MasterData = null,
    public curso: MasterData = null
  ){

  }
}


