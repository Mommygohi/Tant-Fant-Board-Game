var playerTurn = 0;
var playerColor0 = "red";
var playerColor1 = "blue";

var turnBox1 = "none";

function clickHandler(pieceName) {
  var status = "none";
  
  if(playerTurn == 0){
     if(turnBox1 == "none" && document.querySelector("#" + pieceName).style.backgroundColor == playerColor0){
        turnBox1 = pieceName;
        status = "some";
     } else if(turnBox1 != "none" && document.querySelector("#" + pieceName).style.backgroundColor != document.querySelector("#" + turnBox1).style.backgroundColor && document.querySelector("#" + pieceName).style.backgroundColor != playerColor1 && cantGoTo(turnBox1, pieceName) == "can"){
        document.querySelector("#" + turnBox1).style.backgroundColor = "black";
        document.querySelector("#" + turnBox1).style.borderColor = "black";
        document.querySelector("#" + pieceName).style.backgroundColor = playerColor0;
        document.querySelector("#" + pieceName).style.borderColor = playerColor0;
       //Reset
       turnBox1 = "none";
       playerTurn++;
       status = "some";
     }
  }
  
  if(playerTurn == 1){
     if(turnBox1 == "none" && document.querySelector("#" + pieceName).style.backgroundColor == playerColor1){
        turnBox1 = pieceName;
        status = "some";
     } else if(turnBox1 != "none" && document.querySelector("#" + pieceName).style.backgroundColor != playerColor0 && cantGoTo(turnBox1, pieceName) == "can"){
        document.querySelector("#" + turnBox1).style.backgroundColor = "black";
        document.querySelector("#" + turnBox1).style.borderColor = "black";
        document.querySelector("#" + pieceName).style.backgroundColor = playerColor1;
        document.querySelector("#" + pieceName).style.borderColor = playerColor1;
       //Reset
       turnBox1 = "none";
       playerTurn--;
       status = "some";
     }
  }
  
  if(status == "none"){
     alert("Can't Go There!");
     turnBox1 = "none";
  }
  
  winChecker();
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
  } else if(turnBox == "piece5" && pieceName != "piece5"){
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

function winChecker(){
  var pieceOne = document.querySelector("#piece1").style.backgroundColor;
  var pieceTwo = document.querySelector("#piece2").style.backgroundColor;
  var pieceThree = document.querySelector("#piece3").style.backgroundColor;
  var pieceFour = document.querySelector("#piece4").style.backgroundColor;
  var pieceFive = document.querySelector("#piece5").style.backgroundColor;
  var pieceSix = document.querySelector("#piece6").style.backgroundColor;
  var pieceSeven = document.querySelector("#piece7").style.backgroundColor;
  var pieceEight = document.querySelector("#piece8").style.backgroundColor;
  var pieceNine = document.querySelector("#piece9").style.backgroundColor;
  
  //Horizontal Win Detection
  if(pieceOne == playerColor0 && pieceTwo == playerColor0 && pieceThree == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  } else if(pieceFour == playerColor0 && pieceFive == playerColor0 && pieceSix == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  } else if(pieceSeven == playerColor0 && pieceEight == playerColor0 && pieceNine == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  }
  if(pieceOne == playerColor1 && pieceTwo == playerColor1 && pieceThree == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  } else if(pieceFour == playerColor1 && pieceFive == playerColor1 && pieceSix == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  } else if(pieceSeven == playerColor1 && pieceEight == playerColor1 && pieceNine == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  }
  
  //Vertical Win Detection
  if(pieceOne == playerColor0 && pieceFour == playerColor0 && pieceSeven == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  } else if(pieceTwo == playerColor0 && pieceFive == playerColor0 && pieceEight == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  } else if(pieceThree == playerColor0 && pieceSix == playerColor0 && pieceNine == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  }
  if(pieceOne == playerColor1 && pieceFour == playerColor1 && pieceSeven == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  } else if(pieceTwo == playerColor1 && pieceFive == playerColor1 && pieceEight == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  } else if(pieceThree == playerColor1 && pieceSix == playerColor1 && pieceNine == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  }
  
  //Diagonal Win Detection
  if(pieceOne == playerColor0 && pieceFive == playerColor0 && pieceNine == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  } else if(pieceThree == playerColor0 && pieceFive == playerColor0 && pieceSeven == playerColor0){
     alert(playerColor0 + " Wins!");
     location.reload();
  }
  if(pieceOne == playerColor1 && pieceFive == playerColor1 && pieceNine == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  } else if(pieceThree == playerColor1 && pieceFive == playerColor1 && pieceSeven == playerColor1){
     alert(playerColor1 + " Wins!");
     location.reload();
  }
}
