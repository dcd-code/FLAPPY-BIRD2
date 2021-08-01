var bg,bgImg;
var birdImg;
var bird;




function preload(){
  
  birdImg = loadImage("assets/bird.png")

  pipe1 = loadImage("assets/Bpipe1.png")
  pipe2 = loadImage("assets/Tpipe2.png")
  pipe3 = loadImage("assets/Tpipe3.png")
  pipe4 = loadImage("assets/Bpipe4.png")
  pipe5 = loadImage("assets/Bpipe5.png")

  
  pipe6 = loadImage("assets/Tpipe6.png")
  pipe7 = loadImage("assets/Bpipe7.png")
  pipe8 = loadImage("assets/Bpipe8.png")
  pipe9 = loadImage("assets/Tpipe9.png")
  pipe10 = loadImage("assets/Tpipe10.png")

  

  bgImg = loadImage("assets/background.png")

}

function setup() {

  
  createCanvas(1230,620);

  bird=createSprite(100,400,5,5);
bird.scale=0.4;

bird.addImage(birdImg);
  //adding the background image
  //bg = createSprite(0,0,800,800)

//bg.scale = 1.1

tPipesGroup=new Group();

bPipesGroup=new Group();
  



}

function draw() {
  background(bgImg); 





if(keyDown("space")&& bird.y>=100){
 
 bird.velocityY=-12

 
}
bird.velocityY=bird.velocityY+0.6


spawnTopPipes();
spawnBottomPipes();

drawSprites();

}





function spawnTopPipes(){
  if(frameCount%50===0){


  var tPipe=createSprite(1200,20,40,200);
  tPipe.velocityX= -6;
  tPipe.scale=2;
  tPipesGroup.add(tPipe);
 var r = Math.round(random(1,5));
 switch(r){
   case 1: tPipe.addImage(pipe2)
   break;
   case 2: tPipe.addImage(pipe3)
   break;
   case 3: tPipe.addImage(pipe6)
   break;
   case 4: tPipe.addImage(pipe9)
   break;
   case 5: tPipe.addImage(pipe10)
   break;
 }
 }
}





function spawnBottomPipes(){
  if(frameCount%50===0){
  var bPipe=createSprite(1200,525,40,200);
  bPipe.scale=2
  bPipe.velocityX= -6;
  bPipesGroup.add(bPipe);
 var rand = Math.round(random(1,5));
 switch(rand){
   case 1: bPipe.addImage(pipe1)
   break;
   case 2: bPipe.addImage(pipe4)
   break;
   case 3: bPipe.addImage(pipe5)
   break;
   case 4: bPipe.addImage(pipe7)
   break;
   case 5: bPipe.addImage(pipe8)
   break;
 }
 }
}