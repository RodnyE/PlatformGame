/*
 * Extender PIXI.TilingSprite
 */
 
TilingSprite = PIXI.TilingSprite;


// tileWidth
Object.defineProperty(TilingSprite.prototype,
  "tileWidth", {
    get: function () {
      return this.texture.width * this.tileTransform.scale.x;
    },
    
    set: function (w) {
      this.tileTransform.scale.x = w / this.texture.width;
    }
  }
);


// tileHeight
Object.defineProperty(TilingSprite.prototype,
  "tileHeight", {
    get: function () {
      return this.texture.height * this.tileTransform.scale.y;
    },
    
    set: function (h) {
      this.tileTransform.scale.y = h / this.texture.height;
    }
  }
);


// updateTileHeightRatio() ~ ajustar relacion de altura de mosaico
TilingSprite.prototype.updateTileHeightRatio = function () {
	this.tileHeight = this.tileWidth * this.aspectRatio;
};


// updateWidthRatio() ~ ajustar relacion de largo
TilingSprite.prototype.updateTileWidthRatio = function () {
	this.tileWidth = this.tileHeight / this.aspectRatio;
};

// tileX
Object.defineProperty(TilingSprite.prototype,
  "tileX", {
    set: function (x) {
      let tileWidth = this.tileWidth;
      let intTiles = tileWidth * Math.ceil(this.width/tileWidth);
      this.tilePosition.x = x - (intTiles * Math.floor(x/intTiles));
    }
  }
);


// tileY
Object.defineProperty(TilingSprite.prototype,
  "tileY", {
    set: function (y) {
      let tileHeight = this.tileHeight;
      let intTiles = tileHeight * Math.ceil(this.height/tileHeight);
      this.tilePosition.y = y - (intTiles * Math.floor(y/intTiles));
    }
  }
);