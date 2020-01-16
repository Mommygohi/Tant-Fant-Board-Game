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
     } else {
       if(turnBox1 == pieceName || cantGoTo(turnBox1, pieceName) == "can't"){
          alert("Can't Go There!");
          turnBox1 = "none";
       }
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
     } else {
       if(turnBox1 == pieceName || cantGoTo(turnBox1, pieceName) == "can't"){
          lert("Can't Go There!");
          urnBox1 = "none";
       
    }
  }
}

function cantGoTo(turnBox, pieceName){
  var turnBoxNumber = turnBox.replace( /^\D+/g, '');
  var pieceNumber = pieceName.replace( /^\D+/g, '');
  var absolute = Math.abs(parseInt(turnBoxNumber) - parseInt(pieceNumber));
  
  if(absolute == 1 || absolute == 3 || absolute == 4){
     return "can";
  } else {
     return "can't";
  }
}
