export function render(cadena, elem){
  elem.innerHTML = cadena
}

export function renderMay(cadena, elem){
  elem.innerHTML = cadena.toUpperCase()
}
export function renderMin(cadena, elem){
  elem.innerHTML = cadena.toLowerCase()
}
//Cuando se le pone el export delante de la funcion
//se convierte en un modulo de ESC6
// Cuando se pone un export lo que se hace es convertir en modulo todo el archivo

