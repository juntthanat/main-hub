import {useState} from "react";

// const TICTACTOE_SIZE = 3;
const initTicTacToeState = (TICTACTOE_SIZE:number) =>
  Array.from({ length: TICTACTOE_SIZE }, () =>
    Array.from({ length: TICTACTOE_SIZE }, () => 0)
  );

export default function TicTacToe(TICTACTOE_SIZE:number) {
    const [ticTacToeState, setTicTacToeState] = useState(initTicTacToeState(TICTACTOE_SIZE));
    if (TICTACTOE_SIZE !== ticTacToeState.length){
        setTicTacToeState(initTicTacToeState(TICTACTOE_SIZE))
    }
    

    return (
        <div>
            {ticTacToeState.map((row, rowIndex) => {
                return (
                    <div key={rowIndex} className="flex">
                        {row.map((col, colIndex) => {
                            return (
                            <div key={colIndex} className="w-[30px] h-[30px] flex justify-center items-center border border-black cursor-pointer">
                                0
                            </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}