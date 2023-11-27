"use client";
import { useState, useEffect } from "react";

export default function TictactoeContent() {
  const [numberOfWinCondition, setNumberOfWinCondition] = useState<number>(3);
  const [ticTacToeTable, setTicTacToeTable] = useState<JSX.Element[]>();

  const matrixChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let matrixTable = [];
    let rowNum = []
    for(
      let rowIndex = 0;
      rowIndex < Number(e.target.value);
      rowIndex++
    ) {
      // console.log("row index "+rowIndex)
      rowNum.push(<div key={rowIndex} className="bg-slate-300 h-10 w-10 border-black border">
        
      </div>)
    }
    for (
      let matrixIndex = 0;
      matrixIndex < Number(e.target.value);
      matrixIndex++
    ) {
      // console.log("matrix index "+matrixIndex)
      matrixTable.push(<div className="flex" key={matrixIndex}>{rowNum}</div>);
    }
    setTicTacToeTable(matrixTable);
  };
  const winConditionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNumberOfWinCondition(Number(e.target.value));
  };
  const resetButtonHandler = () => {
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
          onChange={matrixChangeHandler}
        ></input>
        <input
          type="number"
          placeholder="Win Condition"
          defaultValue={3}
          min={3}
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
        <div>
            {ticTacToeTable}
        </div>
      </div>
    </div>
  );
}


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


