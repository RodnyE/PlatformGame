/*
 * World.createPlatforms
 */
 
// crear plataformas
World.prototype.createPlatform = function (
    tX, tY, tW, tH
  ) {

  let plat = new Graphics();
  let platId = "plat" + this.elementsCreated;

  // dibujar textura
  plat
    .beginFill(0x003174)
    .drawRect(0, 0, toPx(tW), toPx(tH))
    .endFill();
    
    
  
  // posicionar superficie
  plat.x = toPx(tX || 0);
  plat.y = toPx(tY || 0);

  plat.id = platId;
  this.plats[platId] = plat;
  this.scene.addChild(plat);

  this.elementsCreated ++;
  return plat;
};