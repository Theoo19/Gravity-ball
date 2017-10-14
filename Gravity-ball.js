var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var mouse = {x: undefined,
			 y: undefined}

window.addEventListener("resize", function(event) {
	canvas.width  = innerWidth;
	canvas.height = innerHeight;
})

window.addEventListener("mousemove", function(event) {
	mouse.x = event.x;
	mouse.y = event.y;
})

window.addEventListener("click", function(event) {
	create(mouse.x, mouse.y)
})

function randint(a, b){
	var c = b - a;
	return Math.floor(Math.random() * c) + a;
}

function circle(x, y, radius, color){
	c.beginPath();
	c.arc(x, y, radius, 0, Math.PI * 2, false);
	c.fillStyle = color;
	c.strokeStyle = "rgb(0,0,0)";
	c.stroke();
	c.fill();
	c.closePath();
}

function Ball(x, y, dx, dy, radius, color){
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.radius = radius
	this.color = color

	this.move = function(){
		this.dx *= 0.99
		this.dy += 0.5

		this.x += this.dx
		this.y += this.dy

		if (this.y + this.radius + this.dy >= innerHeight){
			this.y = innerHeight - this.radius
			this.dx *= 0.99
			this.dy *= -0.8

		}
	}

	this.display = function(){
		circle(this.x, this.y, this.radius, this.color)
	}

	this.update = function(){
		this.move()
		this.display()
	}
}

function create(x, y){
	dx = randint(-50, 50) / 10
	dy = randint(-90, 10) / 10
	radius = randint(5, 35)
	color = ColorArray[randint(0, ColorArray.length)]
	ball = new Ball(x, y, dx, dy, radius, color)
	BallArray.push(ball)
}

var ColorArray = ["rgb(0,130,0)", "rgb(60,180,120)", "rgb(0,140,140)",
				  "rgb(140,40,230)", "rgb(220,190,220)", "rgb(60,100,230)"]
var BallArray = []

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);

	for (var i = 0; i < BallArray.length; i++){
		ball = BallArray[i]
		ball.update()
	}
}

animate();
