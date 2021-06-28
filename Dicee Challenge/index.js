let randomNumber1 = Math.ceil(Math.random()*6); //1-6;
let randomNumber2 = Math.ceil(Math.random()*6);
//document.querySelector(".img1").src="file:///Users/juanitavelez/Web%20Development/Dicee%20Challenge%20-%20Starting%20Files/images/dice"+randomNumber1+".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src","images/dice"+randomNumber1+".png"); //images/dice1.png - images/dice6.png

var image2 = document.querySelector(".img2");
image2.setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML= "Draw!";
}
