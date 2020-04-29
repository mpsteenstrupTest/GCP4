function setup() {
	createCanvas(windowWidth, windowHeight);
}



//ball position, speed and look

var velocityHorizontal = 0;
var velocityVertical = 0;
var ypos = [];
var xpos = [];
var speedx =[];
var speedy =[];


var gravity = 0.1;
var bodyLength = 15;
var bodyHeight = 15;
var bodyColor = [];

//bat position

var bx = 700;
var by = 600;
var bh = 10;
var bw = 100;


// MOVE BAT
function draw() {

    background(127, 204, 255);


bx = bx+velocityHorizontal;
by = by+velocityVertical

	if (bx<0) {
        bx=0;
    }
    if (bx>windowWidth){
        bx=windowWidth;
    }
    if (by<0) {
        by=0;
    }
    if (by>windowHeight) {
        by=windowHeight;
    }

fill(194, 172, 135);
rect(bx-0.5*bw,by-0.5*bh,bw,bh);

// create ball

    mouseClicked = function(){
    xpos.push(mouseX);
    ypos.push(mouseY);
    speedx.push(random(-4,4));
    speedy.push(random(-4,4));
    bodyColor.push(color(random(0,255),random(0,255),random(0,255)));

    };


    for (var i=0; i < xpos.length;i++){

        noStroke();
        fill(bodyColor[i]);

 //collision bat top

            if (ypos[i]>by-0.5*(bh+bodyLength) && ypos[i]<by-0.4*(bh+bodyLength) && xpos[i]>bx-0.5*bw && xpos[i]<bx+0.5*bw && speedy[i]>0){

                speedy[i] = -1*speedy[i];
            }
 //collision bat bottom

            if (ypos[i]<by+0.5*(bh+bodyLength) && ypos[i]>by-0.4*(bh+bodyLength) && xpos[i]>bx-0.5*bw && xpos[i]<bx+0.5*bw && speedy[i]<0){

                speedy[i] = -1*speedy[i];
            }

//collision bat left side
             if (ypos[i]<by+0.5*(bh+bodyLength) && ypos[i]>by-0.5*(bh+bodyLength) && xpos[i]>bx-0.51*bw && xpos[i]<bx-0.5*bw && speedx[i]>0){

                 speedx[i] = -1*speedx[i];
             }
//collision bat right side
             if (ypos[i]<by+0.5*(bh+bodyLength) && ypos[i]>by-0.5*(bh+bodyLength) && xpos[i]<bx+0.5*bw && xpos[i]>bx+0.49*bw && speedx[i]<0){

                 speedx[i] = -1*speedx[i];
             }



//collision edges


            if (xpos[i]>windowWidth-bodyLength/2){

                speedx[i] = -1*speedx[i];
            }

            if (xpos[i]<bodyLength/2){

                speedx[i] = abs(speedx[i]);
            }

            if (ypos[i]>windowHeight-bodyLength/2){

                speedy[i] = -1*speedy[i];
            }

            if (ypos[i]<bodyLength/2){

                speedy[i] = abs(speedy[i]);
            }



    for (var j=0;j<xpos.length;j++){

        if (dist(xpos[i],ypos[i],xpos[j],ypos[j])<bodyLength && j>i){

            var sx = speedx[i];
            var sy = speedy[i];
            speedx[i] = speedx[j];
            speedy[i] = speedy[j];
            speedx[j] = sx;
            speedy[j] = sy;
        }
    }

// draw the ball
    ellipse(xpos[i], ypos[i], bodyLength, bodyHeight);

     // move the ball
    speedy[i]=speedy[i]+gravity;
    xpos[i] = xpos[i] + speedx[i];
    ypos[i] = ypos[i] + speedy[i];

    }
};


function keyPressed() {
	if (keyCode === LEFT_ARROW) {
    velocityHorizontal = -10;
  }
	if (keyCode === RIGHT_ARROW) {
    velocityHorizontal = 10;
  }
	if (keyCode === UP_ARROW){
		velocityVertical = -10;
	}
	else if (keyCode === DOWN_ARROW){
		velocityVertical = 10;
	}
}


function keyReleased() {
	if (keyCode === LEFT_ARROW) {
    velocityHorizontal = 0;
  }
	if (keyCode === RIGHT_ARROW) {
    velocityHorizontal = 0;
  }
	if (keyCode === UP_ARROW){
		velocityVertical = 0;
	}
	else if (keyCode === DOWN_ARROW){
		velocityVertical = 0;
	}
}
