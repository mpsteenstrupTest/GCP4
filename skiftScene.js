let img;
let list = [];
let scene = 0;

function preload() {
	for (i=1;i<18;i++){
		img = createImg('http://mpsteenstrup.dk/FN_maal/FN'+ i +'.jpg','');
		img.hide();
	  list.push(img);
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  background(91, 146, 229);
}


function draw() {
		image(list[scene],200,200,400,400);
}

function mousePressed(){
	scene = scene+1;
	if (scene>=17){
		scene=0;
	}
}
