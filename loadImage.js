let img;


function preload(){
  img = createImg('http://mpsteenstrup.dk/FN_maal/FN1.jpg',''); // resten af billederne kan findes som FN2, FN3 osv.
	img.hide();
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  image(img,0,0);
}

function draw(){
noLoop
}
