

// buttons
function initMovementControls () {
  $btnFront = document.getElementById("move-front");
  $btnBack = document.getElementById("move-back");
  $btnUp = document.getElementById("move-up");
  
  
  // boton saltar
  $btnUp.addEventListener("touchstart", function(){
    if (!player.isJumping) {
      player.isJumping = true;
      player.vy = - player.jumpSpeed;
      jumpAudio.play();
    }
  });
  
  // boton avanzar
  $btnFront.addEventListener("touchstart", function(){
    player.moving = player.speed;
  });
  $btnFront.addEventListener("touchend", function(){
    player.moving = 0;
  });
  
  // boton retroseder
  $btnBack.addEventListener("touchstart", function(){
    player.moving = - player.speed;
  });
  $btnBack.addEventListener("touchend", function(){
    player.moving = 0;
  });
}