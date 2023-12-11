"use client";
import { useState, useEffect, useRef } from "react";
import tableClickHandler from "../tictactoe/tableClickHandler";
import ticTacToe from "../tictactoe/TicTacToe";

export default function TictactoeContent() {
  const [numberOfWinCondition, setNumberOfWinCondition] = useState<number>(3);
  const [ticTacToeMatrix, setTicTacToeMatrix] = useState<number>(3);

  const testing = useRef<HTMLInputElement>(null);

  const matrixChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicTacToeMatrix(Number(e.target.value));
  };
  const winConditionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfWinCondition(Number(e.target.value));
  };
  const resetButtonHandler = () => {
    if (testing.current !== null) {
      console.log(testing.current.value + " Ref Click");
      testing.current.value = "5";
    }
    console.log("Reset Button Pressed");
  };

  return (
    <div className="h-full w-full">
      <div className="h-1/5 w-full bg-red-100 flex justify-evenly items-center">
        <input
          type="number"
          placeholder="Matrix"
          defaultValue={3}
          min={3}
          max={10}
          ref={testing}
          onChange={matrixChangeHandler}
        ></input>
        <input
          type="number"
          placeholder="Win Condition"
          defaultValue={3}
          min={3}
          max={10}
          onChange={winConditionChangeHandler}
        ></input>
        <div
          className="h-2/5 w-1/6 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded border border-black flex justify-center items-center select-none"
          onClick={resetButtonHandler}
        >
          Reset
        </div>
      </div>
      <div className="h-4/5 w-full bg-blue-100 flex justify-center items-center">
        <div>{ticTacToe(ticTacToeMatrix)}</div>
      </div>
    </div>
  );
}

// function setTicTacToeTable(matrixTable: import("react").JSX.Element[]) {
//   throw new Error("Function not implemented.");
// }
// 0 1 2
// 3 4 5
// 6 7 8

// Wining Condition

// Horizontal
// 0 1 2
// 3 4 5
// 6 7 8
// Vertical
// 0 3 6
// 1 4 7
// 2 5 8
// Diagonal
// 0 4 8
// 2 4 6

// 0 1 2
// 3 4 5
// 6 7 8

// Mod Everything By 3 =
// 0 1 2
// 0 1 2
// 0 1 2
// Check (0 1 2)

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
// Mod Everything By 4 =
// 0 1 2 3
// 0 1 2 3
// 0 1 2 3
// 0 1 2 3

// 0 1 2 0
// 1 2 0 1
// 2 0 1 2
// 0 1 2 0

// const matrixChangeHandler = (setState: Dispatch<SetStateAction<JSX.Element[] | undefined>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
//   let matrixTable = [];
//   let rowNum = []
//   for(
//     let rowIndex = 0;
//     rowIndex < Number(e.target.value);
//     rowIndex++
//   ) {
//     rowNum.push(<div key={rowIndex} className="bg-slate-300 h-10 w-10 border-black border">

//     </div>)
//   }
//   for (
//     let matrixIndex = 0;
//     matrixIndex < Number(e.target.value);
//     matrixIndex++
//   ) {
//     matrixTable.push(<div className="flex" key={matrixIndex}>{rowNum}</div>);
//   }
//   setTicTacToeTable(matrixTable);
// };
