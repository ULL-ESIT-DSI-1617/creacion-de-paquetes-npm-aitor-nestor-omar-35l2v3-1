var Figura = require('../lib/shape.js')


describe("getArea",function()  {
  it("must compute the triangle area correctly", function() {
    let a = new Figura('Triangle', {width: 100, heigth: 100});
    var result = a.getArea();
    result.should.match(/^5000$/);
  })
});