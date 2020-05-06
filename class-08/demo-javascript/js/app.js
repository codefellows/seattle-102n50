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

// gets product / item
function getProduct() {
  var response = prompt('Would you like a house or a hotel?');
  var item;
  //make sure they enter either house OR hotel -no exeptions  --use while loop
  while (response !== 'house' && response !== 'hotel') {
    response = prompt('PLEASE ANSWER EXACTLY!  Would you like a house or hotel?');
  }
  if (response === 'house') {
    item = '<img src ="images/house.png">';
  } else if (response === 'hotel') {
    item = '<img src ="images/hotel.png">';
  }

    //need to change return to just return the product / item
  return item;  
}

// get the number of items the user would like to order
function getCount(){
  // get a number form user - must be a number -no exception
  var count = prompt('Great, how many would you like?');

  while (isNaN(count) || count === '') {
    count = prompt('PLEASE ENTER A NUMBER, how many would you like to order!?');
  }

  return count;
}

function showOrder(){
  var result = '';
  var itemType = getProduct();
  // if this number is 2, I want to show my image 2 different times
  var total = getCount(); 
  //render the entire order dynamically  (show the number ordered)
  for (var i = 0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>'
  }

  return document.write(result);
}
// this is what's happening in show order for loop
// first pass
// result = '' + '<p>' + itemType + '</p>';
// now result = '<p>' + itemType + '</p>';
// second pass
// result = '<p>' + itemType + '</p>' + '<p>' + itemType + '</p>'





//////////////////////////////////////////////////////////////
// Class examples

var name = prompt('what\'s your name?');
var attemptsAllowed = 2; //allows 3 attempts
var attempted = 0;

while (name === '' && attempted !== attemptsAllowed) {
  name = prompt('what\'s your name darnit!?');
  attempted++;
}

var j = 0;
while (j < 9 ){
  console.log('j: ' + j); //print value of i
  j++;            //incrememnt i, add 1 to i each time.
}

for (var i = 0; i < 12; i++) {
  console.log('i: '+ i);
}