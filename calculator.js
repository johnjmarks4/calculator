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

keypad = document.querySelector('#keypad');
for (i=0; i < 9; i++) {
  div = document.createElement('div');
  div.setAttribute('class', 'calButtons');
  div.textContent = i;
  keypad.appendChild(div);
}

/*
container = document.querySelector('#container');
paragraph = document.createElement('p');
paragraph.textContent = operator('-', 1, 1);
container.appendChild(paragraph);
*/