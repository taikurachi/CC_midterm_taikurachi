class Particle {

constructor() {
    this.x = 300;
    this.y = 380;
    this.newX = random(-1,1);
    this.newY = random(-5,5);
this.alpha = 255;

  }


update () {
this.x += this.newX;
this.y += this.newY;
this.alpha -= 5;


}

display() {
  stroke(255);
  fill(255,10);
  ellipse(this.x, this.y, 16);
}


}