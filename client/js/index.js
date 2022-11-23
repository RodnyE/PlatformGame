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
  loader = loadResources( OnLoad );
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
  for (let item of platsList)
    world.createPlatform.apply(world, item);
  
  // jugador
  player = world.createPj("pj_01", 1.5);
  player.anchor.set(0.5);
  player.x = toPx(5);
  player.y = toPx(5) - player.xAnchorOffset;
  
  ticker.add( OnLoop ); // iniciar bucle
}