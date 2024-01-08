import CheckX from "./checkX"
import CheckY from "./checkY"


export default function CheckTicTacToe(ticTacToeState:number[][], TICTACTOE_SIZE: number){
    
    // console.log(ticTacToeState)
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
// Check (0 0 0), (1 1 1), (2 2 2)
// Check Index (0, 3, 6) Add by Table Size(3) per cycle
// 0 = (0,0) ---- 0 + 3 = 3
// 3 = (1,1) ---- 3 + 3 = 6
// 6 = (2,2)

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

// 0  1  2  3  4
// 5  6  7  8  9
// 10 11 12 13 14
// 15 16 17 18 19
// 20 21 22 23 24
// Mod Everything By 5 =
// 0 1 2 3 4
// 0 1 2 3 4
// 0 1 2 3 4
// 0 1 2 3 4
// 0 1 2 3 4