var gato,rato;
var fundoImg;

function preload() {
fundoImg = loadImage("garden.png");
gatoImg1 = loadAnimation("cat1.png");
gatoImg2 = loadAnimation("cat2.png", "cat3.png")
ratoImg1 = loadAnimation("mouse1.png");
ratoImg2 = loadAnimation("mouse2.png", "mouse3.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
gato = createSprite(windowWidth/3, windowHeight/3);
gato.addAnimation(gatoImg1);
rato = createSprite(windowWidth/4,windowHeight/3);
rato.addAnimation(ratoImg1);
}

function draw() {

    background(fundoImg);
    //Write condition here to evalute if tom and jerry collide

if(gato.x - rato.x < (gato.width - rato.width)/2){
gato.velocityX = 0;
gato.addAnimation("catRunning", catimg2);
gato.changeAnimation("catRunning");

}

keyPressed();

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
  
if(keyCode === LEFT_ARROW){
rato.addAnimation("mouseTeasing", ratoImg2);
rato.changeAnimatioon("mouseTeasing");
rato.frameDelay = 25;

}
if(keyCode === RIGHT_ARROW){
  rato.addAnimation("mouseTeasing", ratoImg2);
  rato.changeAnimatioon("mouseTeasing");
  rato.frameDelay = 25;

}
  


}