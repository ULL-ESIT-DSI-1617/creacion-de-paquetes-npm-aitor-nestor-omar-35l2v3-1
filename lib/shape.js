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
