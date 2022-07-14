# SEI-Tetris
A tetris game using javascript



General Assembly SEI Project 1: Tetris

Link: 


Overview and Concept:

A grid-based game using JavaScript, HTML and CSS based on the classic arcade game Tetris

Technologies used: 

HTML
● 
CSS
● 
JavaScript
● 




Daily Overview

Day 1:

Original wireframe
Found ome tetris reference photos from classic version
Researching how to use arrays for shapes and orientations of pieces
Starting to write out some ideas and pseudocode on how to approach the game

Defined MVP as:
shapes move down at an interval
user can rotate and move L and R
they stack on bottom of grid
randomly pick next piece
full row clears the row, other pieces move down
reaching top row ends game

Set goals for extras:
display next piece
pause button
high scores
fast drop
ghost piece to show where it will land
speed up 
rotate buttoms for clockwise and counterclockwise

Notes and Ideas from Day 1-
start button
pause button
score span
high score span
lines completed span
small grid to display next piece
grid for game

for each shape, an array of what boxes it occupies at starting position
an array for each rotation (3 more)
class for each shape with its color
 example for L:
[2, 0, 0],  
[2, 2, 2],  
[0, 0, 0];
Each array has to have a central point it can rotate around

Start position top middle
add class occupied to each box the shape takes up
when you hit rotate, classes are reassgined to boxes from the rotation array using the index number current position of the central axis cell
prevent rotation if shape is on the edge

set interval to move the shape + width down every interval

when reaches bottom line, interval stops. those cells keep class occupied
new piece starts at start position, new interval starts
when new piece reaches cell below it that already has class occupied, interval stops, shape stays there
if all cells in a row have class occupied, clear the class from all of them, 
move everything above that row down + width

when cells with occupied class are still at top row when interval stops because they reached a cell below that was occupied, game ends

random function to pick a new piece each time

