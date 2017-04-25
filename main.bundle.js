/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var canvas = document.getElementById("game");
	var context = canvas.getContext('2d');
	var Piece = __webpack_require__(1);
	var Board = __webpack_require__(2);
	var CheckForWinner = __webpack_require__(3);

	var checkWinner = new CheckForWinner();
	var board = new Board(context);
	var piece = new Piece();

	var player = piece.player;
	var boardColumns = board.columns;

	board.drawBoard(context);
	board.playSoundLoad();

	var changePlayer = function changePlayer() {
	  player = player === '1' ? '2' : '1';
	};

	var playerMove = function playerMove(player, column, startX) {
	  if (boardColumns[column].length < 6) {
	    board.setPiece(player, column, startX);
	    changePlayer();
	    piece.stalemate();
	  } else {
	    alert('Invalid choice! Choose an open column...duh');
	  }
	};

	var addPlayerPieceToColumn = function addPlayerPieceToColumn(e) {
	  var x = e.offsetX;

	  for (var i = 1; i <= boardColumns.length; i++) {
	    var columnX = i * 100;

	    if (x < columnX) {
	      playerMove(player, i - 1, columnX - 95);
	      checkWinner.checkForWinner(boardColumns);
	      setTimeout(function () {
	        alertWinner();
	      }, 1);
	      return;
	    }
	  }
	};

	var alertWinner = function alertWinner() {
	  if (checkWinner.w) {
	    board.playSoundWinner();
	    checkWinner.w === '1' ? (document.querySelector('#winningPlayer').innerHTML = "Robots Win! <br /> Click here to play again?", document.getElementById('winningPlayer').addEventListener('click', function () {
	      location.reload();
	    })) : (document.querySelector('#winningPlayer').innerHTML = "Ninjas Win! <br /> Click here to play again?", document.getElementById('winningPlayer').addEventListener('click', function () {
	      location.reload();
	    }));
	  }
	};

	canvas.addEventListener('click', function (e) {
	  board.playPieceDropSound();
	  addPlayerPieceToColumn(e);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Piece = function () {
	  function Piece(startX, startY, context) {
	    var player = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '1';

	    _classCallCheck(this, Piece);

	    this.startX = startX;
	    this.startY = startY;
	    this.context = context;
	    this.player = player;
	    this.pieceCount = 0;
	    this.stalemate();
	  }

	  _createClass(Piece, [{
	    key: 'stalemate',
	    value: function stalemate() {
	      this.pieceCount++;
	      this.pieceCount === 42 ? alert('Stalemate') : null;
	    }
	  }, {
	    key: 'drawCharacter',
	    value: function drawCharacter(context, player) {
	      var playerCharacter = document.getElementById("player" + player);

	      context.drawImage(playerCharacter, this.startX, this.startY);
	    }
	  }]);

	  return Piece;
	}();

	module.exports = Piece;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Piece = __webpack_require__(1);

	var Board = function () {
	  function Board(context) {
	    _classCallCheck(this, Board);

	    this.context = context;
	    this.columns = [[], [], [], [], [], [], []];

	    this.drawBoard = function (context) {

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
	    };
	  }

	  _createClass(Board, [{
	    key: "playPieceDropSound",
	    value: function playPieceDropSound() {
	      var sound = document.getElementById("audio");

	      sound.play();
	    }
	  }, {
	    key: "playSoundLoad",
	    value: function playSoundLoad() {
	      var sound1 = document.getElementById("audio1");

	      sound1.play();
	    }
	  }, {
	    key: "playSoundWinner",
	    value: function playSoundWinner() {
	      var winSound = document.getElementById("winner");

	      winSound.play();
	    }
	  }, {
	    key: "drawPlayer",
	    value: function drawPlayer(startX, startY, player) {
	      var piece = new Piece(startX, startY, player);

	      piece.drawCharacter(this.context, player);
	    }
	  }, {
	    key: "setPiece",
	    value: function setPiece(player, col, startX) {
	      var startY;
	      var colHeight = 100;
	      var canvasHeight = 605;

	      this.columns[col].push(player);
	      startY = canvasHeight + this.columns[col].length * -colHeight;

	      this.drawPlayer(startX, startY, player);
	    }
	  }]);

	  return Board;
	}();

	module.exports = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CheckForWinner = function () {
	  function CheckForWinner(w) {
	    _classCallCheck(this, CheckForWinner);

	    this.w = w;
	  }

	  _createClass(CheckForWinner, [{
	    key: "checkForWinner",
	    value: function checkForWinner(board) {
	      var c = null;
	      var r = null;

	      this.checkHorizontal(c, r, board);
	      this.checkVerticle(c, r, board);
	      this.checkDownRight(c, r, board);
	      this.checkDownLeft(c, r, board);
	    }
	  }, {
	    key: "checkLine",
	    value: function checkLine(a, b, c, d) {
	      return a != undefined && a == b && a == c && a == d;
	    }
	  }, {
	    key: "checkHorizontal",
	    value: function checkHorizontal(c, r, board) {
	      for (c = 0; c <= 3; c++) {
	        for (r = 0; r < 7; r++) {
	          if (this.checkLine(board[c][r], board[c + 1][r], board[c + 2][r], board[c + 3][r])) {
	            return this.w = board[c][r];
	          }
	        }
	      }
	    }
	  }, {
	    key: "checkVerticle",
	    value: function checkVerticle(c, r, board) {
	      for (c = 0; c < 7; c++) {
	        for (r = 0; r < 4; r++) {
	          if (this.checkLine(board[c][r], board[c][r + 1], board[c][r + 2], board[c][r + 3])) {
	            return this.w = board[c][r];
	          }
	        }
	      }
	    }
	  }, {
	    key: "checkDownRight",
	    value: function checkDownRight(c, r, board) {
	      for (c = 0; c <= 3; c++) {
	        for (r = 0; r < 4; r++) {
	          if (this.checkLine(board[c][r], board[c + 1][r + 1], board[c + 2][r + 2], board[c + 3][r + 3])) {
	            return this.w = board[c][r];
	          }
	        }
	      }
	    }
	  }, {
	    key: "checkDownLeft",
	    value: function checkDownLeft(c, r, board) {
	      for (c = 3; c <= 6; c++) {
	        for (r = 0; r < 4; r++) {
	          if (this.checkLine(board[c][r], board[c - 1][r + 1], board[c - 2][r + 2], board[c - 3][r + 3])) {
	            return this.w = board[c][r];
	          }
	        }
	      }
	    }
	  }]);

	  return CheckForWinner;
	}();

	module.exports = CheckForWinner;

/***/ }
/******/ ]);