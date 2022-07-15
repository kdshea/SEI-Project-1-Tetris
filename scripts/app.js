function init() {

  // First thing we need to do is create the grid
  // We need to target the grid container
  // Inside the grid container we'll add all of our divs

  // ! Elements
  const grid = document.querySelector('.grid-container')
  
  // ! Variables
  const width = 10
  const height = 20
  const cellCount = width * height
  console.log('Cell count->', cellCount)
  const cells = []

  
  // ! Executions
  // ? Grid creation function
  // This function finds the cellCount and makes a new element on every loop, attaching it to the grid container 
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      // This will loop through a set number of times based on the cellCount
      // Every loop we are goimg to create a new div element and append it to the grid element above
      const cell = document.createElement('div')
      // Add innerText to the cell for development purposes - this will allow us to see the index of each cell
      cell.innerText = i
      // For when we remove the index from the innerText, we will add the index to a data attribute on the element
      cell.dataset.index = i
      // Add class grid-cell for styling
      cell.classList.add('grid-cell')
      // Add the cell element into the cells array
      cells.push(cell)
      // Take the grid element and append the cell
      grid.appendChild(cell)
    }
  }
  createGrid()
}

window.addEventListener('DOMContentLoaded', init)
