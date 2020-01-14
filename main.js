var playerTurn = 0;
var playerColor0 = "orange";
var playerColor1 = "orange";

var turnBox1 = "none";

function clickHandler(pieceName) {
  if(playerTurn == 0){
     if(turnBox1 == "none" && document.getElementById(pieceName).style.backgroundColor == playerColor0){
        turnBox1 = pieceName;
     } else if(turnBox1 != "none" && document.getElementById(pieceName).style.backgroundColor != playerColor1){
        var turnBox2 = pieceName;
        document.getElementById(turnBox1).style.backgroundColor = "white";
        document.getElementById(turnBox2).style.backgroundColor = playerColor0;
       //Reset
       turnBox1 = "none";
       playerTurn++;
       alert("Player Turn:" + playerTurn);
       alert("Turn Box 1: " + turnBox1);
     }
  }
}
