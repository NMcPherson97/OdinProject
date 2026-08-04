// Define functions that perform basic arithmetic on the parameters
function add(a,b){return a+b}
function subtract(a,b){return a-b}
function multiply(a,b){return a*b}
function divide(a,b){
    const quotient = a / b
    if(b === 0){
        console.log('Cannot divide by 0')
    }else{
        return quotient
    }
}

// Global variables that will be passed into operate() later
let numOne = 0
let numTwo = 0
let currentOperator = null

// Operate function that calls a specific math function based on the
// parameters set by user's button input
function operate(num1,num2,operator){
    currentOperator = operator

    switch(currentOperator){
        case '+': return add(num1,num2)
        case '-': return subtract(num1,num2)
        case '*': return multiply(num1,num2)
        case '/': return divide(num1,num2)
    }
}

// Global DOM variables

// Display container that contains all of buttons and answer screen
const display = document.querySelector('.display'); 

// Operator buttons (+,-,*,/)
const operationSymbols = document.querySelectorAll('.operators button');

// Create and append clear button to div.nums 
const numbers = document.querySelector('.nums');
const clearBtn = document.createElement('button');
clearBtn.textContent = 'Clear';
clearBtn.setAttribute('class', 'clear-btn');
numbers.appendChild(clearBtn);

// Function that creates, displays, and appends number buttons 0-9 to div.nums
function generateNumbers() {
    // i === numbers 0-9
  for (let i = 0; i < 10; i++) {
    const numBtn = document.createElement('button');
    // Each number button's text is a number(0-9)
    numBtn.textContent = `${i}`;
    // append each button as a child to div.nums
    numbers.appendChild(numBtn);

    // Event listener that shows the number a user clicks in div.display
    numBtn.addEventListener('click', () => {
      const displaySpan = document.createElement('span');
      displaySpan.textContent = `${i}`;
      display.appendChild(displaySpan);
    
    // If operator is blank, update numOne variable
      if (currentOperator === '') {
        numOne = `${i}` 
      }else if(currentOperator !== '' && currentOperator !== '='){
    // If operator is not blank, update numTwo
        numTwo = `${i}`
      }
    });
  }
}
generateNumbers();

// Loop through operator buttons
for (const btn of operationSymbols) {
// Make each button responsive to a user click
  btn.addEventListener('click', () => {
    
    if (btn.textContent === '=') {
    
    if (numOne !== '' && currentOperator !== '' && numTwo !== ''){
        
        const n1 = parseInt(numOne);
        const n2 = parseInt(numTwo);
    
        const result = operate(n1, n2, currentOperator);
        
        display.textContent = ''; 
        const resultSpan = document.createElement('span');
        resultSpan.textContent = result.toString();
        display.appendChild(resultSpan);
        
        numOne = result.toString();
        numTwo = ''
        currentOperator = '';
      }
    }else{
      currentOperator = btn.textContent;
      const displaySpan = document.createElement('span');
      displaySpan.textContent = btn.textContent;
      display.appendChild(displaySpan);
    }
  });
}


clearBtn.addEventListener('click', () => {
  display.textContent = '';
//   numOne = '';
//   numTwo = '';
//   currentOperator = '';
});





    

