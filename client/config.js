
APP_NAME = "TerraPixel";
APP_VERSION = "0.0.1a";

resolution = 2;
forceCanvas = false;
UM_SPEED = 100;

canvasWidth = Math.max(innerWidth, innerHeight) * resolution;
canvasHeight = Math.min(innerWidth, innerHeight) * resolution;
canvasRatio = canvasHeight / canvasWidth;
tileSize = canvasHeight / 15;