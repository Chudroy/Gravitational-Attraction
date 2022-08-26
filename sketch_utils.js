class SketchUtils {
  // ATTRACTOR BEHAVIOUR

  randomAttractorPlacement() {
    let r = random(1);
    if (r < 0.1) {
      attractors.push(new Attractor());
    }
    for (let i = 0; i < particles.length; i++) {
      let particle = particles[i];
      for (let j = 0; j < attractors.length; j++) {
        particle.applyForce(attractors[j].pos);
      }
    }
  }

  static createAttractor(options) {
    let newAttractor = new Attractor();
    newAttractor.pos = createVector(mouseX, mouseY);
    attractors.push(newAttractor);
    if (options.DeleteOldestAttractor === true) {
      attractors.splice(0, 1);
    }
  }

  limitAttractors() {
    if (attractors.length > 1) {
    }
  }

  // POSITIONING

  //Initialize Attractor position at random point in canvas
  static getRandomPosition() {
    return createVector(random(width), random(height));
  }

  //Initialize Attractor at concrete location
  static setPosition(x, y) {
    return createVector(x, y);
  }

  // LOOPING

  static toggleLoop() {
    if (isLooping()) {
      noLoop();
    } else if (!isLooping()) {
      loop();
    }
  }

  // RENDERING

  //Render animation to video
  static renderAnimation() {
    if (frameCount === 1) {
      capturer.start();
    }

    capturer.capture(canvas);

    if (keyIsPressed && keyCode == BACKSPACE) {
      capturer.save();
      capturer.stop();
    }
    console.log(frameCount);
  }
}
