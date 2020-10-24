var PLAY = 1;
var END = 0;
var gameState = PLAY;

var enemy,fruit1,fruit2,fruit3,fruit4,sword,gameover;
var enemyimage,fruit1image,fruit2image,fruit3image,fruit4image,swordimage,gameoverimage;

var enemygroup,fruitGroup;
var score=0;

function preload()
{
enemyimage=loadImage("alien1.png");  
fruit1image=loadImage("fruit1.png");
fruit2image=loadImage("fruit2.png");
fruit3image=loadImage("fruit3.png");
fruit4image=loadImage("fruit4.png");
gameoverimage=loadImage("gameover.png");
swordimage=loadImage("sword.png")
}

function setup()
{
  createCanvas(500,500);
sword=createSprite(200,50,10,10);
sword.addImage(swordimage);  
sword.scale=0.8  

enemygroup=createGroup();
fruitGroup=createGroup(); 
}


function draw()
{
  background("pink");
if(gameState===PLAY)
{
  sword.y=World.mouseY
  sword.x=World.mouseX
  text("score"+score,400,50)
    
    enemi();  
    fruitss();
  
  if(sword.isTouching(fruitGroup))
    {
      fruitGroup.destroyEach();
      score=score+2
    }
  if(enemygroup.isTouching(sword))
    {
      gameState=END
      sword.addImage(gameoverimage)
      sword.x=250;
      sword.Y=250;
    }
}
  
drawSprites();
}


function enemi()
{
  if(frameCount%200===0)
    {
  enemy=createSprite(200,600,10,10);
  enemy.addImage(enemyimage);
  enemy.y=Math.round(random(200,500));
  enemy.velocityX=-8
  enemy.setLifetime=50    
      
  enemygroup.add(enemy);    
}
}

function fruitss()
{
  if(frameCount%80===0)
  {
   var fruits=createSprite(500,100,20,20)
   fruits.scale=0.2
    r=Math.round(random(1,4));
    if(r===1)
      {
        fruits.addImage(fruit1image);
      }
    else if(r===2)
      {
        fruits.addImage(fruit2image);
      }
    else if(r===3)
      {
        fruits.addImage(fruit3image);
      }
    else 
      {
        fruits.addImage(fruit4image);
      }
    fruits.y=Math.round(random(50,340));
    
    fruits.velocityX=-3;
    fruits.setLifetime=250;
    
    fruitGroup.add(fruits);
  }
}






