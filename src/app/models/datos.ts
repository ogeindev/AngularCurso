import { MasterData } from './master-data'

export const TURNOS = [
  new MasterData('M', 'Mañana', '9:00-14:00'),
  new MasterData('T', 'Tardes', '15:00-19:00'),
  new MasterData('C', 'Completo', '10:00-13:00 y 15:00-18:00')
]

export const CURSOS: Array<MasterData> = [
  new MasterData(1, 'Angular', 'Aprendiendo angular...'),
  new MasterData(2, 'React', 'Aprendiendo React...'),
  new MasterData(3, 'Vue', 'Aprendiendo Vue...')
]
// Array<MasterData>    POnerlo que no da lo mismo
