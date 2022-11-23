/*
 * Cargar texturas
 */

function loadResources (callback) {
  return PIXI.Loader.shared
    .add("box", "assets/img/box.png")
    
    // fondos
    .add("bg1", "assets/img/bg/bg1n.png")
    .add("bg2", "assets/img/bg/bg2n.png")
    .add("bg3", "assets/img/bg/bg3n.png")
    .add("fg1", "assets/img/bg/fg1n.png")
    
    // jugador
    .addAnimation("pj_01_mov", "assets/img/pjs/pj_01/move-000", 4, 0.2)
    .addAnimation("pj_01_quiet", "assets/img/pjs/pj_01/quiet-000", 4, 0.07)
    .addAnimation("pj_01_jump", "assets/img/pjs/pj_01/jump-000", 4, 0.07)
    .addAnimation("pj_01_action", "assets/img/pjs/pj_01/action-000", 4, 0.07)
    
    // slime
    .addAnimation("slime_quiet", "assets/img/ens/slime/quiet-000", 2, 0.07)
    .addAnimation("slime_jump", "assets/img/ens/slime/quiet-000", 3, 0.07)
    
    
    // al terminar 
    .load( callback );
}