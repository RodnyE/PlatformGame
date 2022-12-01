/*
 * Game Loop of Slime
 */

function loopSlime (slime, plats) {

  
  let moving = slime.moving;
  let vx = moving;
  let vy = slime.vy;
  
  vy = applyGravity(vy); // gravedad
  
  // controlar slime
  if (slime.jumpTiming - loopCount == 0) {
    if (slime.x - player.x > 0) {
      moving = - slime.speed;
      slime.setMirror(true);
    }
    else {
      moving = slime.speed;
      slime.setMirror(false);
    }
    vx = moving;
    vy -= slime.jumpSpeed;
    slime.isJumping = true;
    slime.jumpTiming = loopCount + randomInt(100, 150);
  }
  
  // mover
  slime.x += vx * resolution;
  slime.y += vy * resolution;
  
  // colision con superficies
  for (let platId in plats) {
    let plat = plats[platId];
    let collide = rectangleCollision(slime, plat, true);

    // comprobar colisión
    if (collide) {
      if (collide == "top" || collide == "bottom") {
        // colisión en Y
        vy = 0;
        slime.isJumping = false;
        break;
      } 
      else {
        // colision en X
      }
    }
  }
  
  if (!slime.isJumping) moving = 0;
  
  
  
  // ANIMAR SLIME
  if (Math.abs(vy) > 1) {
    // no está en el suelo!
    slime.play();
    
    if (vy > 1) {
      // está callendo!
      slime.isFalling = true;
      slime.isJumping = true;
      slime.setAnimation(resources[slime.txPrefix + "_falling"]);
    } 
    else {
      // está subiendo!
      slime.isJumping = true;
      slime.setAnimation(resources[slime.txPrefix + "_jump"]);
    }
  } 
  else {
    // está en el suelo!
    slime.play();
    slime.setAnimation(resources[slime.txPrefix + "_quiet"]);
  }
  
  slime.moving = moving;
  slime.vx = vx;
  slime.vy = vy;
  
}