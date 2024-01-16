

export default function CheckDiagonal(ticTacToeState:number[][], TICTACTOE_SIZE: number, row:number, col:number, player:string){
    let conditionScore = 0;
    let totalScore = 0;
    let statePosition = (row * TICTACTOE_SIZE) + col
    let concernPositionLeft: number[] = []
    let concernPositionRight: number[] = []
    if(player == "player1"){
        conditionScore = 1 * ticTacToeState.length;
    } else {
        conditionScore = -1 * ticTacToeState.length;
    }

    for(let index = 0; index < TICTACTOE_SIZE; index++){
        concernPositionLeft.push((TICTACTOE_SIZE+1)*index)
        concernPositionRight.push((TICTACTOE_SIZE-1)*(index+1))
    }

    console.log("left " + concernPositionLeft + " Right " + concernPositionRight)
    
    
}

/* 

Logic:
check whether the index of the state is in the multiple of
(size + 1 or size - 1).

0 1 2
3 4 5
6 7 8

sequence (size 3): 
0 4 8 (size + 1) [mulitple of 4]
2 4 6 (size - 1) [multiple of 2]

0  1  2  3
4  5  6  7
8  9  10 11
12 13 14 15

sequence (size 4):
0 5 10 15 (size + 1) [multiple of 5]
3 6 9  12 (size - 1) [multiple of 3]

0  1  2  3  4  
5  6  7  8  9  
10 11 12 13 14 
15 16 17 18 19
20 21 22 23 24

sequence (size 5):
0 6 12 18 24 (size + 1) [multiple of 6]
4 8 12 16 20 (size - 1) [multiple of 4]

*/