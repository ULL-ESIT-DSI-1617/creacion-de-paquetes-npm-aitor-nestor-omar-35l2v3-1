let Shapes = {};
class Figura {

    constructor(shapes,options) {
        this.shapes = shapes;
        this.options = options
        console.log(this.shapes)
    }

    getArea() {
        let shape = new Shapes[this.shapes](this.options)
        let area = shape.getArea()
        return area;
    }

}

module.exports = Figura;

let a = new Figura('Triangle', {width: 100, heigth: 100});
var result = a.getArea();
console.log(result)