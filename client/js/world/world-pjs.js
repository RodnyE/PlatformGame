/*
 * World.createPj
 */


// añadir personaje
World.prototype.createPj = function (data = {}) {

  let pj = new AnimatedSprite([resources.box.texture]);
  let pjId = "pj" + (++this.elementsCreated);
  
  pj.pjTexture = data.texture;
  pj.setTextures(resources[data.texture + "_quiet"]);
  pj.play();
  
  pj.vx = 0;
  pj.vy = 0;
  
  pj.speed = 2;
  pj.jumpSpeed = 7;
  
  pj.bounciness = 0.1;
  pj.id = pjId;
  this.scene.addChild(pj);

  this.pjs[pjId] = pj;

  return pj;
}