'use strict'


/**
* Creación de paquetes npm - Figura
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1-square
*
*
* Equipo: aitor-nestor-omar
*
* Creación de un paquete npm con el código de la clase "Figura" para el cálculo de área.
*
* Clase madre de las distintas figuras geométricas y provee el método para hallar las áreas
*/


const Shapes = {};

class Figura {

/**
* @param shapes con la figura geometrica y options un objeto con las dimensiones
*/
    constructor(shapes,options) {
        this.shapes = shapes;
        this.options = options;
    }
    
    
/**
* La función getArea calcula el área de las figuras geometricas
* @return {number} retorna el área de la figura
*/

    getArea() {
      
        try {
          
            let shape = new Shapes[this.shapes](this.options);
            return shape.getArea();
        }
        
      catch(e) {
        console.error(`Figura geometrica: '${this.shapes}', no es valida `);
        return null;
      }
    }
    
    static get Shapes() {
    return Shapes;
  }

}

module.exports = Figura; 
