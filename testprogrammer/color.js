a = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
//	frameRate(1000);
}


function draw(){
	if (a==1){
		background(255,0,0);
		a=0
	}
	else {
		background(0,0,255);
		a=1
	}
}
