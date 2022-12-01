/*
 * class World
 */



World = function (data = {}) {

  this.width = tl2px(data.tW || 50);
  this.height = tl2px(data.tH || 50);

  this.pjs = data.pjs || {};
  this.obj = data.obj || {};
  this.plats = data.plats || {};

  this.scene = data.scene;
  this.elementsCreated = 0;
};
