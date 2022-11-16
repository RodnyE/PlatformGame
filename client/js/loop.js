// bucle
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
    
    // animar personaje
    if (pj.vx) {
      if (pj.vx > 0) pj.scale.x = 1;
      if (pj.vx < 0) pj.scale.x = -1;
      pj.width = pj.w;
      
      pj.setTextures(resources[pj.pjTexture + "_mov"]);
    }
    else pj.setTextures(resources[pj.pjTexture + "_quiet"]);
  
    
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
          if (Math.abs(pj.vy) < 0.1) pj.vy = 0;
        }
        
      }
    }
    
  
	}
	
	// ajustar cámara
  camera.x = player.x;
  camera.y = player.y;
  
  // mover fondo
  bg2.tileX = - camera.x * 0.4;
  bg3.tileX = - camera.x * 0.9;
  fg1.tileX = - camera.x * 1.6;
  fg1.tileY = (- camera.y + fg1._offsetY) * 1.2;
}