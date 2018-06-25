'use strict';

/********************************************************************************
*         Global variables                                                      *
********************************************************************************/
var product1 = document.getElementById('product1');
var product2 = document.getElementById('product2');
var product3 = document.getElementById('product3');

/********************************************************************************
*         Product Constructor                                                   *
********************************************************************************/
Product.productArray = [];

function Product(name, src){
  this.name = name;
  this.src = src;

  this.likes = 0;
  this.displayTimes = 0;

  Product.productArray.push(this);
};

/********************************************************************************
*         Add instances and call functions for running                          *
********************************************************************************/
//Add Product instances
new Product('bag', './images/products/bag.jpg');
new Product('banana', './images/products/banana.jpg');
new Product('bathroom', './images/products/bathroom.jpg');
new Product('boots', './images/products/boots.jpg');
new Product('breakfast', './images/products/breakfast.jpg');
new Product('bubblegum', './images/products/bubblegum.jpg');
new Product('chair', './images/products/chair.jpg');
new Product('cthulhu', './images/products/cthulhu.jpg');
new Product('dog-duck', './images/products/dog-duck.jpg');
new Product('dragon', './images/products/dragon.jpg');
new Product('pen', './images/products/pen.jpg');
new Product('pet-sweep', './images/products/pet-sweep.jpg');
new Product('scissors', './images/products/scissors.jpg');
new Product('shark', './images/products/shark.jpg');
new Product('sweep', './images/products/sweep.jpg');
new Product('tauntaun', './images/products/tauntaun.jpg');
new Product('unicorn', './images/products/unicorn.jpg');
new Product('usb', './images/products/usb.gif');
new Product('water-can', './images/products/water-can.jpg');
new Product('wine-glass', './images/products/wine-glass.jpg');


