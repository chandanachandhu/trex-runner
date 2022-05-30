var trex, trex_running;
var ground;
var ground_image;
var invisible_ground;


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

  ground_image = loadImage("ground2.png")


}



function setup(){
  createCanvas(600,200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  ground = createSprite(300,180,600,20);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.addImage(ground_image)

  invisible_ground= createSprite(300,190,600,10);
  invisible_ground.visible = false;


}


function draw(){
  background("white");

  if(keyDown("space"))
{
  trex.velocityY = -10;
}

//add gravity
trex.velocityY = trex.velocityY + 0.8;

trex.collide(invisible_ground);


if(ground.x <0)
{
  ground.x = ground.width/2;
}


drawSprites();
}