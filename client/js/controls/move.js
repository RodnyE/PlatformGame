
function moveBack (pj) {
	pj.vx = -pj.speed;
}


function moveFront (pj) {
	pj.vx = pj.speed;
}

// saltar
function moveUp (pj) {
	pj.vy = -pj.jumpSpeed;
}


// buttons
function initMovementControls () {
  $btnFront = document.getElementById("move-front");
  $btnBack = document.getElementById("move-back");
  $btnUp = document.getElementById("move-up");
  
  
  // boton saltar
  $btnUp.addEventListener("touchstart", function(){
    if (!player.isJumping) {
      player.isJumping = true;
      moveUp(player);
    }
  });
  
  // boton avanzar
  $btnFront.addEventListener("touchstart", function(){
    player.isMoving = true;
    moveFront(player);
  });
  $btnFront.addEventListener("touchend", function(){
    player.isMoving = false;
  });
  
  // boton retroseder
  $btnBack.addEventListener("touchstart", function(){
    player.isMoving = true;
    moveBack(player);
  });
  $btnBack.addEventListener("touchend", function(){
    player.isMoving = false;
  });
}