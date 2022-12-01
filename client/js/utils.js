/*
 * funciones útiles
 */

// convertir pixeles a tiles
function px2tl (px) {
  return px / tileSize
}

// convertir tiles a pixeles
function tl2px (tile) {
  return tile * tileSize;
}

// operador "??"
function or () {
  let length = arguments.length;
  for (let i = 0; i < length; i++) {
    let arg = arguments[i];
    if (arg === undefined || arg === null) continue;
    return arg;
  }
}

// obtener entero aleatorio
function randomInt (min, max) {
  return Math.round(Math.random() * (max - min)) + min
}
