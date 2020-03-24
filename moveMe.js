


function setup() {
  createCanvas(windowWidth, windowHeight);
  xCoordinat = 0;
  xSpeed = 10;
}

function draw() {
  background(10,100,100);
  fill(200,00,0);
  ellipse(xCoordinat,400,200,200);
  xCoordinat += xSpeed;

  if (xCoordinat>windowWidth || xCoordinat<0){
    xSpeed = -xSpeed;
  }
}