/*
 * World.createPlatforms
 */
 
// crear plataformas
World.prototype.createPlatform = function (data) {

  let plat = new Graphics();
  let platId = "plat" + this.elementsCreated;

  // dibujar textura
  plat
    .beginFill(0x003174)
    .drawRect(0, 0, toPx(data.tW), toPx(data.tH))
    .endFill();
    
    
  
  // posicionar superficie
  plat.x = toPx(data.tX || 0);
  plat.y = toPx(data.tY || 0);

  plat.id = platId;
  this.plats[platId] = plat;
  this.scene.addChild(plat);

  this.elementsCreated ++;
  return plat;
};