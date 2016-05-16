var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

$('.cart-button').on('click', function(e){
  e.stopPropagation();
  window.location = 'cart.html';
});

var shirts = [];

$('.button1').on('click', function(e){
  e.preventDefault();
  var shirt = $('#tshirt1').html();
  var shirtQty = $('#quantity').val();
  var size = $('.select option:selected').html();
  var shirtSelection = {shirt: shirt, shirtQty: shirtQty, size: size};
  shirts.push(shirtSelection);
  localStorage.setItem('myShirt', JSON.stringify(shirtSelection));
  console.log(localStorage.getItem('myShirt'));
});


$('.button2').on('click', function(e){
  e.preventDefault();
  var shirt = $('#tshirt2').html();
  var shirtQty = $('#quantity2').val();
  var size = $('.select2 option:selected').html();
  var shirtSelection = {shirt: shirt, shirtQty: shirtQty, size: size};
  shirts.push(shirtSelection);
  localStorage.setItem('myShirt', JSON.stringify(shirtSelection));
  console.log(localStorage.getItem('myShirt'));
});


$('.button3').on('click', function(e){
  e.preventDefault();
  var shirt = $('#tshirt3').html();
  var shirtQty = $('#quanity3').val();
  var size = $('.select3 option:selected').html();
  var shirtSelection = {shirt: shirt, shirtQty: shirtQty, size: size};
  shirts.push(shirtSelection);
  localStorage.setItem('myShirt', JSON.stringify(shirtSelection));
  console.log(localStorage.getItem('myShirt'));
});
