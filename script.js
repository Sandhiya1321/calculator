let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
  currentNumber += number;
  display.value = currentNumber;
}

function appendDecimal() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    display.value = currentNumber;
  }
}

function setOperation(operator) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    calculate();
  }
  operation = operator;
  previousNumber = currentNumber;
  currentNumber = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    case '%':
      result = prev % current;
      break;
    default:
      return;
  }
  currentNumber = result;
  operation = undefined;
  previousNumber = '';
  display.value = result;
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operation = null;
  display.value = '';
}

function backspace() {
  currentNumber = currentNumber.slice(0, -1);
  display.value = currentNumber;
}


