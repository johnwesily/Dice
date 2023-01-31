

var randoNumber1 = Math.floor(Math.random() *6) + 1;
var randomDiceImage= "dice" + randoNumber1 + ".png";
var randomImageSource= "images/" + randomDiceImage ;

var j1 = document.querySelectorAll("img")[0];

j1.setAttribute("src",randomImageSource);


var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var radomdImageSoucrce="images/"+randomDiceImage2;

var j2= document.querySelectorAll("img")[1];

j2.setAttribute("src",radomdImageSoucrce);


if(randoNumber1> randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WIN'S";
}
else if(randoNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 2 win's";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
