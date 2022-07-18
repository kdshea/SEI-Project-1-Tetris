function init() {

  // ! Elements
  const grid = document.querySelector('.grid-container')

  // Left Elements
  const highScoreDisplay = document.querySelector('#high-scores')
  const currentScoreDisplay = document.querySelector('#current-score')
  const lineCount = document.querySelector('#line-count')
  
  //Start Screen Elements
  const startScreen = document.querySelector('.start-screen')

  const nameInput = document.querySelector('#name') // Needs to go inside start button function

  //Pause Screen Elements
  const pauseScreen = document.querySelector('.pause-screen')
  const resumeButton = document.querySelector('#resume')
  const quitButton = document.querySelector('#quit')

  //End Screen Elements
  const endScreen = document.querySelector('.end-screen')
  const finalScoreDisplay = document.querySelector('#final-score')

  //Right Elements
  // const next grid container?
  const startButton = document.querySelector('#start')
  const pauseButton = document.querySelector('#pause')

  // ! Variables
  const width = 10
  const height = 20
  const cellCount = width * height
  console.log('Cell count->', cellCount)
  const cells = []
  const startPosition = 3
  let currentPosition
  let currentPiece
  let color
  let position = startPosition
  let highScore 
  let rotations
  let name
  let interval
  let fallSpeed = 1000
  let score
  let lines



  // I Arrays
  const i1 = [position, position + 1, position + 2, position + 3]
  const i2 = [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1]
  const i3 = i1
  const i4 = i2

  // J Arrays
  const j1 = [position, position + width, position + width + 1, position + width + 2, position + width + 3]
  const j2 = [position + 1, position + 2, position + width + 1, position + width * 2 + 1, position + width * 3 + 1]
  const j3 =  [position, position + 1, position + 2, position + 3, position + width + 3]
  const j4 = [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3, position + width * 3 + 1]

  // L Arrays
  const l1 = [position + 3, position + width, position + width + 1, position + width + 2, position + width + 3]
  const l2 = [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1, position + width * 3 + 2]
  const l3 = [position, position + 1, position + 2, position + 3, position + width]
  const l4 = [position, position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1]

  // O Arrays
  const o1 = [position + 1, position + 2, position + width + 1, position + width + 2]
  const o2 = o1
  const o3 = o1
  const o4 = o1

  // S Arrays
  const s1 = [position + 1, position + 2, position + width, position + width + 1]
  const s2 = [position + 1, position + width + 1, position + width + 2, position + width * 2 + 2]
  const s3 = s1
  const s4 = s2

  // T Arrays
  const t1 = [position + 1,   position + width,   position + width + 1,   position + width + 2]
  const t2 = [position + 1, position + width + 1, position + width + 2, position + width * 2 + 1]
  const t3 = [position, position + 1, position + 2, position + width + 1]
  const t4 = [position + 1, position + width, position + width + 1, position + width * 2 + 1]

  // Z Arrays 
  const z1 = [position, position + 1, position + width + 1, position + width + 2]
  const z2 = [position + 2, position + width + 1, position + width + 2, position + width * 2 + 1]
  const z3 = z1
  const z4 = z2

  const startArrays = [i1, j1, l1, o1, s1, t1, z1]

  // ! Executions

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
    // takes the array of the piece and current position and adds classes to divs with correspnding index
    position = currentPosition
    const array = currentPiece
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
      cells[array[i]].classList.add('occupied', 'in-play', `${color}`)
    }
  }

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
    startScreen.classList.add('display-none')
    // display grid
    grid.classList.remove('display-none')
    // take name input and store in variable, clear input
    name = nameInput.value 
    console.log('name->', name)
    nameInput.value = ''
    // Enable pause button
    pauseButton.disabled = false
    // Disable start button
    startButton.disabled = true
    // pick random piece
    // display random piece at start position
    currentPosition = startPosition
    randomPiece()
    createPiece()
    // start interval: 
    interval = setInterval(fallInterval, fallSpeed)

  }

  function randomPiece () {
    // -> need an array of starting position arrays
    position = startPosition
    // Math random to pick number between 0 and 6
    const randomNum = Math.floor(Math.random() * 7)
    // Use this number to pick from starting position array
    currentPiece = startArrays[randomNum]
    console.log('current piece array->', currentPiece)
    // add color class
    switch (randomNum) {
      case 0:
        color = 'i'
        break
      case 1:
        color = 'j'
        break
      case 2: 
        color = 'l'
        break
      case 3:
        color = 'o'
        break
      case 4: 
        color = 's'
        break
      case 5:        
        color = 't'
        break
      case 6:
        color = 'z'
        break
    }
  }

  function pauseGame() {
    // stop interval
    clearInterval(interval)
    // hide grid
    grid.classList.add('display-none')
    // display pause screen
    pauseScreen.classList.remove('display-none')
    // disable start button
    startButton.disabled = true
    // disable pause button
    pauseButton.disabled = true
  }

  function resumeGame() {
    // hide pause screen
    pauseScreen.classList.add('display-none')
    // display grid
    grid.classList.remove('display-none')
    // enable pause button
    pauseButton.disabled = false
    // start fall interval
    interval = setInterval(fallInterval, fallSpeed)
  }

  function quitGame() {
    // hide grid
    grid.classList.add('display-none')
    // clear grid
    let array = cells
    for (let i = 0; i < array.length; i++) {
      array[i].classList.remove('in-play', 'out-of-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
    // hide pause screen
    pauseScreen.classList.add('display-none')
    // display start screen
    startScreen.classList.remove('display-none')
    //enable start button
    startButton.disabled = false
    // reset score and line count
    score = 0
    lines = 0
    // reset score and line count inner HTML
    currentScoreDisplay.innerHTML = `${score}`
    lineCount.innerHTML = `${lines}`

    // check new high score?
    // update high score inner HTML
  }

  function edgeCheck(move) {
  // need to run for each item in array of the shape
  // take arugments of movements (+1, -1, +width etcs)
  // if move returns an index outside of play, return false
  // if move returns index numbers that are already occupied, return false
    let validMove = true
    let array = currentPiece
    for (let i = 0; i < array.length; i++) {
      if (array[i] % width === 0 && move === -1) {
        validMove = false
        return validMove
      } else if (array[i] % width === width - 1 && move === 1) {
        validMove = false
        return validMove
      }
    }
    array = currentPiece.map(item => item + move)
    for (let i = 0; i <array.length; i++) {
      if (cells[array[i]].classList.contains('occupied') && cells[array[i]].classList.contains('out-of-play')) {
        validMove = false
        return validMove
      } 
    }
    return validMove
  }


  function rotate() {
  // click Q, check current rotation + 1 array through edgeCheck
  // if true, rotations + 1. update current rotation
  // movePiece with same starting position but new rotation array
  }

  function landingCheck() {
  // take arguments of position and array
  // only for + width movements?
    let landing
    const movedPiece = currentPiece.map(item => item + width)
    const array = movedPiece
    for (let i = 0; i < array.length; i++) {
      // if new index numbers calculated from new position are outside of board
      if (array[i] > cells.length - 1) {
        landing = true
        clearInterval(interval)
        return landing
      } else {
        landing = false
      }
      // or if new index numbers already have class occupied and out of play
      if (cells[array[i]].classList.contains('occupied') && cells[array[i]].classList.contains('out-of-play') ) {
        landing = true
        clearInterval(interval)
        return landing
      }
    }
    return landing
  }

  function landing() {
    // stop interval 
    clearInterval(interval)
    // remove class in play from current position and add out of play
    position = currentPosition
    let array = currentPiece
    for (let i = 0; i < array.length; i++) {
      cells[array[i]].classList.remove('in-play')
      cells[array[i]].classList.add('out-of-play')
    }
    // run checkRows
    checkRows()

    // pick random piece
    // reset current position to start position
    // display random piece at start position
    currentPosition = startPosition
    randomPiece()
    createPiece()
    // start interval: 
    interval = setInterval(fallInterval, fallSpeed)
  }

  function fallInterval() {
  // check landing
    landingCheck()
    if (landingCheck() === false) {
      movePiece(width)
    } else if (landingCheck() === true) {
      landing()
    }
  }

  function movePiece(move) {
  // argument is how mucn the currentPosition will move
  // remove classes occupied and in play
  // add occupied and in play to new position
  // need to move color class along also
    // if landing false, update new position and movePiece
    position = currentPosition
    let array = currentPiece
    // remove class occupied/ in play from current position
    for (let i = 0; i < array.length; i++) {
      cells[array[i]].classList.remove('occupied')
      cells[array[i]].classList.remove('in-play')
      cells[array[i]].classList.remove(`${color}`)
    }
    // change current position to + move
    currentPosition = currentPosition + move
    currentPiece = currentPiece.map(item => item + move)
    // add classes occupied and in play to new position
    // position = currentPosition
    array = currentPiece
    for (let i = 0; i < array.length; i++) {
      console.log(array[i])
      cells[array[i]].classList.add('occupied', 'in-play', `${color}`)
    }
  }

  function checkRows() {
  // if 10 cells have same row number && occupied && out of play

    // Make an object with keys 0 - 19 and values of 0
    const rowObj = {}
    for (let i = 0; i < 20; i++) {
      rowObj[i] = 0
    }
    console.log('object of rows->', rowObj)

    // Go through each grid cell, and if it is occupied and out of play, add its row number to an array rowCount
    const rowCount = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('occupied') && cells[i].classList.contains('out-of-play') ) {
        rowCount.push(parseInt(cells[i].dataset.row))
      } 
    }
    console.log('row count->', rowCount)

    // Go through rowCount array and add +1 to the object of rows each time a row appears in it

    //! STUCK HERE
    // code in this loop isn't executing
    for (let i = 0; i < rowCount; i++) {
      console.log('rowCount[i]', rowCount[0])
      console.log('rowObj[rowCount[i]]', rowObj[rowCount[i]])
      rowObj[rowCount[i]] = rowObj[rowCount[i]] + 1
    }

    console.log('new object of rows->', rowObj)
    // if a value in rowObj = 0, clear that row


    // console.log('row 19 node list->', row19)
    // const row19Array = [...row19]
    // console.log('row 19 array->', row19Array)
    // const occupiedCells = row19Array.filter(div => div.classList.contains('occupied'))
    // console.log('occupied cells->', occupiedCells)
  //  clear all 10 classes
  //  for all index nums lower than lowest in that row, add + width
  //  increase line count
  // if cell has class out of play and in row 0, game over
  //  stop interval
    // endGame()
  }

  function endGame() {
    // display game over screen
    endScreen.classList.remove('display-none')
    // hide grid
    grid.classList.add('display-none')
    // clear grid
    let array = cells
    for (let i = 0; i < array.length; i++) {
      array[i].classList.remove('in-play', 'out-of-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
  // check if score > high score
  // current score to inner HTML
  // if new high score, add to inner HTML and save new name and score pair
  }

  function handleMovement(event) {
    const keyCode = event.keyCode
    const left = 37
    const right = 39
    const down = 40
    const q = 81

    // Check the keyCode on the event and match with the direction
    if (left === keyCode) {
      console.log('CLICKED LEFT')
      if (edgeCheck(-1) === true) {
        movePiece(-1)
      }
    } else if (right === keyCode) {
      console.log('CLICKED RIGHT')
      if (edgeCheck(1) === true) {
        movePiece(1)
      }
    } else if (down === keyCode) {
      console.log('CLICKED DOWN')
      fallInterval()
    } else if (q === keyCode){
      console.log('CLICKED ROTATE')
      rotate()
    } else {
      console.log('INVALID KEY')
    }
  }




  //! Events
  createGrid()


  startButton.addEventListener('click', startGame)
  pauseButton.addEventListener('click', pauseGame)
  resumeButton.addEventListener('click', resumeGame)
  quitButton.addEventListener('click', quitGame)

  document.addEventListener('keydown', handleMovement)
}





window.addEventListener('DOMContentLoaded', init)
