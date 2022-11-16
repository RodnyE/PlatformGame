
// obtener superposición (retorna 0 si no hay colision)
function rectangleOverlap(r1, r2) {
 
  // calcular vector de distancia
  let dx = (r1.x + Math.abs(r1.width/2) - r1.xAnchorOffset) - (r2.x + Math.abs(r2.width/2) - r2.xAnchorOffset);
  let dy = (r1.y + Math.abs(r1.height/2) - r1.yAnchorOffset) - (r2.y + Math.abs(r2.height/2) - r2.yAnchorOffset);

  // suma de la mitad de las dimensiones
  let combinedHalfW = Math.abs(r1.width/2) + Math.abs(r2.width/2);
  let combinedHalfH = Math.abs(r1.height/2) + Math.abs(r2.height/2);
  
  // superposición
  let overlapX = 0;
  let overlapY = 0;
  let collide = false;
  
  // chequear que sus distancias son menores que la suma de las mitades de sus dimensiones 
  if (Math.abs(dx) < combinedHalfW &&
      Math.abs(dy) < combinedHalfH) 
    {
      
      // ¡¡La colisión a ocurrido!!
      collide = true;
      
      // Calcular tamaño de superposición
      overlapX = combinedHalfW - Math.abs(dx);
      overlapY = combinedHalfH - Math.abs(dy);

  }
  
  
  // retornar superposición
  return {
    dx: dx, // distancia de figuras en x
    dy: dy, // distancia de figuras en y
    x: overlapX,
    y: overlapY,
    collide: collide,
  }
}
