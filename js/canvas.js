var canvas = document.querySelector(".canvas");
const ctx= canvas.getContext("2d");
const scale =10;
var clock;
(function setup(){
  clock=new Clock();
  clock.draw();

  
}());
