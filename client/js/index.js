let gravity = 0.98;
let friction = 0.1;
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

  btnStart = document.getElementById("btn-start");
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
    tH: px2tl(canvasHeight) + 2,
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
  
  // cargar recursos
  loader = loadResources(OnLoad);
}


// evento al cargar texturas
function OnLoad () {
  loader.end();
  /*for (let txId in resources) 
    if (txId.indexOf("gd") == 0) {
      let baseTexture = resources[txId].texture.baseTexture;
      baseTexture.width = tl2px(1);
      baseTexture.height = tl2px(1);
  }*/

  // controles
  initMovementControls();

  bg1 = world.createBg("bg1", 1);
  bg2 = world.createBg("bg2", 1);
  bg3 = world.createBg("bg3", 1);
  bg4 = world.createBg("bg4", 1);
  scene.addChild(layer1);
  fg1 = world.createBg("fg1", 1.5);
  fg1.tileHeight = world.height * fg1.relativeScaleY;

  scene.addChild(fpsText);


  let tilesHeight = px2tl(world.height);

  // LISTA DE PLATAFORMAS
  let platsList = [
    //[tx, ty, tw, th]
    [0, -3 + tilesHeight, px2tl(world.width), 3],
    [20, -5 + tilesHeight, 3, 2],
   // [60, -5 + tilesHeight, 30, 5],
   // [95, -7 + tilesHeight, 30, 5],
  ];



  // generar plataformas a partir de la lista
  for (let item of platsList)
    world.createPlatform.apply(world, item);

  // jugador
  player = world.createPj("pj_01", 0.8);
  player.x = tl2px(5);
  player.y = tl2px(5) - player.xAnchorOffset;

  // enemigos
  world.createEnemy("slime", 1).x = tl2px(10);
  world.createEnemy("slime", 0.7).x = tl2px(50);
  world.createEnemy("slime", 1.2).x = tl2px(100);

  ticker.add(OnLoop); // añadir bucle
  ticker.stop();
  
  btnStart.innerText = "START";
  btnStart.addEventListener("click", OnClickStart);
}


// evento
function OnClickStart () {
  document.getElementById("main-screen").style.display = "none";
  bgAudio.play();
  ticker.start();
}