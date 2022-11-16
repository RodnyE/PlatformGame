/*
 * Extender PIXI.Loader
 */
 
Loader = PIXI.Loader;


// añadir animación
Loader.prototype.addAnimation = function (name, url, length, animationSpeed) {
  let resources = this.resources;
  let list = [];
  
  for (let i = 1; i <= length; i++) {
    let count = (i<10) ? ("0"+i) : (i);
    let textureName = name + "__" + count;
   
    this.add(textureName, url + count + ".png");
    list.push(resources[textureName]);
  }
  
  list.name = name;
  list.animationSpeed = animationSpeed;
  resources[name] = list;
}



// parsea todos los arrays de animaciones
Loader.prototype.end = function () {
  let resources = this.resources;
  
  for (let srcId in resources) {
    let resource = resources[srcId];
    
    // convertir arrays de texturas
    if (resource.animationSpeed)
      for (let i = 0; i < resource.length; ++i) {
        delete resources[resource[i].name];
        resource[i] = resource[i].texture;
      }
  }
}