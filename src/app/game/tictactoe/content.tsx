'use client'
import {useState, useEffect} from "react";

export default function TictactoeContent() {
  const [numberOfColumn, setNumberOfColumn] = useState<number>();
  const [numberOfRow, setNumberOfRow] = useState<number>();
  const [numberOfWinCondition, setNumberOfWinCondition] = useState<number>();

  const columnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfColumn(Number(e.target.value));
  }
  const rowChangeHandler = (event:number) => {
    setNumberOfRow(event);
  }
  const winConditionChangeHandler = (event:number) => {
    setNumberOfWinCondition(event);
  }


  function createTicTacToeTable(){

  }

  return (
    <div className="h-full w-full">
      <div className="h-1/5 w-full bg-red-100 flex justify-evenly items-center">
        <input type="number" placeholder="Column" onChange={columnChangeHandler}></input>
        <input type="number" placeholder="Row"></input>
        <input type="number" placeholder="Win Condition"></input>
      </div>
      <div className="h-4/5 w-full bg-blue-100"></div>
    </div>
  );
}
