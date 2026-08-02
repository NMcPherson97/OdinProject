const containerDiv = document.querySelector('.container')
const newGridBtn = document.querySelector('#new-grid')
const eraseBtn = document.querySelector('#erase')

function generateGrid(size){
    containerDiv.innerHTML = ''

    const totalSquares = size * size
    const percentageSize = 100/size

    for(let i = 0; i < totalSquares; i++){
    const squareDiv = document.createElement('div')
    squareDiv.setAttribute('class','square')

    squareDiv.style.flex = `0 0 ${percentageSize}%`;
    squareDiv.style.height = `${percentageSize}%`;

    containerDiv.appendChild(squareDiv)
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