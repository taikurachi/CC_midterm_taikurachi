let b;
let colorChange = 255;
let colorPicker = .01*20;
let particles = [];
let explosion = [];


function setup() {
  createCanvas(640, 360);
  angleMode(DEGREES);
  b = new Ball();


}

function draw() {
  background(colorChange);
colorChange = colorChange - colorPicker;


textSize(32);
fill(30, 230,30);
text('Escape the Box!', 205, 40);
textSize(18);
text('Use arrow keys to move left and right', 173, 62);
textSize(16);
text('Level: 1', 293, 80);

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

  for(let i = 0; i<5; i++) {
  let p = new Particle();
  particles.push(p);
}
//let p = new Particle();
//particles.push(p);


//1300 for good timing 
  if(frameCount > 1300) {
for(let i=particles.length-1; i>=0; i--) {
  particles[i].update();
  particles[i].display();

  //if(particles[i].finished()) { //cut the fire particles off 
  //particles.splice(i,1);
//}
}
}

//tried to work with explosion particles
/*
if(random(1) > .97){
for(let i = 0; i< 100; i++) {
  let e = new Explosion();
explosion.push(e);
}
}
for (let i =explosion.length-1; i>= 0; i--){
  explosion[i].update();
  explosion[i].display();
}

*/
}

