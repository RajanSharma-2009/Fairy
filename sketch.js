var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
}

function setup() {
	createCanvas(800,600);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.1;
	star.velocityY=5

	
	fairy = createSprite(600,300);
	fairy.addAnimation("flying",fairyImg);
	fairy.scale = 0.1;

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
	//star.debug=true
	//fairy.debug=true;
	fairy.setCollider("rectangle",400,0,200,200)
	
}


function draw() {
  background(bgImg);

  if (fairy.isTouching(star)) {
	star.velocityY=0
}

  //console.log(star.y);

  //if (fairy.isTouching(starBody)) {
//	Matter.Body.setStatic(star,true); 
//}

  drawSprites();

}

function keyPressed() {

	//writw code to move fairy left and right
	
}
