class Attractor {
  pos;

  constructor(x, y) {
    this.pos = SketchUtils.setPosition(x, y);
  }

  run() {
    //Toggle attractor display
    this.show(false);
  }

  show(showAttractors) {
    if (showAttractors === true) {
      push();
      noStroke();
      fill(100, 255, 100, 255);
      ellipse(pos.x, pos.y, 20);
      pop();
    }
  }
}
