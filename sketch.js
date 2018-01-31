function setup() {
	createCanvas(600, 600);
}

function draw() {
	background(100);
	rect(300, 300, 200, 100);
	rect(350, 320, 70, 30);
	rect(200, 300, 100, 100);
	rect(220, 330, 50, 70);
	triangle(200, 300, 300, 300, 250, 200);
	quad(250, 200, 450, 200, 500, 300, 300, 300);
	ellipse(500, 100, 100, 100);
} 
