/*
 * Extender PIXI.DisplayObject
 */
 
DisplayObject = PIXI.DisplayObject;


// @xReal ~ obtener position.x contando el anchor.x
Object.defineProperty(DisplayObject.prototype,
  "xReal", {
  	get () {return this.x - (this.width * this.anchor.x)}
  }
);
  
// @yReal ~ obtener position.y contando el anchor.y
Object.defineProperty(DisplayObject.prototype,
  "yReal", {
  	get () {return this.y - (this.height * this.anchor.y)}
  }
);

// @xAnchorOffset ~ obtener pivot de X
Object.defineProperty(DisplayObject.prototype, 
 "xAnchorOffset", {
 	  get() {return this.width * (this.anchor||{x:0}).x}
 }
);

// @yAnchorOffset ~ obtener pivot de Y
Object.defineProperty(DisplayObject.prototype, 
 "yAnchorOffset", {
 	  get() {return this.height * (this.anchor||{y:0}).y}
 }
);
