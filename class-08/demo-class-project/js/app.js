function addGreeting () {
  var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome!';
}
return document.write('<h3>'+ greeting + '</h3>');

}

function addName() {
  var userName = prompt('What is your name?');
  var message = 'Hello, ' + userName +'!';

  return document.write('<h3>' + message + '</h3>');
}

function howMany(){
  var count = prompt('How many do you want to order?');
  while(count === '' || isNaN(count)){
    count = prompt('Please enter a number.  How many do you want to order?');
  }
  return Number(count);
}

function getItem(){
  var order = '';
  var item;
  
  while (order !== 'pickles' && order !== 'beets') {
    order = prompt('Please enter "pickles" or "beets"...');
  }

  if (order === 'pickles'){
    item = '<img style="border:none;" src="images/pickle.png">';
  } else if (order === 'beets'){
    item = '<img style="border:none;" src="images/beet.png">';
  } 
  return item;
}

function showOrder(){
  var item = getItem();
  var total = howMany();
  var result = '';

  for(var i = 0; i < total; i++){
    var realCount = i + 1;
    result = result + '<p style="width: 150px; display: inline-block; border: 1px solid blue;">item #' + realCount + ' ' + item + '</p>'
  }
  return document.write(result);
}