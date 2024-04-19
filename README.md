## Tic Tac Toe game implementaion using Vanilla JS(TS)

### Rules
1. The game is played on a grid that's 3 squares by 3 squares.
2. You are X , your friend (or the computer in this case) is O . 
3. Players take turns putting their marks in empty squares.
4. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
5. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

### Iteration 1- UI layout
- In valilla JS how to i create the list of DOM nodes within a loop? Its not necessary to proceed becaus eI can hard code the 9 cells but good learning oppurtunity/
    - We can use template string or function and append them.
    - Decided to use creatElemnet method because it more efficient and flexible to control and manipulate the DOM for updates.
- Was able to build a helper function to createElement that can be reused.

__Comments__
- Usage of Document Frgament
- Using the helper function how to make the element accessible, like aria labels and tabIndex
    - Add it when dynamic rendering within the loop
- Adding event listener, since it is list use event propoagation and add listener to the parent div.
- How to add click event and keypress event listenr
    - Use array and loop through to add multiple listenrs

### Iteration 2 - Updating DOM and game state based on user actions
- Stuck with the state management concepts in JS
- Managed to do the state with global variables and update the UI in click handler. Need review/

