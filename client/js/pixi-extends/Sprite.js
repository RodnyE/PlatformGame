/*
 * Extender PIXI.Sprite
 */
 
Sprite = PIXI.Sprite;

// @setMirror() ~ invertir textura
Sprite.prototype.setMirror = function (boo) {
  if (this._mirror !== boo) {
    this.scale.x = boo ? - this.sc : this.sc;
    this._mirror = boo;
    
    // redimensionar
    this.width = this.texture.width * this.sc; // redimensionar personaje
    this.updateHeightRatio();
  }
};

// @aspectRatio
Object.defineProperty(Sprite.prototype,
  "aspectRatio", {
    get: function() {
      let texture = this.texture;
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