let b;
let colorChange = 255;
let colorPicker = .01*20;
let particles = [];
//let explosion = [];
let xloc = 0
let eyeBrow1 = 157;
let Green = 20;
let Blue = 20;
let Red = 175;
let Darker = 2;
let EllipseRed = 255;
let White = 255; 

function setup() {
  createCanvas(640, 360);
  //angleMode(DEGREES);
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

  let gravity = createVector(0, 1.3); //applying realistic physics
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


if(frameCount > 1600) {
background(random(200, 255), random(0, 70), random(0, 80)); //spazz effect before explosion
//RandomRed++;
//RandomGreen++;
//RandomBlue++;
}

if(frameCount > 1800) { //explosion effect using array (slow motion effect for the first scene)
    background(0);
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


if(frameCount > 2250) { //sped up version using different update function


background(0);
for(let i=particles.length-1; i>=0; i--) {
  particles[i].update2();
  particles[i].display();
}
}

if(frameCount > 2375) { //clear the explosion
background(0);
}

if(frameCount > 2485) {
  fill(255);
  textSize(45);
  text('The End', xloc, 50); //ending scene
  xloc=xloc + 2.2;
}

if(frameCount > 2485) {
fill(EllipseRed, 0, 0);
ellipse(width/2, height/2, 85, 85);
stroke(White);
strokeWeight(3);
//let eyeBrow2 = 
line(280, eyeBrow1, 305, 157);
line(335, 157, 360, eyeBrow1);
eyeBrow1 = eyeBrow1 - .09; //to raise eyebrows, summary of the emotions the ball went through
//eyeBrow2 = eyeBrow2 + 1;

}


if(eyeBrow1<= 142) { //to prevent eyebrows from going too high
  eyeBrow1=142;
}
if(frameCount > 2650) { //shape to disappear
EllipseRed-= 1.5;
White-= 1.5;
}





}