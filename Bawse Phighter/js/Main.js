// Global vars
fps = null; 
canvas = null;
ctx = null;
// ----------------------------------------

var game;
var menu;
var splash;

function main()
{
	//change version number if you suspect a problem with caching
	console.log("version 1");
	canvas = document.getElementById("screen");
	ctx = canvas.getContext("2d");
	InputManager.connect(document, canvas);

	startSplashScreen();
}

function startGame(){
	GameLoopManager.stop();
	menu = null;
	game = new Game();
	InputManager.reset();
	GameLoopManager.run(function(elapsed) { game.tick(elapsed); });
}

function startMainMenu(){
	GameLoopManager.stop();
	game = null;
    InputManager.reset();
	menu = new Menu("Bawse Phighter",	
					[ "Play Game", "Upgrade", "Exit Game"],
					"",
					70, 50, 400,
					function(numItem) {
						if (numItem == 0) startGame(); 
						else if (numItem == 1) startMultiPlayerGame();
						else if (numItem == 2) startMultiPlayerGame();
					},
				null);
	GameLoopManager.run(function(elapsed) { menu.tick(elapsed); });
}

function startSplashScreen(){
	splashIMG = new Image();
	splashIMG.src = "assets/splash.png"
	ctx.drawImage(splashIMG,0,0);
	console.log("Drawing splash");

	setTimeout(startMainMenu(), 30000);
}