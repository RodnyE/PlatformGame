APP_NAME = "TerraPixel";
APP_VERSION = "0.0.1a";

resolution = 2;
forceCanvas = false;

virtualHeight = 200;
virtualWidth = Math.max(innerWidth, innerHeight) * (virtualHeight / Math.min(innerWidth, innerHeight));
canvasWidth = virtualWidth * resolution;
canvasHeight = virtualHeight * resolution;
canvasRatio = canvasHeight / canvasWidth;
tileSize = canvasHeight / 8;