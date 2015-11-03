var ctx;
var canvas;
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var i;

var width = 20;
var height = 20;
var x = 100;
var y = 100;

function main()
{
	console.log("Hello World");
	initCanvas();
	draw();
}

function initCanvas()
{
	canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	document.body.appendChild(canvas);
	canvas.width = screenWidth;
	canvas.height = screenHeight;
}

function draw()
{
		var r = Math.random()*255;
		var g = Math.random()*255;
		var b = Math.random()*255;

	

		ctx.fillStyle = rgb(r,g,b);
		ctx.fillRect(x, y, width, height);
}


/*function for rgb for convenience*/
function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')';};

	/*helper function*/
	function clamp(value, min, max) 
	{ 
		if(max<min) 
		{ 
			var temp = min; 
			min = max; 
			max = temp; 
		}
	return Math.max(min, Math.min(value, max)); 
};