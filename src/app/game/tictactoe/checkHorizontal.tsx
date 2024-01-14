

export default function CheckHorizontal(ticTacToeState:number[][], TICTACTOE_SIZE: number, row:number, player:string){
    let conditionScore = 0;
    let totalScore = 0;
    if(player == "player1"){
        conditionScore = 1 * ticTacToeState.length;
    } else {
        conditionScore = -1 * ticTacToeState.length;
    }

    for(let index = 0; index < ticTacToeState.length; index++){
        totalScore += ticTacToeState[row][index];
    }
    if(totalScore == conditionScore){
        alert(player + "Win")
        return true
    } else {
        return false
    }
}