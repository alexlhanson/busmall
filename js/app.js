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
Product.lastRoundArray = [];

function Product(name, src){
  this.name = name;
  this.src = src;

  this.likes = 0;
  this.displayTimes = 0;

  Product.productArray.push(this);
};

/********************************************************************************
*         Product helper functions                                              *
********************************************************************************/

Product.renderThreeImages = function(){
  
  //find first random number and add to page
  do {
    var randomNumber1 = Product.randomNumber();
    console.log(Product.lastRoundArray.includes(randomNumber1));
  } while (Product.lastRoundArray.includes(randomNumber1));

  do {
    var randomNumber2 = Product.randomNumber();
    console.log(Product.lastRoundArray.includes(randomNumber2));
  } while (randomNumber2 === randomNumber1 || Product.lastRoundArray.includes(randomNumber2));
  
  do{
    var randomNumber3 = Product.randomNumber();
    console.log(Product.lastRoundArray.includes(randomNumber1));
  } while (randomNumber3 === randomNumber2 || randomNumber3 === randomNumber1 || Product.lastRoundArray.includes(randomNumber3));
  
  product1.src = Product.productArray[randomNumber1].src;
  product2.src = Product.productArray[randomNumber2].src;
  product3.src = Product.productArray[randomNumber3].src;

  Product.lastRoundArray = [randomNumber1, randomNumber2, randomNumber3];
  console.log(this.lastRoundArray);
};

//Create random number by Product array range
Product.randomNumber = function(){
  var randomNumber = Math.floor(Math.random() * this.productArray.length);
  return randomNumber;
};

/********************************************************************************
*         Event Listeners and Handlers                                          *
********************************************************************************/


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
// new Product('cthulhu', './images/products/cthulhu.jpg');
// new Product('dog-duck', './images/products/dog-duck.jpg');
// new Product('dragon', './images/products/dragon.jpg');
// new Product('pen', './images/products/pen.jpg');
// new Product('pet-sweep', './images/products/pet-sweep.jpg');
// new Product('scissors', './images/products/scissors.jpg');
// new Product('shark', './images/products/shark.jpg');
// new Product('sweep', './images/products/sweep.png');
// new Product('tauntaun', './images/products/tauntaun.jpg');
// new Product('unicorn', './images/products/unicorn.jpg');
// new Product('usb', './images/products/usb.gif');
// new Product('water-can', './images/products/water-can.jpg');
// new Product('wine-glass', './images/products/wine-glass.jpg');

Product.renderThreeImages();

