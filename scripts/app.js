function init() {
  // ! Elements
  const grid = document.querySelector('.grid-container')

  // Left Elements
  const highScore1Display = document.querySelector('#high-score-1')
  const highScore2Display = document.querySelector('#high-score-2')
  const highScore3Display = document.querySelector('#high-score-3')
  const currentScoreDisplay = document.querySelector('#current-score')
  const lineCount = document.querySelector('#line-count')
  
  //Start Screen Elements
  const startScreen = document.querySelector('.start-screen')
  const nameInput = document.querySelector('#name') 

  //Info Screen Elements
  const infoScreen = document.querySelector('.info-screen')
  const closeButton = document.querySelector('#close-info')

  //Pause Screen Elements
  const pauseScreen = document.querySelector('.pause-screen')
  const resumeButton = document.querySelector('#resume')
  const quitButton = document.querySelector('#quit')

  //End Screen Elements
  const endScreen = document.querySelector('.end-screen')
  const finalScoreDisplay = document.querySelector('#final-score')
  const newHighScoreDisplay = document.querySelector('#new-high-score')
  const playAgainButton = document.querySelector('#play-again')

  //Right Elements
  const nextGrid = document.querySelector('.next-grid-container')
  const infoButton = document.querySelector('#info')
  const startButton = document.querySelector('#start')
  const pauseButton = document.querySelector('#pause')

  //Sound Elements
  const clearRowSound = document.querySelector('#clear-row-sound')
  const gameOverSound = document.querySelector('#game-over-sound')

  // ! Variables
  const width = 10
  const height = 20
  const cellCount = width * height
  const cells = []
  const nextCells = []
  const startPosition = 3
  let currentPosition
  let currentPiece
  let nextPiece
  let nextGridPiece
  let currentArrayObject
  let nextArrayObject
  let color
  let nextColor
  let position = startPosition
  let highScore1
  let nameScore1 = ''
  let name1 = ''
  let highScore2
  let nameScore2 = ''
  let name2 = ''
  let highScore3
  let nameScore3 = ''
  let name3 = ''
  let direction
  let rotations = 0
  let rotatedPiece = []
  let name
  let interval
  let dropping = true
  let fallSpeed = 1000
  let score = 0
  let lines = 0
  let rowsToClear = []

  // I Arrays
  const iArrays = {
    1: [position, position + 1, position + 2, position + 3],
    2: [position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1],
    3: [position + 3, position + 2, position + 1, position],
    4: [position + width * 3 + 1, position + width * 2 + 1, position + width + 1, position + 1],
  }

  // J Arrays
  const jArrays = {
    1: [position, position + width, position + width + 1, position + width + 2, position + width + 3],
    2: [position + 1, position, position + width, position + width * 2, position + width * 3],
    3: [position + width + 3, position + 3, position + 2, position + 1, position],
    4: [position + width * 3, position + width * 3 + 1, position + width * 2 + 1, position + width + 1, position + 1],
  }

  // L Arrays
  const lArrays = {
    1: [position + 3, position + width + 3, position + width + 2, position + width + 1, position + width],
    2: [position + width * 3 + 1, position + width * 3, position + width * 2, position + width, position],
    3: [position + width, position, position + 1, position + 2, position + 3],
    4: [position, position + 1, position + width + 1, position + width * 2 + 1, position + width * 3 + 1],
  }

  // O Arrays
  const oArrays = {
    1: [position, position + 1, position + width, position + width + 1],
    2: [position, position + 1, position + width, position + width + 1],
    3: [position, position + 1, position + width, position + width + 1],
    4: [position, position + 1, position + width, position + width + 1],
  }

  // S Arrays
  const sArrays = {
    1: [position + 2, position + 1, position + width + 1, position + width],
    2: [position + width * 2 + 1, position + width + 1, position + width, position],
    3: [position + width, position + width + 1, position + 1, position + 2],
    4: [position, position + width, position + width + 1, position + width * 2 + 1],
  }

  // T Arrays
  const tArrays = {
    1: [position + 1,   position + width,   position + width + 1,   position + width + 2],
    2: [position + width + 1, position, position + width, position + width * 2],
    3: [position + width + 1, position + 2, position + 1, position],
    4: [position + width, position + width * 2 + 1, position + width + 1, position + 1],
  }


  // Z Arrays 
  const zArrays = {
    1: [position, position + 1, position + width + 1, position + width + 2],
    2: [position + 1, position + width + 1, position + width, position + width * 2],
    3: [position + width + 2, position + width + 1, position + 1, position],
    4: [position + width * 2, position + width, position + width + 1, position + 1],
  }

  const startArrays = [iArrays['1'], jArrays['1'], lArrays['1'], oArrays['1'], sArrays['1'], tArrays['1'], zArrays['1']]

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
      cell.dataset.row = rowNum
      // Add class grid-cell for styling
      cell.classList.add('grid-cell')
      // Add the cell element into the cells array
      cells.push(cell)
      // Take the grid element and append the cell
      grid.appendChild(cell)
    }
    for (let i = 0; i < 8; i++){
      // This will loop through a set number of times based on the cellCount
      // Every loop we are goimg to create a new div element and append it to the grid element above
      const cell = document.createElement('div')
      // Add innerText to the cell for development purposes - this will allow us to see the index of each cell
      // cell.innerText = i
      // For when we remove the index from the innerText, we will add the index to a data attribute on the element
      cell.dataset.index = i  
      // Add row number between 0 and 19 to dataset 
      // const nextRowNum = (i - (i % 4)) / 4
      // // console.log('row number ->', rowNum)
      // cell.dataset.row = nextRowNum
      // Add class grid-cell for styling
      cell.classList.add('next-grid-cell')
      // Add the cell element into the cells array
      nextCells.push(cell)
      // Take the grid element and append the cell
      nextGrid.appendChild(cell)
    }
  }

  function createPiece() {
    // takes the array of the piece and current position and adds classes to divs with correspnding index
    currentPosition = startPosition
    // or if new index numbers already have class occupied and out of play
    for (let i = 0; i < currentPiece.length; i++) {
      if (cells[currentPiece[i]].classList.contains('occupied') && cells[currentPiece[i]].classList.contains('out-of-play') ) {
        clearInterval(interval)
        endGame()
        return
      } else {
        for (let i = 0; i < currentPiece.length; i++) {
          cells[currentPiece[i]].classList.add('occupied', 'in-play', `${color}`)
        }
      }
    }
    for (let i = 0; i < nextCells.length; i++) {
      nextCells[i].classList.remove('in-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
    for (let i = 0; i < nextPiece.length; i++) {
      nextCells[nextPiece[i]].classList.add('occupied', 'in-play', `${nextColor}`)
    }
      
  }

  function getHighScores() {
    const getHighScore1 = localStorage.getItem('highScore1') || ''
    nameScore1 = getHighScore1.split(' ') || ''
    highScore1 = parseInt(nameScore1.pop()) || 0
    name1 = nameScore1.join(' ') || ''
    const getHighScore2 = localStorage.getItem('highScore2') || ''
    nameScore2 = getHighScore2.split(' ') || ''
    highScore2 = parseInt(nameScore2.pop()) || 0
    name2 = nameScore2.join(' ') || ''
    const getHighScore3 = localStorage.getItem('highScore3') || ''
    nameScore3 = getHighScore3.split(' ') || ''
    highScore3 = parseInt(nameScore3.pop()) || 0
    name3 = nameScore3.join(' ') || ''

    highScore1Display.innerHTML = `${name1}<br>${highScore1}`
    highScore2Display.innerHTML = `${name2}<br>${highScore2}`
    highScore3Display.innerHTML = `${name3}<br>${highScore3}`
  }

  function getInfo() {
    // hide start screen
    startScreen.classList.add('display-none')
    //disable Start button
    startButton.disabled = true
    startButton.classList.add('disabled')
    // display info screen
    infoScreen.classList.remove('display-none')    
  }

  function closeInfo() {
    // hide info screen
    infoScreen.classList.add('display-none')
    //display start screen
    startScreen.classList.remove('display-none')
    // Enable start butto
    startButton.disabled = false
    startButton.classList.remove('disabled')
    
  }

  function startGame() {
    // hide start screen
    startScreen.classList.add('display-none')
    // display grid
    grid.classList.remove('display-none')
    // take name input and store in variable, clear input
    name = nameInput.value 
    nameInput.value = ''
    // Enable pause button
    pauseButton.disabled = false
    pauseButton.classList.remove('disabled')
    // Disable start button
    startButton.disabled = true
    startButton.classList.add('disabled')
    // Disable info button
    infoButton.disabled = true
    infoButton.classList.add('disabled')
    // pick random piece
    // display random piece at start position
    currentPosition = startPosition
    randomPiece()
    createPiece()
    // start interval: 
    interval = setInterval(fallInterval, fallSpeed)

  }

  function randomPiece () {
    if (Boolean(nextArrayObject) === false) {
      // -> need an array of starting position arrays
      position = startPosition
      // Math random to pick number between 0 and 6
      const randomNum = Math.floor(Math.random() * 7)
      // Use this number to pick from starting position array
      currentPiece = startArrays[randomNum]
      // add color class and current array object
      switch (randomNum) {
        case 0:
          color = 'i'
          currentArrayObject = iArrays
          break
        case 1:
          color = 'j'
          currentArrayObject = jArrays
          break
        case 2: 
          color = 'l'
          currentArrayObject = lArrays
          break
        case 3:
          color = 'o'
          currentArrayObject = oArrays
          break
        case 4: 
          color = 's'
          currentArrayObject = sArrays
          break
        case 5:        
          color = 't'
          currentArrayObject = tArrays
          break
        case 6:
          color = 'z'
          currentArrayObject = zArrays
          break
      }
      randomNextPiece()
    } else {
      currentArrayObject = nextArrayObject
      currentPiece = nextGridPiece
      color = nextColor
      randomNextPiece()
    }
  }
  function randomNextPiece () {
    // -> need an array of starting position arrays
    position = startPosition
    // Math random to pick number between 0 and 6
    const randomNum = Math.floor(Math.random() * 7)
    // Use this number to pick from starting position array
    nextGridPiece = startArrays[randomNum]
    // add color class and current array object
    switch (randomNum) {
      case 0:
        nextColor = 'i'
        nextPiece = [0, 1, 2, 3]
        nextArrayObject = iArrays
        break
      case 1:
        nextColor = 'j'
        nextPiece = [0, 4, 5, 6, 7]
        nextArrayObject = jArrays
        break
      case 2: 
        nextColor = 'l'
        nextPiece = [3, 7, 6, 5, 4]
        nextArrayObject = lArrays
        break
      case 3:
        nextColor = 'o'
        nextPiece = [1, 2, 5, 6]
        nextArrayObject = oArrays
        break
      case 4: 
        nextColor = 's'
        nextPiece = [3, 2, 6, 5]
        nextArrayObject = sArrays
        break
      case 5:        
        nextColor = 't'
        nextPiece = [2, 5, 6, 7]
        nextArrayObject = tArrays
        break
      case 6:
        nextColor = 'z'
        nextPiece = [0, 1, 5, 6]
        nextArrayObject = zArrays
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
    startButton.classList.add('disabled')
    // disable pause button
    pauseButton.disabled = true
    pauseButton.classList.add('disabled')
  }

  function resumeGame() {
    // hide pause screen
    pauseScreen.classList.add('display-none')
    // display grid
    grid.classList.remove('display-none')
    // enable pause button
    pauseButton.disabled = false
    pauseButton.classList.remove('disabled')
    // start fall interval
    interval = setInterval(fallInterval, fallSpeed)
  }

  function quitGame() {
    // hide grid
    grid.classList.add('display-none')
    // clear grid
    for (let i = 0; i < cells.length; i++) {
      cells[i].classList.remove('in-play', 'out-of-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
    // clear next grid and variables
    for (let i = 0; i < nextCells.length; i++) {
      nextCells[i].classList.remove('in-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
    nextArrayObject = {}
    nextPiece = []
    // hide pause screen
    pauseScreen.classList.add('display-none')
    // display start screen
    startScreen.classList.remove('display-none')
    //enable start button
    startButton.disabled = false
    startButton.classList.remove('disabled')
    // enable info button
    infoButton.disabled = false
    infoButton.classList.remove('disabled')
    // reset score and line count
    score = 0
    lines = 0
    // reset score and line count inner HTML
    currentScoreDisplay.innerHTML = `${score}`
    lineCount.innerHTML = `${lines}`
    // check new high score?
    // update high score inner HTML
  }

  function edgeCheck(move, array) {
  // need to run for each item in array of the shape
  // take arugments of movements (+1, -1, +width etcs)
  // if move returns an index outside of play, return false
  // if move returns index numbers that are already occupied, return false
    let validMove = true
    for (let i = 0; i < array.length; i++) {
      if (array[i] % width === 0 && move === -1) {
        validMove = false
        return validMove
      } else if (array[i] % width === width - 1 && move === 1) {
        validMove = false
        return validMove
      }
    }
    array = array.map(item => item + move)
    for (let i = 0; i < array.length; i++) {
      if (cells[array[i]].classList.contains('occupied') && cells[array[i]].classList.contains('out-of-play')) {
        validMove = false
        return validMove
      } 
    }
    return validMove
  }

  function generateRotatedPiece() {
  // click Q, check current rotation + 1 array through rotatedEdgeCheck
  // if rotation is a valid move, rotate()

    // Find orientation based on number of rotations from starting orientation
    let orientation
    if (direction === 'clockwise') {
      orientation = Math.abs((rotations + 1) % 4)
    } else if (direction === 'counter-clockwise') {
      orientation = Math.abs((rotations - 1) % 4)
    }
    switch (orientation) {
      case 0:
        rotatedPiece = Object.values(currentArrayObject)[0]
        break
      case 1:
        rotatedPiece = Object.values(currentArrayObject)[1]
        break
      case 2: 
        rotatedPiece = Object.values(currentArrayObject)[2]
        break
      case 3:
        rotatedPiece = Object.values(currentArrayObject)[3]
        break     
    }
    // Move rotate array to current position
    rotatedPiece = rotatedPiece.map(item => (item + currentPosition - startPosition))
    if (rotateEdgeCheck() === true) {
      rotate()
    }
  }

  function rotateEdgeCheck() {
    // Check if currentPiece is at edge, and if rotatedPiece will go over the edge
    let validMove = true
    for (let i = 0; i < currentPiece.length; i++) {
      if (currentPiece[i] % width === 0 && (rotatedPiece[i] % width === width - 1 || rotatedPiece[i] % width === width - 2)) {
        validMove = false
        return validMove
      } else if ((currentPiece[i] % width >= width - 3)  && (rotatedPiece[i] % width === 0 || rotatedPiece[i] % width === 1)) {
        validMove = false
        return validMove
      }
    }
    for (let i = 0; i < rotatedPiece.length; i++) {
      if (cells[rotatedPiece[i]].classList.contains('occupied') && cells[rotatedPiece[i]].classList.contains('out-of-play')) {
        validMove = false
        return validMove
      } 
    }
    return validMove
  }

  function rotate() {
    // if true, rotations + 1. update current rotation
    rotations += 1
    // same starting position but new rotation array
    // remove classes occupied and in play, add occupied and in play to new position
    // need to move color class along also
    position = currentPosition
    let array = currentPiece
    // remove class occupied/ in play from current position
    for (let i = 0; i < array.length; i++) {
      cells[array[i]].classList.remove('occupied', 'in-play', `${color}`)
    }
    // add classes occupied and in play to new position
    currentPiece = rotatedPiece
    array = currentPiece
    for (let i = 0; i < array.length; i++) {
      cells[array[i]].classList.add('occupied', 'in-play', `${color}`)
    }
  }

  function landingCheck() {
    let landing
    const movedPiece = currentPiece.map(item => item + width)
    for (let i = 0; i < movedPiece.length; i++) {
      // if new index numbers calculated from new position are outside of board
      if (movedPiece[i] > cells.length - 1) {
        landing = true
        clearInterval(interval)
        return landing
      } else {
        landing = false
      }
      // or if new index numbers already have class occupied and out of play
      if (cells[movedPiece[i]].classList.contains('occupied') && cells[movedPiece[i]].classList.contains('out-of-play') ) {
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
    for (let i = 0; i < currentPiece.length; i++) {
      cells[currentPiece[i]].classList.remove('in-play')
      cells[currentPiece[i]].classList.add('out-of-play')
      // if cell has class out of play and in row 0, game over
    }
    // run checkRows
    checkRows()
    // After landing and clearing rows, if cells hav class out of play and row 0, game over
    for ( let i = 0; i < cells.length; i++) {
      if (cells[[i]].classList.contains('out-of-play') && parseInt(cells[[i]].dataset.row) === 0) {
        endGame()
        return
      }
    }
    // pick random piece
    // reset current position to start position
    // display random piece at start position
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
      dropping = false
    }
  }
  
  function hardDrop() {
    while (dropping === true) {
      clearInterval(interval)
      fallInterval()
    }
    dropping = true
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
      cells[array[i]].classList.remove('occupied', 'in-play', `${color}`)
    }
    // change current position to + move
    currentPosition += move
    currentPiece = currentPiece.map(item => item + move)
    // add classes occupied and in play to new position
    // position = currentPosition
    array = currentPiece
    for (let i = 0; i < array.length; i++) {
      cells[array[i]].classList.add('occupied', 'in-play', `${color}`)
    }
  }

  function checkRows() {
    // Make an object with keys 0 - 19 and values of 0
    let rowObj = {}
    for (let i = 0; i < 20; i++) {
      rowObj[i] = 0
    }
    // Go through each grid cell, and if it is occupied and out of play, add its row number to an array rowCount
    let rowCount = []
    for (let i = 0; i < cells.length; i++) {
      if (cells[i].classList.contains('occupied') && cells[i].classList.contains('out-of-play') ) {
        rowCount.push(parseInt(cells[i].dataset.row))
      } 
    }
    // Go through rowCount array and add +1 to the object of rows each time a row appears in it
    for (let i = 0; i < rowCount.length; i++) {
      rowObj[rowCount[i]] += 1
    }

    // if a value in rowObj = 10, add that key to array of rows to be cleared
    const keys = Object.keys(rowObj)
    keys.forEach((key) => {
      if (rowObj[key] > 9) {
        rowsToClear.push(parseInt(key))
      }
    })
    clearRow()
    rowObj = {}
    rowCount = []
  }

  function clearRow() {
    let lowestIndex 
    // Starting at highest row number to be cleared and moving down
    // So lowest index will be start of smallest row number cleared
    // Update line count and score for every row cleared
    if (rowsToClear.length > 0) {
    // Update fallSpeed
      fallSpeed -= 50
    }
    // for each row that needs to be cleared
    for (let i = 0; i < rowsToClear.length ; i++) {
      lowestIndex = rowsToClear[i] * 10
      // Update lines and score
      lines = lines + 1
      lineCount.innerHTML = lines
      score = score + 100
      currentScoreDisplay.innerHTML = score
      // Play sound
      clearRowSound.pause()
      clearRowSound.currentTime = 0
      clearRowSound.play()
      // for all cells that have the current row in their data, remove classes to clear
      const currentRow = rowsToClear[i]
      for (let cell = 0; cell < cells.length; cell++) {
        if (parseInt(cells[cell].dataset.row) === currentRow) {
          cells[cell].classList.remove('in-play', 'out-of-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
        }
      }
      for (let index = lowestIndex; index >= 0 ; index--) {
        if (cells[index].classList.contains('occupied') && cells[index].classList.contains('out-of-play') ) {
          // For cells with index lower than the cleared line, if they are occupied and out of play, get the class list
          // Use shift to remove 'grid-cell' from the class list
          // Remove the classes, shift the cell down 1 width, and add the classes back
          const classList = cells[index].classList
          const classListArray = Object.values(classList)
          classListArray.shift()
          cells[index].classList.remove(classListArray[0], classListArray[1], classListArray[2])
          cells[index + width].classList.add(classListArray[0], classListArray[1], classListArray[2])
        }
      }
    }
  
    // Clear the rows being cleared and the lowest index
    // Clear the rowObj 
    lowestIndex = 
    rowsToClear = []
  }

  function endGame() {
    // stop interval
    clearInterval(interval)
    // display game over screen
    endScreen.classList.remove('display-none')
    // Play game over sound
    gameOverSound.pause()
    gameOverSound.currentTime = 0
    gameOverSound.play()
    // disable pause button
    pauseButton.disabled = true
    pauseButton.classList.add('disabled')
    // hide grid
    grid.classList.add('display-none')
    // clear grid
    for (let i = 0; i < cells.length; i++) {
      cells[i].classList.remove('in-play', 'out-of-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
    // clear next grid and variables
    for (let i = 0; i < nextCells.length; i++) {
      nextCells[i].classList.remove('in-play', 'occupied', 'i', 'j', 'l', 'o', 's', 't', 'z')
    }
    nextArrayObject = {}
    nextPiece = []

    finalScoreDisplay.innerHTML = `${parseInt(score)}`
    if (score > highScore3 && score <= highScore2) {
      localStorage.setItem('highScore3', `${name} ${score}`)
      getHighScores()
      newHighScoreDisplay.innerHTML = 'New<br>High Score!'
    } else if (score > highScore2 && score <= highScore1) {
      localStorage.setItem('highScore2', `${name} ${score}`)
      localStorage.setItem('highScore3', `${name2} ${highScore2}`)
      getHighScores()
      newHighScoreDisplay.innerHTML = 'New<br>High Score!'
    } else if (score > highScore1) {
      localStorage.setItem('highScore1', `${name} ${score}`)
      localStorage.setItem('highScore2', `${name1} ${highScore1}`)
      localStorage.setItem('highScore3', `${name2} ${highScore2}`)
      getHighScores()
      newHighScoreDisplay.innerHTML = 'New<br>High Score!'
    }
  }

  function playAgain() {
    // hide game over screen
    endScreen.classList.add('display-none')
    // reset scores
    lines = 0
    lineCount.innerHTML = lines
    score = 0
    currentScoreDisplay.innerHTML = score
    newHighScoreDisplay.innerHTML = ''
    // reset fallSpeed
    fallSpeed = 1000
    // display start screen
    startScreen.classList.remove('display-none')
    // Disable pause button
    pauseButton.disabled = true
    pauseButton.classList.add('disabled')
    // Enable start button
    startButton.disabled = false
    startButton.classList.remove('disabled')
    // enable info button
    infoButton.disabled = false
    infoButton.classList.remove('disabled')
  }

  function handleMovement(event) {
    const keyCode = event.keyCode
    const enter = 13
    const space = 32
    const left = 37
    const right = 39
    const down = 40
    const q = 81
    const w = 87
    // Check the keyCode on the event and match with the direction
    if (left === keyCode) {
      if (edgeCheck(-1, currentPiece) === true) {
        movePiece(-1)
      }
    } else if (right === keyCode) {
      if (edgeCheck(1, currentPiece) === true) {
        movePiece(1)
      }
    } else if (down === keyCode) {
      fallInterval()
    } else if (q === keyCode){
      direction = 'counter-clockwise'
      generateRotatedPiece()
    } else if (w === keyCode) {
      direction = 'clockwise'
      generateRotatedPiece()
    } else if (enter === keyCode && startButton.disabled === false) {
      startGame()
    } else if (space === keyCode && startButton.disabled === true) {
      hardDrop()
    }
  }


  //! Events
  getHighScores()
  createGrid()

  infoButton.addEventListener('click', getInfo)
  closeButton.addEventListener('click', closeInfo)
  startButton.addEventListener('click', startGame)
  pauseButton.addEventListener('click', pauseGame)
  resumeButton.addEventListener('click', resumeGame)
  quitButton.addEventListener('click', quitGame)
  playAgainButton.addEventListener('click', playAgain)

  document.addEventListener('keydown', handleMovement)
}





window.addEventListener('DOMContentLoaded', init)
