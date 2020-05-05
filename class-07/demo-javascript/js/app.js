function offerGreeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  if (hourNow > 18) {
    greeting = 'Good Evening!';
  } else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good Morning!';
  } else {
    greeting = 'Welcome!';
  }
  return document.write('<h3>' + greeting + '</h3>');
}

function askName() {
  var userName = prompt('What is your name?');

  return document.write('<h3>Hello ' + userName + '!</h3>');
}

function getProduct() {
  var response = prompt('Would you like a house or a hotel?');
  var item;

  if (response === 'house') {
    item = '<img src ="images/house.png">';
  } else if (response === 'hotel') {
    item = '<img src ="images/hotel.png">';
  } else {
    item = 'fine, whateve!';
  }

  return document.write('<p>' + item + '</p>');
}

//////////////////////////////////////////////////////////////
// Class examples
function logger() {
  console.log('hello world');
}

logger();

function loggerWithName(name) {
  console.log('Hello ' + name + '!');
}

function loggerWithReturnName(name) {
  return 'Hello ' + name + '!';
}

//build a cake
function buildCake(cake, filling, frosting) {
  //I want a white cake with lemon filling and lavender frosting
  console.log('I want a ' + cake + ' cake with ' + filling + ' filling and ' + frosting + ' frosting');
}

var sayHello = function (name) {
  return 'Hello ' + name + '!'
}

var helloCookie = function (name) {
  console.log('Say Hello Cookie');
  var message = sayHello(name);
  return message;
}