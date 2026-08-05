// Define functions that perform basic arithmetic on the parameters
function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){
    const quotient = a / b
    if(b === 0){
        alert('Cannot divide by 0')
    }else{
        return quotient
    }
}

// Global variables that will be passed into operate() later
let numOne = ''
let numTwo = ''
let currentOperator = ''

// Operate function that calls a specific math function based on the
// parameters set by user's button input
function operate(num1,num2,operator){
    switch(operator){
        case '+': return add(num1,num2)
        case '-': return subtract(num1,num2)
        case '*': return multiply(num1,num2)
        case '/': return divide(num1,num2)
    }
}

// Global DOM variables
// Display container that contains all of buttons and answer screen
const display = document.querySelector('.display'); 

// Operator buttons (+, -, *, /)
const operationSymbols = document.querySelectorAll('.operators .math');

// Number buttons
const numbers = document.querySelectorAll('.nums button')

// Clear button
const clearBtn = document.querySelector('.clear-btn')

// Equal button
const equalBtn = document.querySelector('#equal')



for(const numBtn of numbers){
const btn = numBtn.addEventListener('click', () => {
// If operator is blank, update numOne variable
    if (currentOperator === '') {
    numOne += numBtn.textContent
    const numOneSpan = document.createElement('span');
    numOneSpan.textContent = numBtn.textContent
    display.appendChild(numOneSpan);
    }else{
    numTwo += numBtn.textContent
    const numTwoSpan = document.createElement('span')
    numTwoSpan.textContent = numBtn.textContent;
    display.appendChild(numTwoSpan);
    }});
}

// Loop through operator buttons
for (const btn of operationSymbols) {
// Make operator buttons responsive to a user click 
  btn.addEventListener('click', () => {
    if(btn.textContent !== '') {
      // resolve any pending operation first, so chaining (e.g. "12+7-")
      // doesn't just discard numTwo
      if (numOne !== '' && currentOperator !== '' && numTwo !== '') {
        numOne = operate(parseInt(numOne), parseInt(numTwo), currentOperator).toString();
        numTwo = '';
      }
    // Create and append span element to display when clicked
      currentOperator = btn.textContent;
      const displaySpan = document.createElement('span');
      displaySpan.textContent = btn.textContent;
      display.appendChild(displaySpan);
    }});
}

equalBtn.addEventListener('click', () => {
  if (numOne !== '' && currentOperator !== '' && numTwo !== '') {
    const result = operate(parseInt(numOne), parseInt(numTwo), currentOperator);
    numOne = result.toString();
    numTwo = '';
    currentOperator = '';

    display.textContent = '';
    const resultSpan = document.createElement('span');
    resultSpan.textContent = numOne;
    display.appendChild(resultSpan);
  }
});

clearBtn.addEventListener('click', () => {
  display.textContent = '';
  numOne = '';
  numTwo = '';
  currentOperator = '';
});






    

