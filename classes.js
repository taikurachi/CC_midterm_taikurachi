explosion = [];

class Ball {
  
  constructor(){
     this.mass = 1;
     this.position = createVector(width/2, height/2);
     this.velocity = createVector();
     this.acceleration = createVector(0, 0);
    this.R = 250;
  this.G = 247;
  this.B = 67;
this.sizingW = 40;
this.sizingH = 40;
  }

  update(){

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

  }

update2(){
this.position.x += random(-15,15);
this.position.y += random(-15, 15);


}
  applyForce(force){
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);


  }

  checkEdges(){

  if (this.position.x > width) {
      this.position.x = 0;
  }
  else if (this.position.x < 0) {
     this.position.x = width;
  }
    
  if (this.position.y > height){

    this.position.y = 0;
  }
  else if(this.position.y <0){
       this.position.y = height;

  }

}

checkEdges2(){

  if (this.position.x > width) {
      this.position.x = width;
      this.velocity.x *= -1;
  }
  else if (this.position.x < 0) {
     this.position.x = 0;
     this.velocity.x *= -1;
  }
    
  if (this.position.y > height){

    this.position.y = height;
    this.velocity.y *= -1;
  }
  else if(this.position.y <0){
       this.position.y = 0;
       this.velocity.y *= -1;

  }

}


 display(){
  stroke(0);
  let gradColor = .01*17;

  //strokeWeight(2);
  fill(this.R, this.G, this.B);
  ellipse(this.position.x,this.position.y, this.sizingH, this.sizingW);
this.B = this.B - gradColor;
this.G = this.G - gradColor;
this.sizingH = this.sizingH + gradColor;
this.sizingW = this.sizingW + gradColor;

if((this.sizingW && this.sizingH) >= 200){
  this.sizingW++;
  this.sizingH++;
this.position.x += random(-30,30);
this.position.y += random(-30,30);
}
}
}


class Explosion {
  constructor() {
    this.pos = createVector(0,0,0);
    this.vel = p5.Vector.random2D().mult(random(4, 6));
  }

update() {
  this.pos.add(this.vel);

}

display() {
push();

noStroke();

fill(255);
translate(this.pos.x, this.pos.y);
sphere(10);


pop();


}
}



