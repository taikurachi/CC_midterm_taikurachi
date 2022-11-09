let b;
let colorChange = 255;
  
let colorPicker = .01*20;
function setup() {
  createCanvas(640, 360);

  b = new Ball();
 
}

function draw() {
  background(colorChange);
colorChange = colorChange - colorPicker;

  let gravity = createVector(0, 1.3);
  b.applyForce(gravity);

  if(keyIsDown(RIGHT_ARROW)){
    let wind = createVector(0.2, 0);
    b.applyForce(wind);
  }
if(keyIsDown(LEFT_ARROW)){
    let wind = createVector(-0.2, 0);
    b.applyForce(wind);
 }


  b.update(); 
  b.checkEdges2();
  b.display(); 

}