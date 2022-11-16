/*
 * Extender PIXI.AnimatedSprite
 */
 
AnimatedSprite = PIXI.AnimatedSprite;

// cambiar texturas dinamicamente
AnimatedSprite.prototype.setTextures = function (animation) {
  let playing = this.playing;
  
  if (animation.name != this._textures.name) {
    this.textures = animation;
    this.animationSpeed = animation.animationSpeed;
    if (playing) this.play();
  }
}