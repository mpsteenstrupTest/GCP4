function preload(){
    standingImg = createImg('https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/94276843_2640580889595405_6061791226665893888_n.png?_nc_cat=100&_nc_sid=b96e70&_nc_ohc=xR_HN-_b8a8AX9JmkJ4&_nc_ht=scontent-cph2-1.xx&oh=b4ece1755d3ef8e98599c5a955cf43ed&oe=5EC7732A&dl=1','');
	standingImg.hide();
	bg = createImg('https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/93823106_216839376277901_5150383743227133952_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=H2E48aopTNUAX-LDjFF&_nc_ht=scontent-cph2-1.xx&oh=38f8f08d42d4f51a5b897c7ff17999d0&oe=5EC4947D&dl=1','');
	bg.hide();
	dirt = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/93845687_178712569866179_5108962906825818112_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=V3wHW69jqZEAX-Xw1DT&_nc_ht=scontent-cph2-1.xx&oh=84f06ff7e7b8bb2d3436c5df58cb8269&oe=5EC41F03&dl=1",'');
	dirt.hide();
	jumpImg = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95212165_1176918252657816_5479552592298115072_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=gfT4MrMXMCwAX8a_c4g&_nc_ht=scontent-cph2-1.xx&oh=6de00183d3a34a2f0e93ab6e36aac1a6&oe=5ECEBFF7&dl=1",'')
	jumpImg.hide();
	bushImg = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/94127906_231861481356440_6967150661712478208_n.png?_nc_cat=104&_nc_sid=b96e70&_nc_ohc=BdesJaSEeuQAX-PAdTw&_nc_ht=scontent-cph2-1.xx&oh=c62b5d0796b92c118871326b4729803b&oe=5EC5F782&dl=1",'');
	bushImg.hide();
  hut = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/94717830_2647426605500176_4851537243006828544_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_ohc=7gg4Nawz7I0AX_i-K6l&_nc_ht=scontent-cph2-1.xx&oh=e56c42d877949eeac27d344cf20658ce&oe=5ECCE31B&dl=1",'');
	hut.hide();
  sand = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95141469_846493172495769_4746568392616443904_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=wBCVUbJi2XsAX_vlkfU&_nc_ht=scontent-cph2-1.xx&oh=1be7619abec377b962519d8352c672de&oe=5ECD4DC8&dl=1",'');
  sand.hide();
  talkBubble = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/94946411_162565475147613_1273626226111545344_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=mLBvMwTSPEYAX_wpXMt&_nc_ht=scontent-cph2-1.xx&oh=a0ae6833ef484b235934f19bab047922&oe=5ECD10B0&dl=1",'');
  talkBubble.hide();
  talkLeft= createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/94964016_266438151181627_2368678299149795328_n.png?_nc_cat=108&_nc_sid=b96e70&_nc_ohc=jpcWNLfMW7QAX-SmOJJ&_nc_ht=scontent-cph2-1.xx&oh=84fc9addb4738e825468affeb42f332e&oe=5ED097D0&dl=1",'');
  talkLeft.hide();
  run1 = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95024981_727962721276749_8448625499332149248_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=-ErBcwsMJ1MAX9MhG-Y&_nc_ht=scontent-cph2-1.xx&oh=f38f7ed221a2cc50aa87174d85b6c5e7&oe=5ECE6568&dl=1",'')
  run2 = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95384806_254437812606154_6398860303005646848_n.png?_nc_cat=105&_nc_sid=b96e70&_nc_ohc=HL8Sa6gIdN0AX9qLT6v&_nc_ht=scontent-cph2-1.xx&oh=d197a384668ce34bee0cf4655cb6c3d6&oe=5ECE248A&dl=1",'')
  run3 = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95203756_227678662017348_1700243566686633984_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=oQuic21ZjUcAX9Nigt8&_nc_ht=scontent-cph2-1.xx&oh=7e18c5a2a1854f57ff6c98cb5ed0ca66&oe=5ECD5D31&dl=1",'');
  run1.hide();
  run2.hide();
  run3.hide();
    earth = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95471829_228677471737177_1426981430734356480_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_ohc=YbAkTJK4QbQAX-nDI1o&_nc_ht=scontent-cph2-1.xx&oh=82c98f7fb6d5cc2dfc7e74f3406ed5c2&oe=5ECD6F5F&dl=1",'');
earth.hide();
  waterDrop = createImg("https://lh3.googleusercontent.com/proxy/xriC-katGjsgZGdiJ4yLNpzS4S-gFIZUjZK9UdKvvlyf1v-EsAqZoD718-UFy_l1pZWZy8-zPI9jmorQsn-2ZXsYFKAWsagh",'');
  waterDrop.hide();
  african1 = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95570884_232090798112835_1425238137868648448_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=Kpj-edS6WvAAX-JIrvV&_nc_ht=scontent-cph2-1.xx&oh=e6fafb1bad0b20a271bb00e9a86847e4&oe=5ED12960&dl=1",'');
  african2 = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95411484_552857688934842_7477251974564413440_n.png?_nc_cat=106&_nc_sid=b96e70&_nc_ohc=tL4qf44w--UAX-iSwuL&_nc_ht=scontent-cph2-1.xx&oh=d260c91b1dd2e0b977171b460e66f7cf&oe=5ED0F1DF&dl=1",'');
  african1.hide();
  african2.hide();
  skilt1 = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95731046_3068958546517579_4455960786426134528_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=fJpbXxSu52oAX9yKqKO&_nc_ht=scontent-cph2-1.xx&oh=dc4de01a7d000437be253fcd1429819e&oe=5ECF0326&dl=1",'');
  skilt1.hide();
  skilt2 =  createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95322732_540801069970044_1696949674662952960_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=4avuR8IwAl0AX9O9VEn&_nc_ht=scontent-cph2-1.xx&oh=6aedcc112dfdaf37da10eab5d275450b&oe=5ED07534&dl=1",'');
  skilt2.hide();
  pickaxe = createImg("https://scontent-cph2-1.xx.fbcdn.net/v/t1.15752-9/95187435_160708952031759_6991552681613459456_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=K3Dp3PHR2iMAX8H-JKs&_nc_ht=scontent-cph2-1.xx&oh=80d53bc9e161d8f03c243bcc9bb3d7ef&oe=5ED019D9&dl=1",'');
  pickaxe.hide();
}

//Variable
var winTimer = 0;
var win = false;
var temp2 = true;
var hasPassed = false;
var cutScene = false;
var sceneTimer = 0;
let player;
let speed = 10;
let gravity = 10;
const canvasY = 1000;
const canvasX = 1800;
let maxJump = 15;
let jumpSpeed = 25;
let spillerHojde = 150;
let spillerBredde = 80;
let runningAnimationTime = 5;
let thirstRate = 0.1;
var baggrundStart = 0;
var scene = 1;
var temp = true;
var earthTextSize = 10;
var showPlanet = false;

var earthQuote = "";
var earthTimer = 0;
var earthShowTime = 0;

//Classes
class Player {
	constructor(posX,posY,height,width, speed) {
		this.posX = posX;
		this.posY = posY;
		this.height = height;
		this.width = width;
		this.speed = speed;
        this.movingRight = false;
        this.movingLeft = false;
        this.jumping = false;
        this.jumpCount = 0;
        this.CO = false;
        this.CU = false;
        this.CR = false;
        this.CL = false;
        this.animateCount = 0;
        this.duration = 0;
        this.talkTime;
        this.isTalking = false;
        this.talkString = "";
        this.thirst = 100;
	}
	moveLeft(objektList,bagrundList) {
		for (var i = 0; i < objektList.length; i++)
		{
			objektList[i].posX = objektList[i].posX +this.speed;
		}
        for (var j = 0; j < bagrundList.length; j++)
		{
			bagrundList[j].posX += this.speed;
		}
	}
	moveRight(objektList,bagrundList) {
		for (var i = 0; i < objektList.length; i++)
		{
			objektList[i].posX = objektList[i].posX - this.speed;
		}
      	for (var j = 0; j < bagrundList.length; j++){
            bagrundList[j].posX -= this.speed;
		}
	}

    jump() {
          this.posY = this.posY - jumpSpeed;
    }
    applyGravity() {
      if(this.posY >= canvasY - this.height) {
        this.posY = canvasY - this.height;
      }
      else if (!this.jumping && !this.CU){
        this.posY = this.posY + gravity;
      }

    }
    checkCollision(objectList) {
        this.CO = false;
        this.CU = false;
        this.CR = false;
        this.CL = false;
      //Skriv til mig hvis du vil have forklaring af det her eller     forklaring på hvorfor jeg har valgt at lave 4 loops.
      for (var i=0; i<objectList.length;i++){
        if(this.posY+this.height >= objectList[i].posY && this.posY < objectList[i].posY && this.posX+this.width > objectList[i].posX && this.posX < objectList[i].posX + objectList[i].width) {
          if((objectList[i] instanceof Trick && objectList[i].shown) || !(objectList[i] instanceof Trick)) {
                this.CU = true;
                this.posY = objectList[i].posY - this.height;
          }
          if(objectList[i].img === waterDrop) {
            this.CU = false;
            this.thirst += 33;
            objectList.splice(i,1);
          }
          if(objectList[i].img === pickaxe) {
            win = true;
            objectList.splice(i,1);
          }
          break;
        }
      }
      for (var i=0; i<objectList.length;i++){
        if(this.posX + this.width <= objectList[i].posX && this.posX +this.width >= objectList[i].posX && this.posY + this.height > objectList[i].posY && this.posY < objectList[i].posY + objectList[i].height) {
                    if((objectList[i] instanceof Trick && objectList[i].shown) || !(objectList[i] instanceof Trick)) {
                this.CR = true;
          }
           if(objectList[i].img === waterDrop) {
            this.CR = false;
            this.thirst += 33;        objectList.splice(i,1);

          }
          if(objectList[i].img === pickaxe) {
            win = true;
            objectList.splice(i,1);
          }
          break;
        }
      }
         for (var i=0; i<objectList.length;i++){
        if(this.posX <= objectList[i].posX + objectList[i].width && this.posX >= objectList[i].posX + objectList[i].width && this.posY + this.height > objectList[i].posY && this.posY < objectList[i].posY + objectList[i].height) {
                    if((objectList[i] instanceof Trick && objectList[i].shown) || !(objectList[i] instanceof Trick)) {
                this.CL = true;
          }
           if(objectList[i].img === waterDrop) {
            this.CL = false;
            this.thirst += 33;
            objectList.splice(i,1);
          }
          if(objectList[i].img === pickaxe) {
            win = true;
            objectList.splice(i,1);
          }
          break;
        }
       }
         for (var i=0; i<objectList.length;i++){
        if(this.posY > objectList[i].posY && this.posY <= objectList[i].posY + objectList[i].height && this.posX+this.width > objectList[i].posX && this.posX < objectList[i].posX + objectList[i].width) {
                    if((objectList[i] instanceof Trick && objectList[i].shown) || !(objectList[i] instanceof Trick)) {
                this.CO = true;
                this.posY = objectList[i].posY+objectList[i].height;
          }
           if(objectList[i].img === waterDrop) {
            this.CO = false;
            this.thirst += 33;
          }
          if(objectList[i].img === pickaxe) {
            win = true;
            objectList.splice(i,1);
          }
          break;
        }
      }

    }

    applyMovement(objektList,baggrundList) {
        if(this.movingRight && !this.CR) {
          this.moveRight(objektList,baggrundList);
          baggrundStart = baggrundStart - this.speed;
        }
        if(this.movingLeft && !this.CL) {
          this.moveLeft(objektList,baggrundList);
          baggrundStart = baggrundStart + this.speed;
        }
        if(this.jumping) {
          if(this.jumpCount < maxJump && !this.CO)
          {
            this.jumpCount = this.jumpCount + 1;
            this.posY = this.posY - jumpSpeed;
          }
          else {
            this.jumping = false
            this.jumpCount = 0;
          }
        }
    }
	animate() {
        fill(255,255,255);
        strokeWeight(5);
        rect(canvasX-300-15,15,305,25);
        strokeWeight(0);
        fill(0,0,255);
        rect(canvasX-this.thirst*3-15,17.5,this.thirst*3+2.5,20);
		if (!this.CU) {
				if(this.movingLeft) {
					push();
					scale(-1,1);
					image(jumpImg,-this.posX-this.width,this.posY,this.width,this.height);
				}
				else {
					image(jumpImg,this.posX,this.posY,this.width,this.height);
				}
		}
		else {
			if (this.movingLeft && !this.movingRight) {
                this.animateCount++;
				push()
				scale(-1,1)
				if(this.animateCount <= runningAnimationTime) {
						image(run1,-this.posX -   this.width,this.posY,this.width,this.height);
				}
              else if(this.animateCount >= runningAnimationTime && this.animateCount <= 2*runningAnimationTime) {
            image(run2,-this.posX -   this.width,this.posY,this.width,this.height);
              }
              else if(this.animateCount >= 2*runningAnimationTime) {
                            image(run3,-this.posX -   this.width,this.posY,this.width,this.height);
              }
              if (this.animateCount >= 3*runningAnimationTime) {
                       this.animateCount = 0;
                       }

				pop();
			}
			else if (this.movingRight && !this.movingLeft){
                  this.animateCount++;
if(this.animateCount <= runningAnimationTime) {
						image(run1,this.posX,this.posY,this.width,this.height);
				}
              else if(this.animateCount >= runningAnimationTime && this.animateCount <= 2*runningAnimationTime) {
            image(run2,this.posX,this.posY,this.width,this.height);
              }
              else if(this.animateCount >= 2*runningAnimationTime) {
                            image(run3,this.posX,this.posY,this.width,this.height);
              }
              if (this.animateCount >= 3*runningAnimationTime) {
                       this.animateCount = 0;
                       }
			}
			else if (!this.movingRight && !this.movingLeft || (this.movingRight && this.movingLeft)) {
				 image(standingImg,this.posX,this.posY,this.width,this.height);
			}
		}
	}

    update(objektList) {
      if(this.thirst <= 0) {
        scene = 100;
      }
      if(this.thirst >= 100) {
        this.thrist = 100;
      }
      if(!cutScene) {
          this.thirst = this.thirst-thirstRate;
      }
      this.checkCollision(objektList);
      this.applyGravity();
      this.applyMovement(objektList,baggrundList);
      this.animate();
      if(this.isTalking) {
        fill(0,0,0);
        if(this.duration <= this.talkTime) {
          image(talkBubble,this.posX+this.width-50,this.posY-200,200,200);
          this.duration++;
          textSize(20);
          text(this.talkString,this.posX+this.width-50+15,this.posY-185,180,180);
        }
        else {
          this.isTalking = false;
          this.duration = 0;
        }
      }
    }
  talk(string,time) {
    this.talkTime = time;
    this.isTalking = true;
    this.talkString = string;
  }
}

class Item {
  constructor(PosX,PosY,width,height, billede, repeat) {
    this.posX = PosX;
    this.posY = PosY;
    this.width = width;
    this.height = height;
    this.img = billede;
    this.repeat = repeat;
    this.duration = 0;
    this.talkTime;
    this.isTalking = false;
    this.talkString = "";
    this.side = true;
  }
  animate() {
    if(this instanceof Trick) {
      this.counter++;
      if(this.counter >= this.timer) {
        if(this.shown) {this.shown = false;} else {this.shown = true;}
        this.counter = 0;
      }
    }
    if((this instanceof Trick && this.shown) || !(this instanceof Trick)) {
  	if(!this.repeat) {
    console.log(this.img);
    image(this.img,this.posX,this.posY,this.width,this.height);
		}
    else {
    	let i = this.width/this.height;
    	for(var j = 0; j <= i-1; j++) {
				image(this.img,this.posX + this.height*j,this.posY,this.height,this.height);
    		}
    	}
    }
    if(this.isTalking) {
        fill(0,0,0);
        if(this.duration <= this.talkTime) {
          textSize(20);
          this.duration++;
          if(this.side) {
          image(talkBubble,this.posX+this.width,this.posY-200,180,180);
          text(this.talkString,this.posX+this.width+15,this.posY-185,200,150);
          }
          else {
            image(talkLeft,this.posX-150,this.posY-150,200,200);
            text(this.talkString,this.posX-135,this.posY-135,180,180);
          }
        }
        else {
          this.isTalking = false;
          this.duration = 0;
        }
    }

  }
  talk(string,time,side) {
    this.talkTime = time;
    this.isTalking = true;
    this.talkString = string;
    this.side=side;
  }

}

class Trick extends Item {
  constructor (posX,posY,width,height,img,repeat,timer) {
      super(posX,posY,width,height,img,repeat);
      this.timer = timer;
      this.counter = 0;
      this.isShown = true;
  }
}

class Renderer {
  rend(objecter,baggrund) {
    for(let i=0;i<objecter.length; i++) {
      objecter[i].animate();
    }
    for(let j = 0; j < baggrund.length; j++) {
    	baggrund[j].animate();
    }
  }
}
class Button {
	constructor(posX,posY,width,height,r,g,b) {
			this.posX = posX; this.posY = posY; this.width = width; this.height = height;
      this.red = r;
      this.green= g;
      this.blue = b;
	}
	mouseIsOver() {
		if(mouseX >= this.posX && mouseX <= this.posX + this.width && mouseY >= this.posY && mouseY <= this.posY + this.height)	{
			return true;
		}
		else {return false}
	}
	update() {
      if(this.mouseIsOver()) {
        fill(this.red,this.blue,this.green,200);
        rect(this.posX,this.posY,this.width,this.height,50);
      }
      else {
        fill(this.red,this.green,this.blue);
        rect(this.posX,this.posY,this.width,this.height,50);
      }
	}
	isPressed() {
		if(this.mouseIsOver() && mouseIsPressed) {
			return true;
		}
		else {
			return false;
		}
	}
}

function doBG (img,stuff) {
	let R = img.width/img.height;
  for(var i = -10; i<20;i++) {
    image(img,baggrundStart + i*R*canvasY,0,R*canvasY,canvasY);
  }
}

function summonEarth(string,time,size) {
  showPlanet = true;
  earthQuote = string;
  earthShowTime = time;
  earthTextSize = size;

}
let b1;
let objectList1;
let baggrundList1;
let baggrundListOG;
let objectListOG;
let renderer;
var baggrundList;
let baggrund;

//KeyPress Funktioner
function keyPressed() {
  if(keyCode === RIGHT_ARROW && !cutScene) {
    player.movingRight = true;
  }
  if(keyCode === LEFT_ARROW && !cutScene) {
    player.movingLeft = true;
  }
  if(keyCode === UP_ARROW && player.CU === true && !cutScene) {
    player.jumping = true;
  }
}
function keyReleased() {
  if (keyCode === RIGHT_ARROW && !cutScene) {
     player.movingRight = false;
  }
  if (keyCode === LEFT_ARROW && !cutScene) {
    player.movingLeft = false;
  }
  if(keyCode === UP_ARROW && !cutScene) {
  }
}

/*Toturial til at tilføje flere ting i verdenen:
Step 1: Find arrayen i setup der hedder "objectList"
Step 2: Skriv "new Item()"
Den tager 6 argumenter! Her kommer de i den rækkefølge de skal tastes:
x-kordinatet,y-kordinatet,højden,bredden, et billede der skal vises, en boolean der siger om billedet skal repeat eller strækkes til de givne værdier.
*/
//Setup og Draw
let originalList;
function setup(){
   originalList = new Array(new Item(-1000,canvasY-100,20000,100,sand,true),
                          new Item(-500,canvasY-100-75,50,50,waterDrop,false),
                          new Trick(-500,canvasY-400,200,100,bushImg,false,400),
                          new Trick(3300,canvasY-400,100,100,sand,false,100),
                          new Item(3700,canvasY-900,50,50,waterDrop,false),
                          new Trick(3500,canvasY-700,100,100,sand,false,80),
                          new Item(7800,canvasY-475,50,50,waterDrop,false),
                          new Item(5000,canvasY-400,3000,100,sand,true),
                          new Item(7800,canvasY-300,200,200,sand,false),
                          new Trick(8400,canvasY-500,100,100,sand,false,100),
                          new Trick(8000,canvasY-700,100,100,sand,false,67),
                          new Item(7700,canvasY-1000,50,50,waterDrop,false),
                          new Item(8800,canvasY-600,100,100,sand,false),
                          new Trick(9100,canvasY-1050,50,600,sand,false,75),
                          new Item(9300,canvasY-600,100,50,sand,false),
                          new Item(9800,canvasY-700,50,50,pickaxe,false));

objectList1 = originalList;

	createCanvas(canvasX, canvasY);
	b1 = new Button((canvasX-700)/2,500,700,200,178,25,98);
	player = new Player(canvasX/2 - spillerBredde/2,canvasY-100,spillerHojde,spillerBredde,speed);
    renderer = new Renderer();
    baggrundList = new Array(new Item(2300,canvasY-400,300,300,hut),new Item(2300,canvasY-300,100,200,african2,false),new Item(2450,canvasY-225,100,125,african1,false), new Item(4700,canvasY-600,125,125,skilt1,false),new Item(4700,canvasY-350,125,125,skilt2,false));

    baggrundList1 = new Array();
}

function draw() {
  console.log(originalList[0].posX);
    if (player.thirst >= 100) {
      player.thirst = 100;
    }
	if (scene === 100) {
      background(0,0,0);
      textSize(50);
      fill(255,0,0);
      textAlign(CENTER,CENTER);
        text("Du døde fordi du ikke fik nok vand",b1.posX,b1.posY-200,b1.width,300);
      fill(255);
      b1.update();
      fill(0,0,0);
      text("Prøv igen",b1.posX,b1.posY,b1.width,b1.height);
		if(b1.isPressed()) {
			scene=1;
            player.thirst = 100;
         objectList1 = originalList;

baggrundList = new Array(new Item(2300,canvasY-400,300,300,hut),new Item(2300,canvasY-300,100,200,african2,false),new Item(2450,canvasY-225,100,125,african1,false), new Item(4700,canvasY-600,125,125,skilt1,false),new Item(4700,canvasY-350,125,125,skilt2,false));
		}
      textAlign(LEFT,TOP);
	}
	if(scene===1) {
          doBG(bg);
          renderer.rend(objectList1,baggrundList);
        if(sceneTimer <= 1300) {
          cutScene = true;
          speed = 5;
          player.update(objectList1);
          sceneTimer++;
          if(sceneTimer <= 120) {
                player.movingRight=true;
          }
          if(sceneTimer === 120) {
            player.talk("Har I noget vand, jeg er mega tørstig",170);
            player.movingRight=false;
          }
          if(sceneTimer === 290) {
            baggrundList[1].talk("Nej, den nærmeste brønd ligger 10km væk herfa.",300,false);
          }
          if(sceneTimer === 590) {
                    summonEarth("Ca. 700 millioner folk i verden er nødt til at gå langt for at finde vand hver dag. Det er tid der kunne have været brugt på andre ting. Som uddannelse",300,18);
          }
          if(sceneTimer === 890) {
              player.talk("Hold da op! Jeg må hjælpe dem med at få lavet en brønd!",150)
            }
            if(sceneTimer === 1040) {
              summonEarth("Hjælp landsbyen ved at finde materialerne til at lave en brønd, men pas på, du kan risikere selv at tørste ude i ørkenen!",460,20)
            }

        }
      else {
        sceneTimer++;
        player.update(objectList1);

        if(objectList1[1].posX<= -3900 && temp) {
          temp = false;
         summonEarth("Hvor mange kroner om dagen er FN's fattigdomsgrænse?",300,28);
        }
        if(objectList1[1].posX <= -7400 && temp2) {
          temp2 = false;
          summonEarth("Hent hakken så landsbyen kan grave deres brønd!",200,26);
        }
        cutScene = false;
        if(win) {
          player.thirst = 100;
          winTimer++;
          if (winTimer === 1) {summonEarth("TILLYKKE! Du har fået materialerne landsbyen har brug for til at bygge deres brønd!",500,20);
          }

          if(winTimer === 520) {
            summonEarth("Nu kan landsbyen få en sikker vandforsyning og have mere tid til uddannelse og arbejde",500,20);
          }
          if(winTimer === 1040) {
            summonEarth("Hvis du synes det var sjovt at hjælpe andre folk kan du melde dig som frivillig",500,20);
          }
          if(winTimer === 1560) {
            summonEarth("Ellers kan du donere 75kr til red barnet. Det er nok til at give vand til to børnefamilier i to uger!",500,20);
          if(winTimer === 2080) {
            player.talk("Det vil jeg vildt gerne! Det var super fedt at hjælpe andre",300);
          }
          }
        }
      }
	}
	else if (scene === 2) {
		doBG(bg);
		renderer.rend(objectList,baggrundList);
		player.update(objectList);
	}
  if(showPlanet) {
    if(earthTimer <= earthShowTime) {
      earthTimer++;
      image(earth,600,300,200,200);
      image(talkBubble,700,100,300,200);
      fill(0,0,0);
      textSize(earthTextSize);
      text(earthQuote,720,120,260,180);
    }
    else {
      showPlanet = false;
      earthTimer = 0;
    }
  }
}
