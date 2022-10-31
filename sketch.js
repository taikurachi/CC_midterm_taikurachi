let b;

//ball b
//ball c

function setup() {
  createCanvas(640, 360);

  b = new Ball();
 
}

function draw() {
  background(23);


  let gravity = createVector(0, 1.3);
  b.applyForce(gravity);

  if(mouseIsPressed){
    let wind = createVector(0.1, 0);
    b.applyForce(wind);
  }

 
  b.update(); 
  b.checkEdges2();
  b.display(); 
}