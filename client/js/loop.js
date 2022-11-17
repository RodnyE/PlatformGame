// bucle
let lastTime = Date.now();
let fps = 0;
let loopCount = 0;

function OnLoop (delta) {
	let pjs = world.pjs;     // personajes
  let plats = world.plats; // superficies
  
  // iterar en cada personaje
	for (let idPj in pjs) {
		
		let pj = pjs[idPj];
		
  	let lastX = pj.x;
  	let lastY = pj.y;
   	let width = pj.width;
  	let height = pj.height;
  
    pj.x += pj.vx * resolution;
    pj.y += pj.vy * resolution;
    
    // cambair direccion de personaje
    if (pj.vx) {
      if (pj.vx > 0) pj.scale.x = 1;
      if (pj.vx < 0) pj.scale.x = -1;
    }
    
    // gravedad
    pj.vy += gravity / density;
    
    // rozamiento
    if (!pj.isMoving && pj.vx) {
      let vr = friction; // velocidad de rozamiento
      
      if (pj.vx > 0.1) {
        let _vx = pj.vx - vr;
        pj.vx = _vx > 0 ? _vx : 0;
      }
      else if (pj.vx < -0.1) {
        let _vx = pj.vx + vr;
        pj.vx = _vx < 0 ? _vx : 0;
      }
      else pj.vx = 0;
    }
     
    // colision con superficies
    for (let platId in plats) {
    	let plat = plats[platId];
      let collide = rectangleCollision(pj, plat, true);
      
      // comprobar colisión
      if (collide) {
        if (collide == "top" || collide == "bottom") {
          // colisión en Y
          pj.vy *= - pj.bounciness;
          pj.isJumping = false;
          pj.isFalling = false;
          if (Math.abs(pj.vy) < 0.1) pj.vy = 0;
        }
        
      }
    }
    
    // ANIMAR PERSONAJE
    // comprobar si no está en contacto con el suelo
    if (Math.abs(pj.vy) > 1) {
      
      pj.setTextures(resources[pj.pjTexture + "_jump"]);
      
      if (pj.vy > 1) {
        // está callendo!
        pj.isFalling = true;
        pj.isJumping = true;
        pj.gotoAndStop(2);
      }
      else {
        // está subiendo!
        pj.isJumping = true;
        pj.setTextures(resources[pj.pjTexture + "_jump"]);
        pj.gotoAndStop(1);
      }
    }
    else {
      pj.play();
      if (pj.vx) {
        // está caminando!
        pj.setTextures(resources[pj.pjTexture + "_mov"]);
      }
      else {
        // está detenido!
        pj.setTextures(resources[pj.pjTexture + "_quiet"]);
      }
    }
    
    // redimensionar personaje
    pj.width = pj.w;
  
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