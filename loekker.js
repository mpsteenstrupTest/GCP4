let y = [50, 170, 120, 355, 175];

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0,200,200);
}


function draw() {
  for (i in y){
    ellipse(40 + i * 80, y[i], 40);
  }
}
