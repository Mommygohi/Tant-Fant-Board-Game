var playerTurn = 0;
var playerColor0 = "red";
var playerColor1 = "blue";

var turnBox1 = "none";

function clickHandler(pieceName) {
  if(playerTurn == 0){
     if(turnBox1 == "none" && document.querySelector("#" + pieceName).style.backgroundColor == playerColor0){
        turnBox1 = pieceName;
     } else if(turnBox1 != "none" && document.querySelector("#" + pieceName).style.backgroundColor != document.querySelector("#" + turnBox1).style.backgroundColor && document.querySelector("#" + pieceName).style.backgroundColor != playerColor1 && cantGoTo(turnBox1, pieceName) == "can"){
        document.querySelector("#" + turnBox1).style.backgroundColor = "black";
        document.querySelector("#" + turnBox1).style.borderColor = "black";
        document.querySelector("#" + pieceName).style.backgroundColor = playerColor0;
        document.querySelector("#" + pieceName).style.borderColor = playerColor0;
       //Reset
       turnBox1 = "none";
       playerTurn++;
     } else if(playerTurn == 0){
       alert("Can't Go There!");
       turnBox1 == "none";
     }
  }
  
  if(playerTurn == 1){
     if(turnBox1 == "none" && document.querySelector("#" + pieceName).style.backgroundColor == playerColor1){
        turnBox1 = pieceName;
     } else if(turnBox1 != "none" && document.querySelector("#" + pieceName).style.backgroundColor != playerColor0 && cantGoTo(turnBox1, pieceName) == "can"){
        document.querySelector("#" + turnBox1).style.backgroundColor = "black";
        document.querySelector("#" + turnBox1).style.borderColor = "black";
        document.querySelector("#" + pieceName).style.backgroundColor = playerColor1;
        document.querySelector("#" + pieceName).style.borderColor = playerColor1;
       //Reset
       turnBox1 = "none";
       playerTurn--;
     } else if(playerTurn == 1){
       alert("Can't Go There!");
       turnBox1 == "none";
     }
  }
}

function cantGoTo(turnBox, pieceName){
  if(turnBox == "piece1" && (pieceName == "piece2" || pieceName == "piece4" || pieceName == "piece5") && pieceName != "piece1"){
     return "can";
  } else if(turnBox == "piece2" && (pieceName == "piece1" || pieceName == "piece3" || pieceName == "piece5") && pieceName != "piece2"){
     return "can";
  } else if(turnBox == "piece3" && (pieceName == "piece2" || pieceName == "piece5" || pieceName == "piece6") && pieceName != "piece3"){
     return "can";
  } else if(turnBox == "piece4" && (pieceName == "piece1" || pieceName == "piece5" || pieceName == "piece7") && pieceName != "piece4"){
     return "can";
  } else if(turnBox == "piece6" && (pieceName == "piece3" || pieceName == "piece5" || pieceName == "piece9") && pieceName != "piece6"){
     return "can";
  } else if(turnBox == "piece7" && (pieceName == "piece4" || pieceName == "piece5" || pieceName == "piece8") && pieceName != "piece7"){
     return "can";
  } else if(turnBox == "piece8" && (pieceName == "piece5" || pieceName == "piece7" || pieceName == "piece9") && pieceName != "piece8"){
     return "can";
  } else if(turnBox == "piece9" && (pieceName == "piece5" || pieceName == "piece6" || pieceName == "piece8") && pieceName != "piece9"){
     return "can";
  } else {
    return "can't";
  }
}
