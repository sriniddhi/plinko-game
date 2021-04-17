var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
  
var particles = [];
var plinkos = [];
var divisions =[];
var divisionsHeight=300;




function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(400,690,800,20);

  
  for (var i = 0; i <=width; i = i + 80) {
 divisions.push(new Divisions(i, height-divisionsHeight/2, 10, divisionsHeight));
  }

  // 1st row 
  for (var j = 75; j <=width; j = j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  // 2nd row 
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  // 3rd row 
  for(var j=75;j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  
  // 4th row 
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }


 
Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  textSize(20)
 
  
  
 


  for (var n = 0; n < divisions.length; n++) {
    divisions[n].display();   
  }
   
 if(frameCount %65===0){
    particles.push(new Particle(random(width/2-30, width/2+30),10,10));

 }

 for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}


  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();
  }

    ground.display();


    
}
//drawSprites();