# SEI-Tetris
A tetris game using javascript



# General Assembly SEI Project 1: Tetris

* Link: 


# Overview and Concept:

A grid-based game using JavaScript, HTML and CSS based on the classic arcade game Tetris

# Technologies used: 

## HTML
● 
## CSS
● 
## JavaScript
● 




# Daily Overview

# Day 1 Thursday July 14:

### The project was introduced and I chose to do a tetris game. I brainstormed and wrote down some initial ideas of what the project goals and challenges will be. 

  * Rough wireframe
  * Found some tetris reference photos from classic version
  * Researching how to use arrays for shapes and orientations of pieces
  * Starting to write out some ideas and pseudocode on how to approach the game

* Defined MVP as:
shapes move down at an interval, user can rotate and move L and R, they stack on bottom of grid, randomly pick next piece, full row clears the row and other pieces move down, reaching top row ends game

* Set goals for extras:
display next piece, pause button, high scores with local storage, fast drop, ghost piece to show where it will land, speed up, rotate buttons for clockwise and counterclockwise

### Misc Notes and Ideas from Day 1-
* HTML:
start button, pause button, score span, high score span, lines completed span, small grid to display next piece, grid for game

* For each shape, an array of what boxes it occupies at starting position
an array for each rotation (3 more)
class for each shape with its color.Example for L:
`[2, 0, 0],  
[2, 2, 2],  
[0, 0, 0];` Each array has to have a central point it can rotate around

* Start position top middle
  * Add class occupied to each box the shape takes up
  * When you hit rotate, classes are reassgined to boxes from the rotation array using the index number current position of the central axis cell
  * Prevent rotation if shape is on the edge

* Set interval to move the shape + width down every interval

* When reaches bottom line, interval stops. Those cells keep class occupied. New piece starts at start position, new interval starts. When new piece reaches cell below it that already has class occupied, interval stops, shape stays there.

* If all cells in a row have class occupied, clear the class from all of them and move everything above that row down + width

* When cells with occupied class are still at top row when interval stops because they reached a cell below that was occupied, game ends

* Random function to pick a new piece each time

# Day 2 Friday July 15: Detailed Plan

### I took the rough ideas I had from Day One and polished them up and put together a detailed plan. Then, I started coding. I wrote code for HTML, basic CSS to display flex and adjust size, and wrote Javascript to generate divs that will be the game board.

## Tetris Plan

## Overview and Concept:
A grid-based game based on the class arcade game Tetris using JavaScript, HTML and CSS

## MVP
* Pieces move down at an interval
* User can rotate pieces
* User can move pieces L and R
* Pieces stack on bottom of grid
* Randomly selects next piece
* Full row clears the row, other pieces move down
* Filling to top row ends the game
* Score and line count go up with each cleared row
* Functional start, pause, resume, and quit buttons

## Extra Goals
* Display upcoming piece
* High scores with name and local storage
* User can drop pieces faster
* "Ghost" piece to show where it will land
* Interval of fall speeds up as rows are cleared
* Rotate buttons for clockwise and counterclockwise

## Wireframes
### Start 
![Start](Plan/Wireframes/start-wireframe.png)
  * disable pause button
  * empty inner score and linen count and next shape
  * clear next piece grid

### Play
![Play](Plan/Wireframes/play-wireframe.png)
  * disable start button

### Paused
![Pause](Plan/Wireframes/paused-wireframe.png)
  * disable start and pause

### End of Game
![End](Plan/Wireframes/end-wireframe.png)
  * hide start and pause buttons
  * add a play again button under final score
  * display if new high score in another span
  * Clear next piece grid

## HTML
* Buttons and scoreboards with spans
* Grid divs will be generated using Javascript

## CSS
* Classes for:
  * cells occupied by a piece (in play or out of play)
  * cells that are part of piece in-play
  * cells that are stacked and out-of-play
  * each type of piece for corresponding color


## Controls
* Left arrow for Left
* Right arrow for Right
* Q for rotate clockwise

  * Possibly W for rotate counter-clockwise
  * Possibly Down arrow to drop faster

* Start, pause, resume, and quit using on screen buttons

![Keyboard](Plan/Wireframes/keyboard-controls-wireframe.png)


## Grid
![Grid](Plan/Wireframes/tetris-board-wireframe.png)

## Pieces
* Arrays containing each piece and its rotations

* Example for "T" piece starting position array calculated using the top left corner as the reference position

### [position + 1,   position + width,   position + width + 1,   position + width + 2]

![T](Plan/Wireframes/t-start.png)


### Complete Diagram of Pieces and Rotations
![Pieces](Plan/Wireframes/pieces-wireframe.png)

## Random Piece Selection
* Object containing the arrays of the 7 possible pieces in their starting orientations
* Math.random to select a a piece

## Left and Right Movement
* Click events to add 1 or subtract 1 from the index numbers of cells occupied by the piece in-play

## Falling Movement
* Start pieces from starting reference position at index 3 and fill other cells relative to that one
* setInterval to add + width to the index numbers of cells occupied by the piece in-play

## Rotation Movement
* During game play, keep track of current reference position by adding interval and L and R movements to it
* On rotation, remove class from current in play cells and add to new cells using the rotation array values calculated from the current reference point
* Have an variable for how many rotations from start it has done to calculate which array version to use for the new cells. Number of rotations % 4 = 0 would bring back to the starting position

## Edge Behavior
* Don't allow rotations or left or right movements if doing so would require a cell at index % 10 = 0 to go left or a cell at index % 10 = 9 to go right
* Don't add/remove any classes and don't change the current reference position 

## Landing 
* Stop interval if the index of the next cell is betweeen 190 and 199 OR if index of would-be next cell already has classes occupied and out-of-play
* Clear interval, remove class in play from active piece and add class out of play

## Clearing a Row
* If all cells between index % 10 = 0 and index % 10 = 9 of the same row have class occupied, clear the row
* Remove classes occupied, in-play, and out-of-play from that row


## Moving Rows Following a Clear
* After a row is cleared, add + width to all the occupied cells with an index lower than the lowest index of that row

## Filling Highest Row (End Game)
* If a cell has class out-of-play AND index between 0 and 9, the game is over
* Stop interval
* Clear grid, removing all occupied classes and in-play or out-of-play
* Display game over div and final score

## Start Button
* Take input from name span
* Removes Tetris div and name div
* Selects random piece
* Adds class to cells to display piece
* Starts interval to fall

## Pause Button
* Stops interval
* Hides game grid
* Shows paused div, resume, and quit buttons

## Resume Button
* Hides paused div, resume, and quit buttons
* Starts fall interval

## Quit Button
* Clears grid, removing all occupied classes and in-play or out-of-play
* Reset score and line count
* Display start div and name input span

## Play Again Button
* Clear game over screen
* Back to start screen

## Name Input and High Score Local Storage
* On page load, get high score info and display in HTML
* On end of game and quit game, check if current score is > high score. Update high score with name and new score vlaue

# Day 3 Sunday July 17

* x Clean up CSS: group together repeating styles, use variables for colors and fonts to make them easier to change later

* x Write out variables in JS to target elements

* x Make arrays in JS for shapes and orientations of pieces

* x Pseudocode for necessary functions

* x Add data attribute for what row each grid div is in. 
When # of divs with same row # data AND class occupied reaches 10 the row should clear

# Day 4 Monday July 18

* x Write out click events for buttons and keyboard

### Order to code functions:
* x  Start button
* x  Random piece
* x  Move piece
* x  Fall interval
* x  Pause button
* x  Resume button
* x  Landing
* x  Left movement
* x  Right movement
* x  Down movement
* x  Quit game
* x  Edge check
* x  End game
*  checkRows (left off here)


# Day 5 Tuesday July 19

* x Check for full rows and clearing them
* x Change score and line count
* x High scores local storage

* x Rearrange arrays of piece into objects
  * At first, coded arrays to just make the shapes and filled in cells from top to bottom, elft to right. Had to go back in and write them again so that the each cell in the array mapped to the corresponding cell when the shape rotated 90 degress clockwise. 

* x Rotate:
  * x keep track of number of rotations
  * x select array of new rotation
  * x checkEdges

* x Fix bugs in row clearing
* x If clearing multiple rows, move cells above down the appropriate number of rows


# Day 6 Wednesday July 20

* x Fix bug filling top row where new shape overlaps with previous

* x Speed up fallInterval after clearing rows

* x Work on CSS styling, graphics

# Day 7 Thursday July 21

* x Finish up CSS

* x Favicon

* x Update HTML for 3 high scores

* x Change high score function to store name and score in value

* x Function to rotate counterclockwise

* x Small grid to the right to display the upcoming piece that is not yet in play

* x Fix edge behavior for rotations on right side for I, L, T, and S

* x Create info screen, info button, close button and edit functions to display and hide it

* x Write information screen

# Day 8 Friday July 22
* Bugs:
  * Trouble clearing non-consecutive rows
  * Sometimes game doesn't end on last row and generates a new piece before ending

### Extra Stuff (If Time Allows)
* Code to display next piece

* Ghost piece showing where current piece will land

* Hover effects for buttons?

* Sounds


### Project Deadline 3pm
