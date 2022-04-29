# Gomoku ReadMe

## [Gomoku](https://christy313.github.io/react-gomoku/)

A five in a row game with 19 x 19 board. Black plays first and then the white. The winner will be the first player to form an unbroken chain of five stones horizontally, vertically, or diagonally.

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

## Technologies

* React - Function Components + Hooks + Styled-component

* Prettier - Format code

* [gh-pages](https://www.npmjs.com/package/gh-pages) - Deployment

## The Difficulties I met

* Render a 19 x 19 board 

  * `Array(19).fill(Array(19).fill(null))` to render a board, I need to be familiar with the standard built-in objects in JavaScript, and `useState` for the board initialization.

  * Understand the structure, the smallest component is a square

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

* The decision of the game
  * Locate four directions from one spot to count the numbers of pieces

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

## [The process of how I made it](https://coding-ontheway.coderbridge.io/2022/03/25/gomoku-with-react-en/)

## [Let's play Gomoku](https://christy313.github.io/react-gomoku/)
