function Game(){
	this.paused = false;
	this.inGameMenu = null;
	this.level = 1;

	this.levelComplete;
}

Game.prototype.tick = function(elapsed){
	this.logic(elapsed);
	this.render();
}

Game.prototype.logic = function(elapsed){
	
}

Game.prototype.render = function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "Yellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "Black";
    ctx.font="30px Arial";
    ctx.fillText("Game Scene",100,250);
    
}


Game.prototype.startGameOverMenu = function(title){
    inGameMenu = null;
	var bindThis = this;
	this.gameOverMenu = new Menu(title, [ "Menu" ], "", 150, 50, 400,
			function(numItem) {
				if (numItem == 0)
					startMainMenu()
			},
			function(elapsed) { bindThis.render(elapsed); });
	GameLoopManager.run(function(elapsed) { bindThis.gameOverMenu.tick(elapsed); });
}