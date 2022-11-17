let gravity = 0.98;
let friction = 0.08;
let density = 3;


// evento principal
function OnStart () {
	
	// inicializar pixi
  PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  pixi = new PIXI.Application({
  	width: canvasWidth,
  	height: canvasHeight,
  	backgroundColor: 0x00ccff,
  	forceCanvas: forceCanvas
  });
  
  
  scene = pixi.stage;
  renderer = pixi.renderer;
  ticker = pixi.ticker;
  loader = PIXI.Loader.shared;
  resources = PIXI.Loader.shared.resources;
  
  view = renderer.view;
  view.id = "canvas";
  document.getElementById("pixi-container").appendChild(view);
  
  layer1 = new Container();
  fpsText = new PIXI.Text("");
  
  // mundo
  world = new World({
    scene: layer1,
  	tW: 300,
  	tH: toTile(canvasWidth),
  });
  
  
  // cámara
  camera = new Camera(layer1, {
    w: world.width,
    h: world.height
  });
  
  
  // música de entorno
  bgAudio = new Audio("assets/snd/bg.mp3");
  jumpAudio = new Audio("assets/snd/jump.mp3");
  
  bgAudio.volume = 0.2;
  bgAudio.onended = bgAudio.play.bind(bgAudio);
  addEventListener("touchstart", bgAudio.onended)
  
  
  // cargar recursos
  loader.add("box", "assets/img/box.png");
  loader.add("bg1", "assets/img/bg/bg1n.png");
  loader.add("bg2", "assets/img/bg/bg2n.png");
  loader.add("bg3", "assets/img/bg/bg3n.png");
  loader.add("fg1", "assets/img/bg/fg1n.png");
  loader.addAnimation("pj_01_mov", "assets/img/pjs/pj_01/mov-000", 4, 0.2);
  loader.addAnimation("pj_01_quiet", "assets/img/pjs/pj_01/quiet-000", 4, 0.07);
  loader.addAnimation("pj_01_jump", "assets/img/pjs/pj_01/jump-000", 4, 0.07);
  loader.addAnimation("pj_01_action", "assets/img/pjs/pj_01/action-000", 4, 0.07);
  
  loader.load( OnLoad );
}


// evento al cargar texturas
function OnLoad () {
  loader.end();
  
  // controles
  initMovementControls();
  
  bg1 = world.createBg("bg1", 1);
  bg2 = world.createBg("bg2", 1);
  bg3 = world.createBg("bg3", 1);
  scene.addChild(layer1);
  fg1 = world.createBg("fg1", 1.5);
  fg1.tileHeight = world.height * fg1.relativeScaleY;
  
  scene.addChild(fpsText);
  
  
  let tilesHeight = toTile(world.height);
  
  // LISTA DE PLATAFORMAS
  let platsList = [
  //[tx, ty, tw, th]
    [0, -3 + tilesHeight, toTile(world.width), 3],
    [0, -5 + tilesHeight, 50, 5],
    [60, -5 + tilesHeight, 30, 5],
    [95, -7 + tilesHeight, 30, 5],
  ];
  
  
  // generar plataformas a partir de la lista
  for (let item of platsList) {
    world.createPlatform({
      tX: item[0],
      tY: item[1],
      tW: item[2],
      tH: item[3],
    });
  }
  
  // jugador
  player = world.createPj({
    texture: "pj_01"
  });
  player.anchor.set(0.5);
  player.width = toPx(2);
  player.w = player.width;
  player.height = toPx(3);
  player.x = toPx(5);
  player.y = toPx(5) - player.xAnchorOffset;
  
  ticker.add( OnLoop ); // iniciar bucle
}