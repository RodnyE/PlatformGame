/* 
 * Camara 
*/
class Camera {
    constructor (layer, options) {
      this.layer = layer;
      if (options) {
        layer.w = options.w;
        layer.h = options.h;
      }
      
      this.x = canvasWidth/2 + 0.01;
      this.y = canvasHeight/2 + 0.01;
    }

    setPosition (x, y, force) {
      force ? this.force = force: null;
      this.x = x;
      this.y = y;
      force ? this.force = false: null;
    }

    get x () {return this._x}
    get y () {return this._y}
    set x (_x) {
      let layer = this.layer;
      let x = - _x + canvasWidth/2;
      if (this.force || (x < 0 && x > - layer.w + canvasWidth)) {
        layer.x = x;
        this._x = _x;
      }
    }
    set y (_y) {
      let layer = this.layer;
      let y = - _y + canvasHeight/2;
      if (this.force || (y < 0 && y > - layer.h + canvasHeight)) {
        layer.y = y;
        this._y = _y;
      }
    }
  };