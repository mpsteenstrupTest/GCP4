r = 1;
b = 1;
g = 1;

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw(){
  background(0);
	fill(r,b,g);
  ellipse(mouseX,mouseY,200,200);
}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
    r = 255;
  } else if (keyCode === RIGHT_ARROW) {
    b = 255;
  }
}


function keyReleased() {
	if (keyCode === LEFT_ARROW) {
    r = 0;
  } else if (keyCode === RIGHT_ARROW) {
    b = 0;
  }
}
