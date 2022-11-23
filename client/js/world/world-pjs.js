/*
 * World.createPj
 */


// añadir personaje
World.prototype.createPj = function (
    txPrefix, tW
  ) {

  let pj = new AnimatedSprite([resources.box.texture]);
  let pjId = "pj" + (++this.elementsCreated);
  
  pj.type = "pj";
  pj.txPrefix = txPrefix; // paquete de texturas
  pj.setTextures(resources[txPrefix + "_quiet"]);
  pj.play();
  
  // dimensiones
  pj.sc = toPx(tW) / pj.texture.width; // escala de personaje para su tamaño
  pj.width = pj.texture.width * pj.sc;
  pj.updateHeightRatio();
  
  pj.vx = 0; // velocidad en X
  pj.vy = 0; // velocidad en Y
  pj.moving = 0; // movimiento realizado (x)
  
  pj.speed = 2; // movimiento en x
  pj.jumpSpeed = 7; // movimiento en y
  
  pj.bounciness = 0.1; // rebote
  pj.id = pjId;
  this.scene.addChild(pj);

  this.pjs[pjId] = pj;

  return pj;
}