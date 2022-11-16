/*
 * class World
 */

function toTile (px) {return px / tileSize}
function toPx (tile) {return tile * tileSize}


World = function (data = {}) {

  this.width = toPx(data.tW || 50);
  this.height = toPx(data.tH || 50);

  this.pjs = data.pjs || {};
  this.obj = data.obj || {};
  this.plats = data.plats || {};

  this.scene = data.scene; // || window.scene;
  this.elementsCreated = 0;
};
