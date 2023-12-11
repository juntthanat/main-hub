import { useState } from "react";

const initTicTacToeState = (TICTACTOE_SIZE: number) =>
  Array.from({ length: TICTACTOE_SIZE }, () =>
    Array.from({ length: TICTACTOE_SIZE }, () => 0)
  );

export default function TicTacToe(TICTACTOE_SIZE: number) {
  const [ticTacToeState, setTicTacToeState] = useState(
    initTicTacToeState(TICTACTOE_SIZE)
  );
  const [player, setPlayer] = useState<"player1" | "player2">("player1");

  if (TICTACTOE_SIZE !== ticTacToeState.length) {
    setTicTacToeState(initTicTacToeState(TICTACTOE_SIZE));
  }

  const ticTacToeOnClickHandler = (row: number, col: number) => {
    setTicTacToeState((prev) => {
      const previousTicTacToeState = [...prev];
      console.log(previousTicTacToeState)

      if (previousTicTacToeState[row][col] === 0) {
        if (player === "player1") {
          previousTicTacToeState[row][col] = 1;
          setPlayer("player2");
        } else if (player === "player2") {
          previousTicTacToeState[row][col] = 2;
          setPlayer("player1");
        }
      }
      return previousTicTacToeState;
    });
  };

  return (
    <div>
      {ticTacToeState.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="flex">
            {row.map((col, colIndex) => {
              return (
                <div
                  key={colIndex}
                  className="w-[30px] h-[30px] flex justify-center items-center border border-black cursor-pointer"
                  onClick={() => {
                    ticTacToeOnClickHandler(rowIndex, colIndex);
                  }}
                >
                  {col === 1 ? "O" : col === 2 ? "X" : ""}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
