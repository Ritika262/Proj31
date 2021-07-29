var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var k = 0; k <=170; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var k = 0; k <=260; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=320; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=420; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=500; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=600; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 0; k <=980; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  
  
  
  
  //create 1st row of plinko objects
  for (var j = 55; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 30; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 40; j <=width-15; j=j+50) 
  {
  plinkos.push(new Plinko(j,265));
  }
  
  //create 4th row of plinko objects
  for (var j = 20; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,365));
  }

  //create particle objects
  
}
    

 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  text("300",20,700);
  text("400",100,700);
  text("100",180,700);
  text("200",260,700);
  text("500",340,700);
  text("300",420,700);
  text("200",500,700);
  text("100",580,700);
  text("400",660,700);
  text("500",735,700);

   

  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  //if(particle.body.position.y>900){
    //if (particle.body.position.x<300) {
     // score = score+500;
   // }
  //}




  //display the paricles 
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10))
   
}

for(var p=0;p<particles.length;p++){
  particles[p].display();
}
//drawSprites();
}
