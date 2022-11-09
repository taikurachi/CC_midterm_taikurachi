let b;
let colorChange = 255;
let colorPicker = .01*20;
let particles = [];
//let p;

function setup() {
  createCanvas(640, 360);
  b = new Ball();

//p = new Particle();
}

function draw() {
  background(colorChange);
colorChange = colorChange - colorPicker;
//p.show();

textSize(32);
text('Escape the Box', 205, 40);

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



let p = new Particle();
particles.push(p);
for(let i=0; i<particles.length; i++) {
  particles[i].update();
  particles[i].display();
  //if(frameCount > 100) {
//systems.push(new ParticleSystem(createVector));
//p.display();
}
 


  b.update(); 
  b.checkEdges2();
  b.display(); 

}

/*
function mousePressed(){
  systems.push(new ParticleSystem( createVector(mouseX, mouseY)));
}
*/