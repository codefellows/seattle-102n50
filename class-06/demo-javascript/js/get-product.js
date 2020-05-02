var response = prompt('Would you like a house or a hotel?');
var message;

if (response === 'house') {
  message = 'Houses are nice!';
} else if (response === 'hotel') {
  message = 'Hotels are FABULOUS!'
} else {
  message = 'fine, whateve!';
}

document.write('<h3>' + message + '</h3>');
