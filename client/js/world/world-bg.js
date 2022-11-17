/*
 * World.createBackground
 */

// añadir fondo
World.prototype.createBg = function (textureId, scale) {
  let texture = resources[textureId].texture;
  let tiling = new TilingSprite(texture);
  
  tiling.relativeScaleY = scale;
  tiling.x = 0;
  tiling.y = 0;
  tiling.tileHeight = canvasHeight * scale;
  //tiling.tileHeight = world.height * scale;
  tiling.updateTileWidthRatio();
  tiling.width = canvasWidth;
  tiling.height = canvasHeight;
  
  let offsetY = (tiling.height * scale) - tiling.height;
  tiling._offsetY = offsetY;
  tiling.tilePosition.y = - offsetY;
  
  scene.addChild(tiling);
  return tiling;
};