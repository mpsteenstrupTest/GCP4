let img;

function preload() {
	img = createImg('http://mpsteenstrup.dk/FN_maal/FN1.jpg');
	img.hide();
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}


function draw() {
    w = random(0,windowWidth);
    h = random(0,windowHeight);
		image(img,w,h,40,40);
}

function mousePressed(){
	background(0,200,200);
}
