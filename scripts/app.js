function init() {

  // ! Elements
  const grid = document.querySelector('.grid-container')
  console.log('grid->', grid)

  // Left Elements
  const highScoreDisplay = document.querySelector('#high-scores')
  console.log('high score->', highScoreDisplay)
  const currentScoreDisplay = document.querySelector('#current-score')
  console.log('score->', currentScoreDisplay)
  const lineCount = document.querySelector('#line-count')
  console.log('line->', lineCount)
  
  //Start Elements
  const startScreen = document.querySelector('.start-screen')
  console.log('start screen->', startScreen)

  const name = document.querySelector('#name').value; // Needs to go inside start button function
  console.log('name input->', name) 

  //Pause Elements
  const pauseScreen = document.querySelector('.pause-screen')
  console.log('pause screen->', pauseScreen)
  const resumeButton = document.querySelector('#resume')
  console.log('resume->', resumeButton)
  const quitButton = document.querySelector('#quit')
  console.log('quit->', quitButton)

  //End Elements
  const endScreen = document.querySelector('.end-screen')
  console.log('end screen->', endScreen)
  const finalScoreDisplay = document.querySelector('#final-score')
  console.log('final score->', finalScoreDisplay)

  // const next grid container?
  const startButton = document.querySelector('#start')
  console.log('start->', startButton)
  const pauseButton = document.querySelector('#pause')
  console.log('pause->', pauseButton)


  // ! Variables
  const width = 10
  const height = 20
  const cellCount = width * height
  console.log('Cell count->', cellCount)
  const cells = []
  const startPosition = 3
  let highScore 
  let rotations

  // I Arrays
  // const i1 = [position, position + 1, position + 2, position + 3]
  // const i2 = [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1]
  // const i3 = i1
  // const i4 = i2

  // J Arrays
  // const j1 = [position, position + width, position + width + 1, position + width + 2, position + width + 3]
  // const j2 = [position + 1, position + 2, position + width + 1, position + width * 2 + 1, position + width * 3 + 1]
  // const j3 =  [position, position + 1, position + 2, position + 3, position + width + 3]
  // const j4 = [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3, position + width * 3 + 1]

  // L Arrays
  // const l1 = [position + 3, position + width, position + width + 1, position + width + 2, position + width + 3]
  // const l2 = [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1, position + width * 3 + 2]
  // const l3 = [position, position + 1, position + 2, position + 3, position + width]
  // const l4 = [position, position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1]

  // O Arrays
  // const o1 = [position + 1, position + 2, position + width + 1, position + width + 2]
  // const o2 = o1
  // comst o3 = o1
  // const o4 = o1

  // T Arrays
  // const t1 = [position + 1,   position + width,   position + width + 1,   position + width + 2]
  // const t2 = [position + 1, position + width + 1, position + width + 2, position + width * 2 + 1]
  // const t3 = [position, position + 1, position + 2, position + width + 1]
  // const t4 = [position + 1, position + width, position + width + 1, position + width * 2 + 1]

  // S Arrays
  // const s1 = [position + 1, position + 2, position + width, position + width + 1]
  // const s2 = [position + 1, position + width + 1, position + width + 2, position + width * 2 + 2]
  // const s3 = s1
  // const s4 = s2

  // Z Arrays 
  // const z1 = [position, position + 1, position + width + 1, position + width + 2]
  // const z2 = [position + 2, position + width + 1, position + width + 2, position + width * 2 + 1]
  // const z3 = z1
  // const z4 = z2

  
  // ! Executions
  // ? Grid creation function
  // This function finds the cellCount and makes a new element on every loop, attaching it to the grid container 
  function createGrid(){
    for (let i = 0; i < cellCount; i++){
      // This will loop through a set number of times based on the cellCount
      // Every loop we are goimg to create a new div element and append it to the grid element above
      const cell = document.createElement('div')
      // Add innerText to the cell for development purposes - this will allow us to see the index of each cell
      // cell.innerText = i
      // For when we remove the index from the innerText, we will add the index to a data attribute on the element
      cell.dataset.index = i  
      // Add row number between 0 and 19 to dataset 
      const rowNum = (i - (i % 10)) / 10
      // console.log('row number ->', rowNum)
      cell.dataset.row = rowNum
      // Add class grid-cell for styling
      cell.classList.add('grid-cell')
      // Add the cell element into the cells array
      cells.push(cell)
      // Take the grid element and append the cell
      grid.appendChild(cell)
    }
  }

  function createPiece() {
    const position = startPosition
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
      cells[array[i]].classList.add('occupied')
      cells[array[i]].classList.add('i')
    }
  }

  createGrid()
  createPiece()

  function getHighScores() {
  // Code from whack-a-mole:
  //   highScore = parseInt(localStorage.getItem('highScore')) || 0;
  //   console.log('highScore->', highScore)
  //   high.innerHTML = `${highScore}`
  // }
  // adjust to get more than one name and high score key - value pair
  // do this on page load, quit game, and end of game 
  }

  function startGame() {
    // hide start screen
    // display grid
    // take name input and store in variable

    // Enable pause button
    // Disable start button

    // pick random piece
    // display random piece at start position

    // start interval: 

  }

  function randomPiece () {
    // -> need an array of starting position arrays
    // Math random to pick number between 0 and 6
    // Use this number to pick from starting position array
    // add color class
  }

  function pauseGame() {
    // stop interval
    // hide grid
    // display pause screen
    // disable start button
    // disable pause button
  }

  function resumeGame() {
    // hide pause screen
    // display grid
    // enable pause button
    // start fall interval
  }

  function quitGame() {
    // hide grid
    // clear grid
    // display start screen
    // reset score and line count
    // reset score and line count inner HTML
    // check new high score?
    // update high score inner HTML
  }

  function edgeCheck() {
  // need to run for each item in array of the shape
  // take arugments of movements (+1, -1, +width etcs)
  // if move returns an index outside of play, return false
  // if move returns index numbers that are already occupied, return false
  }

  function left() {
  // click left, move current position - 1
  // check edge behavior (true or false)
  // if true, update current position and movePiece
  }

  function right() {
  // click right, move current position + 1
  // check edge behavior (true or false)
  // if true, update current position and movePiece
  }

  function rotate() {
  // click Q, check current rotation + 1 array through edgeCheck
  // if true, rotations + 1. update current rotation
  // movePiece with same starting position but new rotation array
  }

  function landing() {
  // take arguments of position and array
  // only for + width movements?
  // if new index numbers calculated from new position are in row 19
  // or if new index numbers already have class occupied and out of play
  // return landing true
    // remove in play class and add out of play class
    // stop interval 
    // run checkRows
    // reset current position to start position
    // randomePiece
    // start new fall interval
  }

  function fallInterval() {
  // every set amount of time, take current position and add + width
  // check landing
  // if landing false, update new position and movePiece
    // remove class occupied/ in play from current position
    // change current position to + width
    // add classes occupied and in play to new position
  }

  function movePiece() {
  //take position as an argument and shape array
  // remove classes occupied and in play
  // add occupied and in play to new position
  // need to move color class along also
  }

  function checkRows() {
  // if 10 cells have same row number && occupied && out of play
  //  clear all 10 classes
  //  for all index nums lower than lowest in that row, add + width
  //  increase line count
  // if cell has class out of play and in row 0, game over
  //  stop interval
  //  hide grid
  // clear grid
  // endGame
  }

  function endGame() {
  // display game over screen
  // check if score > high score
  // current score to inner HTML
  // if new high score, add to inner HTML and save new name and score pair
  }

}





window.addEventListener('DOMContentLoaded', init)
