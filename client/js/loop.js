// bucle
let lastTime = Date.now();
let fps = 0;
let loopCount = 0;

function OnLoop (delta) {
  let pjs = world.pjs; // personajes
  let plats = world.plats; // superficies

  // iterar en cada personaje y monstruo
  for (let idPj in pjs) {
    
    let pj = pjs[idPj];
    let type = pj.type;
    
    switch (type) {
      case "pj": loopPj(pj, plats); break;
      case "slime": loopSlime(pj, plats); break;
    }
  }

  // ajustar cámara
  let cameraSpeed = 0.09;
  camera.x += (player.x - camera.x) * cameraSpeed;
  camera.y += (player.y - camera.y) * cameraSpeed;

  // mover fondo
  bg2.tileX = - camera.x * 0.2;
  bg3.tileX = - camera.x * 0.57;
  bg4.tileX = - camera.x * 0.9;
  fg1.tileX = - camera.x * 1.6;
  fg1.tileY = (- camera.y + fg1._offsetY) * fg1.relativeScaleY;
  
  
  let time = Date.now();
  if (loopCount % 10 == 0) fps = Math.floor(1000 / (time - lastTime));
  fpsText.text = "FPS: " + fps;
  
  lastTime = time;
  loopCount ++;
}