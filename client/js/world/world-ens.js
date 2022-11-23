/* 
 * World.createEnemy
 */
 
World.prototype.createEnemy = function (txPrefix) {
  let enemy = new AnimatedSprite([resource.box.texture]);
  enemy.type = txPrefix.split("_")(0);
  enemy.txPrefix = txPrefix;
  
  return enemy;
}