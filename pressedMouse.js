function preload() {
	img = createImg('http://mpsteenstrup.dk/FN_maal/FN1.jpg');
	img.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(0,200,200);
}

function mousePressed() {
  image(img,mouseX,mouseY,60,60);
}
