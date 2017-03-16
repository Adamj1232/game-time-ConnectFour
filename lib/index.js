var canvas = document.getElementById("game")
var context = canvas.getContext('2d');
var piece = require('./pieces.js')
var Column = require('./board.js')
let z = 'p1'


let col1 = new Column();
let col2 = new Column();
let col3 = new Column();
let col4 = new Column();
let col5 = new Column();
let col6 = new Column();
let col7 = new Column();

let boardArr = [col1.squares, col2.squares, col3.squares, col4.squares, col5.squares, col6.squares, col7.squares];

for (var i = 0; i < boardArr.length; i++) {
  console.log(boardArr[i])
}

draw();


function drawPlayer(startX, startY){
  z === 'p1' ?  drawP1(startX, startY) : drawP2(startX, startY)
}

function setPiece(z, column, startX, ) {
  boardArr[column].push(z)//draw in col2
  let startY += boardArr[column].length * -100
  drawPlayer(startX, startY);
}

canvas.addEventListener('click', function (e) {
  var x = e.offsetX;
  let startY = 550
  console.log(x)

  // col 0
  if(x<100){
    boardArr[0].push(z)//draw in col1, push to col1 array
    let startX = 50
    drawPlayer(startX, startY);
    console.log(boardArr[0])

  // col 1
  } else if( x<200){
    boardArr[1].push(z)//draw in col2
    let startX = 150
    let startY += boardArr[1].length * -100
    drawPlayer(startX, startY);
    console.log(boardArr[1])

  // col 2
  } else if (x<300){
    boardArr[2].push(z)//draw in col3
    let startX = 250
    drawPlayer(startX, startY);
    console.log(boardArr[2])

  } else if (x<400){
    let startX = 350
    drawPlayer(startX, startY);
    boardArr[3].push(z)//draw in col4
    console.log(boardArr[3])

  } else if (x<500){
    let startX = 450
    drawPlayer(startX, startY);
    boardArr[4].push(z)//draw col5
    console.log(boardArr[4])

  } else if (x<600){
    let startX = 550
    drawPlayer(startX, startY);
    boardArr[5].push(z)//draw in col6
    console.log(boardArr[5])

  } else {
    let startX = 650
    drawPlayer(startX, startY);
    boardArr[6].push(z)//draw in col7
    console.log(boardArr[6])
  }
  z === 'p1' ?  z = 'p2' : z = 'p1'

    console.log(boardArr)
});

function draw() {
  for (var x = 0; x < 700; x += 100) {
    context.moveTo(x, 0);
    context.lineTo(x, 700);
  }

  for (var y = 0; y < 600; y += 100) {
    context.moveTo(0, y);
    context.lineTo(800, y);
  }

  context.strokeStyle = "";
  context.stroke();
}

function drawP1(startX, startY) {
  context.beginPath();
  context.fillStyle = 'black';
  context.arc(startX, startY, 45, 0, Math.PI * 2, true)
  context.fill();
}

function drawP2(startX, startY) {
  context.beginPath();
  context.fillStyle = 'green';
  context.arc(startX, startY, 45, 0, Math.PI * 2, true)
  context.fill();
}

// function drawPlayer(startX, startY){
//   z === 'p1' ?  z = 'p2' : z = 'p1'
//   if(z === 'p1'){
//     drawP1()
//   } else {
//     drawP2()
//   }
// }
