// board
let board;
let boardWidth = 360;
let boardHeight = 576;
let context;

//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardWidth/2 - doodlerWidth/2;
let doodlerY = boardHeight*7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;

// movement
let velocityX = 0;

//platforms
let platformArray = []
let platformWidth = 60;
let platformheight = 18;
let platformImg;



let doodler = {
  img : null,
  x : doodlerX,
  y : doodlerY,
  width : doodlerWidth,
  height : doodlerHeight
}






window.onload = function() {
  board = document.getElementById("board");
  board.height = boardHeight;
  board.width = boardWidth;
  context = board.getContext("2d");

  //canvas doodler
  /*context.fillStyle = "green"
  context.fillRect(doodler.x, doodler.y, doodler.width, doodler.height)*/


  // load img of doodler
  doodlerRightImg = new Image();
  doodlerRightImg.src = "./doodler-right.png";
  doodler.img = doodlerRightImg;
  doodlerRightImg.onload = function() {
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
  }

  doodlerLeftImg = new  Image();
  doodlerLeftImg.src = "./doodler-left.png";
  
  requestAnimationFrame(update);
  document.addEventListener("keydown", moveDoodler);


}

function update() {
  requestAnimationFrame(update);
  context.clearRect(0, 0, board.width, board.height);
  
  //doodler loop
  doodler.x += velocityX
  if (doodler.x > boardWidth) {
    doodler.x = 0;
  }
   else if (doodler.x + doodler.width < 0) {
    doodler.x = boardWidth
   }
  context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);
}

function moveDoodler(e) {
  if (e.code == "ArrowRight" || e.code == "KeyD") { //move right
    velocityX = 4;
    doodler.img = doodlerRightImg;
  }
  else if (e.code == "ArrowLeft" || e.code == "KeyA") {
    velocityX = -4;
    doodler.img = doodlerLeftImg;
  }
}