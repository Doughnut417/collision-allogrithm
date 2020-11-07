var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor ="pink";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor ="pink";
  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x);
  console.log("movingRect.x - fixedRect.x =" + (movingRect.x - fixedRect.x ));
  console.log("fixedRect.width/2 + movingRect.width/2 = " + ((fixedRect.width/2) + (movingRect.width/2)));
  if((movingRect.x - fixedRect.x ) < ((fixedRect.width/2) + (movingRect.width/2)) &&
    (fixedRect.x - movingRect.x) < ((fixedRect.width/2) + (movingRect.width/2))&&
    (movingRect.y - fixedRect.y ) < ((fixedRect.width/2) + (movingRect.width/2)) &&
    (fixedRect.y - movingRect.y) < ((fixedRect.width/2) + (movingRect.width/2)))
  {
    fixedRect.shapeColor ="purple";
    movingRect.shapeColor ="purple";
  }
  else
  {
    fixedRect.shapeColor ="pink";
    movingRect.shapeColor ="pink";
  }
  drawSprites();
}