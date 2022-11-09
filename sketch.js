let b;


function setup() {
  createCanvas(640, 360);

  b = new Ball();
 
}

function draw() {
  background(231, 215, 50);
//b.display(); 




if(keyIsPressed){
  let gravity = createVector(0, -0.9);
  b.applyForce(gravity);
 //b.update(); 
  //b.checkEdges2();
  //b.display(); 
}

  //if(mouseIsPressed){
    //let wind = createVector(0.5, 0);
    //b.applyForce(wind);

//b.display(); 
 
  b.update(); 
  b.checkEdges2();
  b.display(); 
}
