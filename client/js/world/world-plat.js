/*
 * World.createPlatforms
 */
 
// crear plataformas
World.prototype.createPlatform = function (
    tX, tY, tW, tH
  ) {

  let plat = new Graphics();
  let platId = "plat" + this.elementsCreated;
  let scaleGd = tl2px(1) / 32; // escalar bloques de tierra
  
  // dibujar plataformas
  for (let y = 0; y < tH; y++) {
    let txId = "gd";
    
    if (y == 0) txId += "_top";
    else if (y == tH - 1) txId += "_bottom";
    else txId += "_mid";
    
    for (let x = 0; x < tW; x++) {
      let texture;
      if (x == 0 || x + 1 == tW) texture = resources[txId + "_corner"].texture;
      else texture = resources[txId].texture;
      
      plat
        .beginTextureFill({
          texture: texture,
          matrix: (x + 1 == tW) ? new Matrix(-scaleGd, 0, 0, scaleGd) : new Matrix(scaleGd, 0, 0, scaleGd),
        })
        .drawRect(tl2px(x), tl2px(y), tl2px(1), tl2px(1))
        .endFill();
    }
  }
  
  
    
  
  // posicionar superficie
  plat.x = tl2px(tX || 0);
  plat.y = tl2px(tY || 0);

  plat.id = platId;
  this.plats[platId] = plat;
  this.scene.addChild(plat);

  this.elementsCreated ++;
  return plat;
};