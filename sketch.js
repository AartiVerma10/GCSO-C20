var speed, weight;
var deformation=0;

var wall, car;



function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  
   deformation = (0.5*speed*speed*weight)/22500;

  wall = createSprite(1500, 200, 60, 200);
  wall.shapeColor=(80,80,80);

  car = createSprite(50,200,50,50);
  car.velocityX=speed;

  console.log(deformation);
  console.log(speed);
  console.log(weight);


}

function draw() {
  background(0);
  

  if(car.collide(wall)){
 
    car.velocityX=0;

  if(deformation<100){
    // green color
    car.shapeColor=rgb(37,246,24);

  }
  if(deformation>=100 && deformation<180){
    // yellow color
    car.shapeColor=("yellow");  
      
  }
  if(deformation>180){
    // red color
    car.shapeColor=("red"); 
     
  }

}
  
  drawSprites();
}