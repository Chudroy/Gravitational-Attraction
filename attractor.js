function Attractor(x, y) {
  //Initialize Attractor position at random point in canvas
  this.getRandomPosition = function () {
    return createVector(random(width), random(height));
  };

  //Initialize Attractor at concrete location
  this.setPosition = function (x, y) {
    return createVector(x, y);
  };

  this.pos = this.setPosition(x, y);

  this.run = function () {
    //Toggle attractor display
    this.show(false);
  };

  this.show = function (showAttractors) {
    if (showAttractors === true) {
      push();
      noStroke();
      fill(100, 255, 100, 255);
      ellipse(this.pos.x, this.pos.y, 20);
      pop();
    }
  };
}
