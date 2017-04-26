#!/usr/local/bin/node 

let Figura = require('../lib/shape')

try {
  let shape = process.argv[2];
  let options = process.argv[3];
  
  let modulo = require('@aitor-nestor-omar/ull-shape-' + shape.toLowerCase());
  let optionsJSON = JSON.parse(options);
  let t = new Figura(shape,optionsJSON)
  let s = t.getArea();
  
  console.log(t.getArea());
  
}
catch (e) {
  console.log(e.message)
}