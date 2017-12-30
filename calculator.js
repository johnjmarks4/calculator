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

function calculate(ary) {
  var result;
  str = ary.join('');
  while (str.length > 0) {
    // Breaks down expressions with more than one operator
    if (result == undefined) {
      operand = str.substr(0, 3).split('');
      str = str.substr(3);
      result = operator(operand[1], parseInt(operand[0]), parseInt(operand[2]));
    } else {
      operand = str.substr(0, 2).split('');
      str = str.substr(2);
      result = operator(operand[0], result, parseInt(operand[1]));
    }
  }
  input = document.querySelector('input');
  input.setAttribute('value', result);
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

calButtons = document.querySelectorAll('.calButtons');
calButtons[calButtons.length - 1].setAttribute('id', 'equals');
calButtons[calButtons.length - 2].setAttribute('id', 'clear');

var displayNumber;
var expression = [];

buttons = document.querySelectorAll('.calButtons, .operation_buttons');
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (displayNumber != undefined) {
      expression.push(displayNumber);
    }
    if (button.id == "equals") {
      return calculate(expression);
    } else if (button.className == "operation_buttons") {
      displayNumber = button.textContent;
    } else if (button.id == "clear") {
      displayNumber = "";
      expression = [];
    } else {
      displayNumber = parseInt(button.textContent);
    }

    input = document.querySelector('input');
    input.setAttribute('value', displayNumber);

    console.log(expression);
  })
})