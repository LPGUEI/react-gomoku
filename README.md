## Gomoku

A five-in-a-row game with a 19 x 19 board. Black plays first, and then white. The winner will be the first player to form an unbroken chain of five stones horizontally, vertically, or diagonally.

- A React game with hooks

- Game logic to find the winner

- Challenge 1 - render the board with `Array(19).fill(Array(19).fill(null))`

  - The tiniest component is square -> row -> board

- Challenge 2 - Find the winner

  - Locate four directions from one spot to decide the winner

If you would like to know more, this is the article of how I made it: [Gomoku with React](https://coding-ontheway.coderbridge.io/2022/03/25/gomoku-with-react-en/)

![](https://imgur.com/f2WWFq6.gif)

## File structure

```
.
├── README.md
└── src
├── App.js
├── Components
│   └── Square.js
├── index.js
├── useBoard.js
└── utils.js
```

## Stack

- React / Hooks / Styled-component

## The Difficulties I met

- Render a 19 x 19 board

  - `Array(19).fill(Array(19).fill(null))` to render a board, and `useState` for the board initialization.

  - Understand the structure, and the tiniest component is a square

```js
// square → row → board

export default function App() {
  const [board, setBoard] = useState(Array(19).fill(Array(19).fill(null)));

  return (
    <div className="App">
      <Wrapper>
        <Board>
          {board.map((row) => {
            return (
              <Row>
                {row.map(() => {
                  return <Square />;
                })}
              </Row>
            );
          })}
        </Board>
      </Wrapper>
    </div>
  );
}
```

- Find the winner
  - Locate four directions from one spot to count the number of pieces

```js
function countTotal(board, currentY, currentX, directionY, directionX) {
  const now = board[currentY][currentX];
  let tempX = currentX;
  let tempY = currentY;
  let total = 0;

  do {
    tempX += directionX;
    tempY += directionY;

    if (tempY === -1 || tempY === 19 || tempX === -1 || tempX === 19) break;

    if (board[tempY][tempX] === now) {
      total++;
    } else {
      break;
    }
  } while (true);

  return total;
}
```
