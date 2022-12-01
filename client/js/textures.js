/*
 * Cargar texturas
 */

function loadResources (callback) {
  return PIXI.Loader.shared
    .add("box", "assets/img/box.png")
    
    // suelo
    .add("gd_top_corner", "assets/img/gd/gd-x-top-corner.png")
    .add("gd_top", "assets/img/gd/gd-x-top.png")
    .add("gd_bottom_corner", "assets/img/gd/gd-x-bottom-corner.png")
    .add("gd_bottom", "assets/img/gd/gd-x-bottom.png")
    .add("gd_mid_corner", "assets/img/gd/gd-x-mid-corner.png")
    .add("gd_mid", "assets/img/gd/gd-x-mid.png")
    
    // fondos
    .add("gd", "assets/img/bg/gd.png")
    .add("bg1", "assets/img/bg/bg1n.png")
    .add("bg2", "assets/img/bg/bg2n.png")
    .add("bg3", "assets/img/bg/bg3n.png")
    .add("bg4", "assets/img/bg/bg4n.png")
    .add("fg1", "assets/img/bg/fg1n.png")
    
    // jugador
    .addAnimation("pj_01_mov", "assets/img/pjs/pj_01/move-000", 4, 0.2)
    .addAnimation("pj_01_quiet", "assets/img/pjs/pj_01/quiet-000", 4, 0.07)
    .addAnimation("pj_01_jump", "assets/img/pjs/pj_01/jump-000", 2, 0.5, {loop: false})
    .addAnimation("pj_01_falling", "assets/img/pjs/pj_01/falling-000", 1, 1, {loop: false})
    .addAnimation("pj_01_action", "assets/img/pjs/pj_01/action-000", 4, 0.07)
    
    // slime
    .addAnimation("slime_quiet", "assets/img/ens/slime/quiet-000", 2, 0.07)
    .addAnimation("slime_jump", "assets/img/ens/slime/jump-000", 3, 0.3, {loop:false})
    .addAnimation("slime_falling", "assets/img/ens/slime/falling-000", 2, 0.3, {loop:false})
    
    
    // al terminar 
    .load( callback );
}