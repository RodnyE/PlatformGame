/* 
 * World.createEnemy
 */
 
World.prototype.createEnemy = function (txPrefix, tW) {
  let enemy = new AnimatedSprite([resources.box.texture]);
  let type = txPrefix.split("_")[0];
  let enemyId = type + (++ this.elementsCreated);
 
  enemy.type = type;
  enemy.id = enemyId;
  enemy.txPrefix = txPrefix;
  enemy.setAnimation(resources[txPrefix + "_quiet"]);
  enemy.play();
  
  // dimensiones
  enemy.sc = tl2px(tW) / enemy.texture.width; // escala de personaje para su tamaño
  enemy.width = enemy.texture.width * enemy.sc;
  enemy.updateHeightRatio();
  enemy.anchor.set(0.5, 1);
  
  enemy.vx = 0; // velocidad en X
  enemy.vy = 0; // velocidad en Y
  enemy.moving = 0; // movimiento realizado (x)
  
  enemy.speed = 2; // movimiento en x
  enemy.jumpSpeed = 7; // movimiento en y
  enemy.bounciness = 0.1; // rebote
  enemy.jumpTiming = 90;
  
  this.pjs[enemyId] = enemy;
  this.scene.addChild(enemy);
  
  return enemy;
}