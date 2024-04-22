"use client";
import { useState, useEffect, useRef } from "react";
import ticTacToe from "../tictactoe/TicTacToe";

export default function TictactoeContent() {
  const [ticTacToeMatrix, setTicTacToeMatrix] = useState<number>(3);

  const matrixChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTicTacToeMatrix(Number(e.target.value));
  };
  const resetButtonHandler = () => {
    setTicTacToeMatrix(0);
    console.log("Reset Button Pressed");
  };

  return (
    <div className="h-full w-full">
      <div className="h-1/5 w-full bg-red-100 flex justify-evenly items-center">
        <div className=" grid gap-6 grid-cols-2 justify-center items-center flex">
          Size of TicTacToe Table
          <input
            type="number"
            placeholder="Matrix"
            defaultValue={3}
            min={3}
            max={10}
            onChange={matrixChangeHandler}
          ></input>
        </div>
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
