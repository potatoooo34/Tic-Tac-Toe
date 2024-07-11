# Tic-Tac-Toe Game

## Overview

This is a simple implementation of the classic Tic-Tac-Toe game using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. If all nine squares are filled and neither player has three in a row, the game is declared a draw.

## Features

- Two-player game: Players take turns to place 'X' or 'O' on the grid.
- Detects win patterns and declares the winner.
- Detects draw conditions and declares the game as a draw.
- Reset button to restart the current game.
- New Game button to start a fresh game.

## Files

- `index.html`: Contains the HTML structure for the game.
- `styles.css`: Contains the CSS styles for the game.
- `script.js`: Contains the JavaScript logic for the game.

## JavaScript Functions

### Variables

- `boxes`: A NodeList of all the game boxes (grid cells).
- `resetBtn`: The Reset button element.
- `newGameBtn`: The New Game button element.
- `msgContainer`: The message container element.
- `msg`: The message element.
- `turnO`: A boolean indicating if it's O's turn.
- `count`: A counter to keep track of the number of moves.
- `winPatterns`: An array of arrays representing the winning patterns.

### Functions

- `resetGame()`: Resets the game state.
- `startGame()`: Starts a new game.
- `enableBtns()`: Enables all the game boxes.
- `disableBtns()`: Disables all the game boxes.
- `showWinner(winner)`: Displays the winner message and disables the game boxes.
- `showDraw()`: Displays the draw message and disables the game boxes.
- `checkWinner()`: Checks for a winner or a draw condition after each move.

### Event Listeners

- Adds a click event listener to each game box to handle the player's move.
- Adds click event listeners to the Reset and New Game buttons to handle game resets and new game starts.

## License

This project is licensed under the MIT License.

---
