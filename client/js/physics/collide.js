
// obtener direccion de colisición

function rectangleCollision (r1, r2, back) {
  let overlap = rectangleOverlap(r1, r2);
  
  if (!overlap.collide) return null;
  
  
  // la colisión a ocurrido en el eje con menor superposición
  if (overlap.x >= overlap.y) {
    
    // ¡¡colisión en Y!!
    if (overlap.dy > 0) {
      if (back) r1.y += overlap.y;
      return "top";
    }
    else {
      if (back) r1.y -= overlap.y;
      return "bottom";
    }
    
  } 
  else {
    
    // ¡¡colision en X!!
    if (overlap.dx > 0) {
      if (back) r1.x += overlap.x;
      return "left";
    }
    else {
      if (back) r1.x -= overlap.x;
      return "right";
    }
    
  }
}