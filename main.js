var playerTurn = 0;
var playerColor0 = "red";
var playerColor1 = "blue";

var turnBox1 = "none";

function clickHandler(pieceName) {
  if(playerTurn == 0){
     if(turnBox1 == "none" && document.querySelector("#" + pieceName).style.backgroundColor == playerColor0){
        turnBox1 = pieceName;
     } else if(turnBox1 != "none" && document.querySelector("#" + pieceName).style.backgroundColor != playerColor1){
        document.querySelector("#" + turnBox1).style.backgroundColor = "black";
        document.querySelector("#" + turnBox1).style.borderColor = "black";
        document.querySelector("#" + pieceName).style.backgroundColor = playerColor0;
        document.querySelector("#" + pieceName).style.borderColor = playerColor0;
       //Reset
       turnBox1 = "none";
       playerTurn++;
     }
  }
  
  if(playerTurn == 1){
     if(turnBox1 == "none" && document.querySelector("#" + pieceName).style.backgroundColor == playerColor1){
        turnBox1 = pieceName;
     } else if(turnBox1 != "none" && document.querySelector("#" + pieceName).style.backgroundColor != playerColor0){
        document.querySelector("#" + turnBox1).style.backgroundColor = "black";
        document.querySelector("#" + turnBox1).style.borderColor = "black";
        document.querySelector("#" + pieceName).style.backgroundColor = playerColor1;
        document.querySelector("#" + pieceName).style.borderColor = playerColor1;
       //Reset
       turnBox1 = "none";
       playerTurn--;
     }
  }
}
