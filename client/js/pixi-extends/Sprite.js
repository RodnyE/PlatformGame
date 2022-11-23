/*
 * Extender PIXI.Sprite
 */
 
Sprite = PIXI.Sprite;

// @aspectRatio
Object.defineProperty(Sprite.prototype,
  "aspectRatio", {
    get: function() {
      let texture = this.texture
      let aspectRatio = texture.height / texture.width;
      this._aspectRatio = aspectRatio;
      return aspectRatio;
    }
  }
);

// @updateHeightRatio() ~ ajustar relacion de altura
Sprite.prototype.updateHeightRatio = function () {
	this.height = this.width * this.aspectRatio;
};


// @updateWidthRatio() ~ ajustar relacion de largo
Sprite.prototype.updateWidthRatio = function () {
	this.width = this.height / this.aspectRatio;
};