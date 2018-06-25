'use strict';

Product.productArray = [];

function Product(name, src){
  this.name = name;
  this.src = src;

  this.likes = 0;
  this.displayTimes = 0;

  Product.productArray.push(this);
};

new Product('bag', './images/products/bag.jpg');