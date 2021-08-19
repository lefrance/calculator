
function diceeNumber() {
  return Math.floor((Math.random() * 6) + 1 );
}


// generate a path based on the number
function getPath(number) {
   console.log(number)
   if (number == 1) {
     return "images\\dice1.png";
  } else if (number == 2) {
     return "images\\dice2.png";
  } else if (number == 3) {
     return "images\\dice3.png";
  } else if (number == 4) {
     return "images\\dice4.png";
  } else if (number == 5) {
     return "images\\dice5.png";
   } else {
     return "images\\dice6.png";
   }
}



   var playerOne = diceeNumber();
   var playerTwo = diceeNumber();
   document.querySelector(".img1").setAttribute("src",getPath(diceeNumber()));
   document.querySelector(".img2").setAttribute("src",getPath(diceeNumber()));


   if (playerOne > playerTwo){
      document.querySelector("h1").innerHTML = "player 1 has won" ;
   } else if (playerOne < playerTwo){
      document.querySelector("h1").innerHTML = "player 2 has won" ;
   }else{sss
      document.querySelector("h1").innerHTML = "tie" ;
   }


//woororoorroor
