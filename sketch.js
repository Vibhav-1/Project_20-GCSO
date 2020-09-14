var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(200, 200, 80,  55);
  wall = createSprite(1500, 200, 30, 200);
 
  speed = random(55,90);
 // speed = random(25,50);
  weight = random (400, 1500);
  car.velocityX = speed;

  car.shapeColor = "black";
  deformation = 0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255);  

 // console.log(car.x-wall.x +70);
  //console.log(wall.width/2 + car.width/2);
if ((car.x - wall.x)+100 >= (wall.width/2 + car.width/2)) {
  console.log("CAR velocity shd be 0");
    car.velocityX = 0;
  //  console.log("deformation");
   // console.log(deformation);
}

if (deformation >= 180 && car.velocityX === 0){
 car.shapeColor = "red";
}

if (deformation <= 100 && car.velocityX === 0){
  car.shapeColor = "green";
 }

 if (deformation < 180 && deformation > 100 && car.velocityX === 0){
  car.shapeColor = "yellow";
 }

  drawSprites();
}