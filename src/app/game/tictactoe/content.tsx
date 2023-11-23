"use client";
import { useState, useEffect } from "react";

export default function TictactoeContent() {
  const [numberOfColumn, setNumberOfColumn] = useState<number>();
  const [numberOfRow, setNumberOfRow] = useState<number>();
  const [numberOfWinCondition, setNumberOfWinCondition] = useState<number>();

  const columnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfColumn(Number(e.target.value));
  };
  const rowChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfRow(Number(e.target.value));
  };
  const winConditionChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
    ) => {
    setNumberOfWinCondition(Number(e.target.value));
  };
  const resetButtonHandler = () => {
    console.log("Reset Button Pressed")
  }

  function createTicTacToeTable() {

  }

  return (
    <div className="h-full w-full">
      <div className="h-1/5 w-full bg-red-100 flex justify-evenly items-center">
        <input
          type="number"
          placeholder="Column"
          onChange={columnChangeHandler}
        ></input>
        <input
          type="number"
          placeholder="Row"
          onChange={rowChangeHandler}
        ></input>
        <input
          type="number"
          placeholder="Win Condition"
          onChange={winConditionChangeHandler}
        ></input>
        <div className="h-2/5 w-1/6 bg-gray-300 hover:bg-gray-400 active:bg-gray-500 rounded border border-black flex justify-center items-center select-none" onClick={resetButtonHandler}>
          Reset
        </div>
      </div>
      <div className="h-4/5 w-full bg-blue-100"></div>
    </div>
  );
}
