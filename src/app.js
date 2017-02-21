import addModule from './add';
import multiplyModule from './multiply';
import './app.css';

/*LISTENERS*/
var multiplyKey = document.getElementById('multiplyKey');
multiplyKey.addEventListener('click', function () {
  var num1 = getNumber1();
  var num2 = getNumber2();
  setResult(multiplyModule(num1, num2));
});


var sumKey = document.getElementById('sumKey');
sumKey.addEventListener('click', function () {
  var num1 = getNumber1();
  var num2 = getNumber2();
  setResult(addModule(num1, num2));
});

var clearKey = document.getElementById('clearKey');
clearKey.addEventListener('click', function () {
  setResult('');
});

/*UTILITIES*/
function getNumber1() {
  return parseInt(document.getElementById('number1').value, 10);
}

function getNumber2() {
  return parseInt(document.getElementById('number2').value, 10);
}

function setResult(result) {
  var resultScreen = document.getElementById('mainScreen');
  resultScreen.innerText = result;
}

console.log('Multiply:', multiplyModule(3, 5));