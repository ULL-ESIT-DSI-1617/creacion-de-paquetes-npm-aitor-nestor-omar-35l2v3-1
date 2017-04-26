let Figura = require('../lib/shape.js')
let should = require('should')

describe("Shape",function()  {
  it("must not compute the shape area correctly", function() {
    let a = new Figura('Triangle', {width: 100, heigth: 100});
    let s = a.getArea();
    should(s).be.null;
  })
});
