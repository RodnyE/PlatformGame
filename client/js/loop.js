// bucle
let lastTime = Date.now();
let fps = 0;
let loopCount = 0;

function OnLoop (delta) {
  let pjs = world.pjs; // personajes
  let plats = world.plats; // superficies

  // iterar en cada personaje
  for (let idPj in pjs) {

    let pj = pjs[idPj];

    let width = pj.width;
    let height = pj.height;
    let moving = pj.moving;
    let vx = (pj.vx + moving)/2;
    let vy = pj.vy;
    
    
    // mover
    pj.x += vx * resolution;
    pj.y += vy * resolution;

    // cambiar direccion de personaje
    if (vx) {
      if (vx > 0) pj.scale.x = pj.sc;
      else pj.scale.x = - pj.sc;
      
      // redimensionar
      pj.width = pj.texture.width * pj.sc; // redimensionar personaje
      pj.updateHeightRatio();
    }

    // gravedad
    vy += gravity / density;
    
    
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
    
    
    // aplicar fuerza de rozamiento
    if (moving) {
      if (vx) {
        let vr = friction; // velocidad de rozamiento

        if (vx > 0.1) {
          let _vx = vx - vr;
          vx = _vx > 0 ? _vx: 0;
        } 
        else if (vx < - 0.1) {
          let _vx = vx + vr;
          vx = _vx < 0 ? _vx: 0;
        } 
        else vx = 0;
      }
    }
    
    

    // ANIMAR PERSONAJE
    if (Math.abs(vy) > 1) {
      // no está en el suelo!
      pj.setTextures(resources[pj.txPrefix + "_jump"]);

      if (vy > 1) {
        // está callendo!
        pj.isFalling = true;
        pj.isJumping = true;
        pj.gotoAndStop(2);
      } 
      else {
        // está subiendo!
        pj.isJumping = true;
        pj.setTextures(resources[pj.txPrefix + "_jump"]);
        pj.gotoAndStop(1);
      }
    } 
    else {
      // está en el suelo!
      pj.play();
      
      if (moving) {
        // está caminando!
        pj.setTextures(resources[pj.txPrefix + "_mov"]);
      } 
      else {
        // está detenido!
        pj.setTextures(resources[pj.txPrefix + "_quiet"]);
      }
    }

    pj.vx = vx;
    pj.vy = vy;
  }

  // ajustar cámara
  camera.x = player.x;
  camera.y = player.y;

  // mover fondo
  bg2.tileX = - camera.x * 0.4;
  bg3.tileX = - camera.x * 0.9;
  fg1.tileX = - camera.x * 1.6;
  /*bg2.tileY = (- camera.y + bg2._offsetY) * bg2.relativeScaleY;
  bg3.tileY = (- camera.y + bg3._offsetY) * bg3.relativeScaleY;*/
  fg1.tileY = (- camera.y + fg1._offsetY) * fg1.relativeScaleY;

  let time = Date.now();

  fps = Math.floor(1000 / (time - lastTime));
  if (loopCount % 10 == 0) fpsText.text = "FPS: " + fps;

  lastTime = time;
  loopCount ++;
}