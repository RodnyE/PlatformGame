/*
 * Forces
 */
 

// aplicar fuerza de rozamiento en X
function applyFriction (vx) {
  
  if (vx) {
    let vr = friction; // velocidad de rozamiento

    if (vx > 0.1) {
      // derecha!
      let newVx = vx - vr;
      return newVx > 0 ? newVx: 0;
    }
    else if (vx < - 0.1) {
      // izquierda!
      let newVx = vx + vr;
      return newVx < 0 ? newVx: 0;
    } 
    
    // si el desplazamiento es muy pequeño
    // detener
    return 0;
  }
  
  return vx;
}


// aplicar fuerza de gravedad
function applyGravity (vy) {
  return vy + (gravity / density);
}
