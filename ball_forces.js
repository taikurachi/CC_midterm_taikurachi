//let gravity = createVector(0, 0.9);

class Ball {
	
  constructor(){
     this.mass = 1;
  	 this.position = createVector(width/2, height-20);
     this.velocity = createVector();
     this.acceleration = createVector(0, 0);
    this.gravity = createVector(0, 0.9);
  }

  update(){
    //this.velocity.add(this.gravity)
  	this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    //this.velocity.add(this.gravity);
    //this.position.y.add(this.velocity);
//this.velocity += this.gravity;
//this.position.y += this.velocity;
if(this.position.y<250){

this.velocity.sub(this.acceleration);
    this.position.sub(this.velocity);
        this.acceleration.div(0);
  //this.velocity = 0;
//this.position.y = 250;
}
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
  //stroke(0);
  strokeWeight(2);
  fill(255, 0, 0);
  ellipse(this.position.x,this.position.y, 40, 40);


 }




} // end ball class