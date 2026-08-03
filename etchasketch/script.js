// Select the HTML elements by class('container') and id('new-grid' & 'btn')
// Each element will have its state altered by the logic written in later blocks
const containerDiv = document.querySelector('.container')
const newGridBtn = document.querySelector('#new-grid')
const eraseBtn = document.querySelector('#erase')

// Declare function that creates a grid of squares based on 
// the user input(size) parameter
function generateGrid(size){
    //Height and width of grid declared by product of parameter(number of squares)
    const totalSquares = size * size
    // Size of each square declared by quotient 100/parameter
    const percentageSize = 100/size

    // Loop the number of squares to add child nodes(div) to container 
    for(let i = 0; i < totalSquares; i++){
    const squareDiv = document.createElement('div')
    // Give each child div class="square"
    squareDiv.setAttribute('class','square')
    // Style each child to fit the page based on afformentioned size
    squareDiv.style.flex = `0 0 ${percentageSize}%`;
    squareDiv.style.height = `${percentageSize}%`;
    // Append each newly declared and styled <div class="square"> to <div class="container">
    containerDiv.appendChild(squareDiv)
    // If mouse hovers over the square, its color changes to black
    squareDiv.addEventListener('mouseover', () => 
        {squareDiv.style.backgroundColor = 'black'})
    }
    // Erase button listener (Sits OUTSIDE the loops)
    eraseBtn.addEventListener('click', () => {
    // Select ALL squares currently on the page and make them white
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
})
}
// New Grid button listener (Sits OUTSIDE, calls generateGrid)
newGridBtn.addEventListener('click', () => {
    let userEntry = prompt('How many squares per side would you like for the new grid? (Max 100):');
    
    // Convert input to a number
    const gridSize = parseInt(userEntry);

    // Validate the input
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return; // Stop the function early if they typed something wrong
    }
    // Call the function with the user's new number!
    generateGrid(gridSize);
});

// Initial startup: Create the default 16x16 grid
generateGrid(16);