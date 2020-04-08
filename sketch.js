var fixedRect, movingRect;
var rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(300,400,60,60);
  rect1.shapeColor="blue";
  rect2=createSprite(900,400,60,60);
  rect2.shapeColor="blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1.velocityX= +5
  rect2.velocityX= -5
}

function draw() {
  background(0,0,0);  

/*   bounceOff(movingRect,fixedRect);
  bounceOff(rect1,rect2); */

  drawSprites();
}

/* function bounceOff(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}  */

