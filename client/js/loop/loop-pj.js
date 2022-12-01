/*
 * Game Loop of Players
 */

function loopPj (pj, plats) {

  // mover personaje
  let moving = pj.moving;
  let vx = moving || pj.vx;
  let vy = pj.vy;

  pj.x += vx * resolution;
  pj.y += vy * resolution;


  vy = applyGravity(vy); // fuerza de gravedad
  if (!moving) vx = applyFriction(vx); // fuerza de rozamiento
  else pj.setMirror(moving < 0); // cambiar direccion de personaje
  
  // colision con superficies
  for (let platId in plats) {
    let plat = plats[platId];
    let collide = rectangleCollision(pj, plat, true);

    // comprobar colisión
    if (collide) {
      if (collide == "top" || collide == "bottom") {
        // colisión en Y
        vy *= - pj.bounciness;
        pj.isJumping = false;
        pj.isFalling = false;
        if (Math.abs(vy) < 0.1) vy = 0;
      } 
      else {
        // colision en X
      }
    }
  }
  
  // ANIMAR PERSONAJE
  if (Math.abs(vy) > 1) {
    // no está en el suelo!
    pj.play();
    
    if (vy > 1) {
      // está callendo!
      pj.isFalling = true;
      pj.isJumping = true;
      pj.setAnimation(resources[pj.txPrefix + "_falling"]);
    } 
    else {
      // está subiendo!
      pj.isJumping = true;
      pj.setAnimation(resources[pj.txPrefix + "_jump"]);
    }
  } 
  else {
    // está en el suelo!
    pj.play();

    if (vx) {
      // está caminando!
      pj.setAnimation(resources[pj.txPrefix + "_mov"]);
    } 
    else {
      // está detenido!
      pj.setAnimation(resources[pj.txPrefix + "_quiet"]);
    }
  }

  pj.vx = vx;
  pj.vy = vy;

}