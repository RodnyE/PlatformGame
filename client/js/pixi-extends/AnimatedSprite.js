/*
 * Extender PIXI.AnimatedSprite
 */
 
AnimatedSprite = PIXI.AnimatedSprite;
AnimatedSprite.prototype.prototype = Object.create(PIXI.Sprite.prototype);

// cambiar texturas dinamicamente
AnimatedSprite.prototype.setAnimation = function (animation) {
  let playing = this.playing;
  
  if (animation && animation.name != this._textures.name) {
    this.textures = animation;
    this.animationSpeed = animation.animationSpeed || 1;
    this.loop = animation.loop;
    if (playing) this.play();
  }
}