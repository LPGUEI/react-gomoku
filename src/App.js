import styled from "styled-components";
import Square from "./Components/Square";
import useBoard from "./useBoard.js";

const Container = styled.div`
  font-family: "open sans";
  font-weight: 300;
  min-width: 600px;
`;

const Info = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 36px;
`;

const Message = styled.div`
  font-size: 24px;
`;

const Button = styled.button`
  font-size: 18px;
  font-family: "open sans";
  cursor: pointer;
  margin: 20px auto;
  padding: 8px;
  border-color: silver;
  border-radius: 5px;
  background: silver;
  color: #555;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Board = styled.div`
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
`;

export default function App() {
  const { board, winner, handlePieceClick, playAgain } = useBoard();

  return (
    <Container>
      <Info>
        <Title>Gomoku</Title>
        {winner && <Message>The Winner is: {winner}!</Message>}
        <Button onClick={playAgain}>Play again</Button>
      </Info>
      <Wrapper>
        <Board>
          {board.map((row, rowIndex) => {
            return (
              <Row key={rowIndex}>
                {row.map((col, colIndex) => {
                  return (
                    <Square
                      key={colIndex}
                      value={board[rowIndex][colIndex]}
                      row={rowIndex}
                      col={colIndex}
                      onClick={handlePieceClick}
                    />
                  );
                })}
              </Row>
            );
          })}
        </Board>
      </Wrapper>
    </Container>
  );
}
