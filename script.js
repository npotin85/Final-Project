//board
let board;
let boardWidth = 500;
let boardHeight = 500;
let context;

//player
let playerWidth = 80;
let playerHeight = 10;

let player = {
    x : boardHeight/2 - playerWidth/2,
    y: boardHeight - playerHeight - 5,
    width : playerWidth,
    height : playerHeight
}


//used for drawing on the board
window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
}
