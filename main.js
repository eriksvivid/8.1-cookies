

document.cookie="username=Cookie Monster";

var loggedIn = document.cookie;

console.log(loggedIn);

var cookies = loggedIn.split(';');
for(var i=0; i < cookies.length; i++){
  console.log(cookies[i]);
}

console.log()


localStorage.setItem('favorite-flavor', 'oreo');

console.log(localStorage.getItem('favorite-flavor', 'oreo'));

localStorage.setItem('least-favorite-flavor', 'chocolate chip');

console.log(localStorage.getItem('least-favorite-flavor', 'chocolate chip'));

var car = {};
  car.wheels = 4;
  car.doors = 2;
  car.sound = 'vroom';
  car.name = 'LIghning McQueen';
  console.log( car );

  localStorage.setItem('car', JSON.stringify(car));
  console.log(localStorage.getItem('car', JSON.stringify(car)));

  var myCar = JSON.parse(localStorage.getItem('car'));
  console.log();
