function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operator(op, num1, num2) {
  switch(op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

calculator = document.querySelector('#calculator');
for (i=1; i < 10; i++) {
  div = document.createElement('div');
  div.setAttribute('class', 'calButtons');
  div.textContent = i;
  calculator.appendChild(div);
}

[9, 'C', '='].filter(function(sym) {
  div = document.createElement('div');
  div.setAttribute('class', 'calButtons');
  div.textContent = sym;
  calculator.appendChild(div);
})

var displayNumber;

buttons = document.querySelectorAll('.calButtons');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    displayNumber = parseInt(button.textContent);
    input = document.querySelector('input');
    input.setAttribute('value', displayNumber);
  })
})
/*
container = document.querySelector('#container');
paragraph = document.createElement('p');
paragraph.textContent = operator('-', 1, 1);
container.appendChild(paragraph);
*/