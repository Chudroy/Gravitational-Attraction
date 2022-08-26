class Particle {
  constructor() {}
  // pos = createVector(random(width), random(height));
  pos = createVector(width / 2, 0);
  vel = p5.Vector.random2D().mult(2);
  acc = createVector(0, 0);
  delay = 30;

  run() {
    this.update();
    this.edges();
    this.show();
    if (frameCount >= this.delay) {
      this.applyAttractors();
      // this.applyMouseForce();
    }
  }

  show() {
    push();
    stroke(255, 30);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
    pop();
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  //Particles gravitate towards mouse
  applyMouseForce() {
    let mousePos = createVector(mouseX, mouseY);
    this.applyForce(mousePos);
  }

  //Particles gravitate toward attractor points
  applyAttractors() {
    //WARNING: GLOBAL VARIABLE {{attractors}} from sketch.js
    for (let i = 0; i < attractors.length; i++) {
      this.applyForce(attractors[i].pos);
    }
  }

  applyForce = function (target) {
    let force = p5.Vector.sub(target, this.pos);
    let d = force.mag();
    d = constrain(d, 1, 25);
    var G = 100;
    let strength = G / (d * d);
    force.setMag(strength);
    if (d < 20) {
      force.mult(-1);
    }
    this.acc.add(force);
    // line(dir.x,dir.y,pos.x,pos.y)
  };

  //Edge detection, bounce back
  edges() {
    if (this.pos.x > width) this.vel.x *= -1;
    if (this.pos.x < 0) this.vel.x *= -1;
    if (this.pos.y > height) this.vel.y *= -1;
    if (this.pos.y < 0) this.vel.y *= -1;
  }
}
