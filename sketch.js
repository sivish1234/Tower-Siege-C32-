const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var polygon;
var slingshot;
var score = 0;
var bg;

function preload() {
  polyImg = loadImage("hexagon.png");
  /*bg1 = loadImage("bg1.png");
  bg2 = loadImage("bg2.png");*/
  //bg = loadImage("bg.jpg");
  backgroundChange();
}

function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;

  mainGround = new Ground(500,388,1000,25);
  ground1 = new Ground(390,276,250,25);
  ground2 = new Ground(700,240,200,25);
  
  //PYRAMID 1
  //bottom row
  fill("lightblue");
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  
  //2nd row
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);

  //3rd row
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);

  //top row
  block16 = new Block(390,155,30,40);
  
  //PYRAMID 2
  //bottom row
  blockB1 = new Block(640,239,30,40);
  blockB2 = new Block(670,239,30,40);
  blockB3 = new Block(700,239,30,40);
  blockB4 = new Block(730,239,30,40);
  blockB5 = new Block(760,239,30,40);
  
  //second row
  blockB6 = new Block(670,199,30,40);
  blockB7 = new Block(700,199,30,40);
  blockB8 = new Block(730,199,30,40);

  //top row
  blockB9 = new Block(700,159,30,40);
 
  //creating a slingshot
  var options ={
    density: 2,
    friction:1,
    restitution: 0.8
  }

  polygon = Bodies.circle(50,200,20,options);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x: 120, y: 190});

  Engine.run(engine);
}

function draw() {
  imageMode(CENTER);
  if(bg) {
    image(bg, 500,200,1000,400);
  }
  Engine.update(engine);
  
  mainGround.display();
  ground1.display();
  ground2.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  blockB1.display();
  blockB2.display();
  blockB3.display();
  blockB4.display();
  blockB5.display();
  blockB6.display();
  blockB7.display();
  blockB8.display();
  blockB9.display();

  //score
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blockB1.score();
  blockB2.score();
  blockB3.score();
  blockB4.score();
  blockB5.score();
  blockB6.score();
  blockB7.score();
  blockB8.score();
  blockB9.score();

  imageMode(CENTER);
  image(polyImg,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
 // backgroundChange();
  
  fill("red");
  stroke("black");
  textSize(20);
  text("Press space to serve again!", 100,50);
  text("Score: " + score, 850, 40);
  console.log(score);
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		slingshot.attach(polygon);
	}
}

async function backgroundChange(){
  var api = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var json = await api.json();

  var datetime = json.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=19){
    bg = loadImage("bg1.png");
  }
  else{
    bg = loadImage("bg2.jpg")  
  }
  
  console.log(hour);

}

