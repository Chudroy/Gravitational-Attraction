let attractors = [];
let particles = [];
let randomVector

function setup() {
  randomVector = createVector(random(width), random(height))
  createCanvas(1080, 920);
  for (let i = 0; i < 0; i++) {
    attractors.push(new Attractor())
  }
  for (let i = 0; i < 2000; i++) {
    particles.push(new Particle())
  }
  background(0);
}

function draw() {

  // renderAnimation();
  console.log(frameCount)

  for (let i = 0; i < attractors.length; i++) {
    attractors[i].run();
  }
  for (let i = 0; i < particles.length; i++) {
    particles[i].run();
  }

  // let r = random(1)

  // if (r < 0.1) {
  //   attractors.push(new Attractor())
  // }

  // for (let i = 0; i < particles.length; i++) {
  //   let particle = particles[i]
  //   for (let j = 0; j < attractors.length; j++) {
  //     particle.applyForce(attractors[j].pos)
  //   }
  // }

  let mouseVector = createVector(mouseX, mouseY)
  let attVec01 = createVector(width / 2, 0);
  let attVec02 = createVector(width / 2, height / 2);
  // let attVec03 = createVector(width / 2, height / 2 + height / 4);
  // let attVec04 = createVector(width / 2 + width / 4, height / 2 + height / 4);
  // let attVec05 = createVector(width / 4, height / 2 + height / 2 + height / 4);
  push()
  fill(0, 255, 0)
  ellipse(width / 2, 0, 20)
  ellipse(width / 2, height / 2, 20)
  ellipse(width / 2, height / 2 + height / 4, 20)
  ellipse(width / 2 + width / 4, height / 2 + height / 4, 20)
  ellipse(width / 4, height / 2 + height / 4, 20)
  pop();
  for (let i = 0; i < particles.length; i++) {
    if (frameCount > 300) {
      particles[i].applyForce(attVec01)
      particles[i].applyForce(attVec02)
      // particles[i].applyForce(attVec03)
      // particles[i].applyForce(attVec04)
      // particles[i].applyForce(attVec05)
    }
  }
  if (attractors.length > 1) {
    attractors.splice(0, 1)
  }
}


function mousePressed() {
  let newAttractor = new Attractor();
  newAttractor.pos = createVector(mouseX, mouseY)
  attractors.push(newAttractor)
}

function renderAnimation() {
  if (frameCount === 1) {
    capturer.start();
  }

  capturer.capture(canvas)

  if (keyIsPressed && keyCode == BACKSPACE) {
    capturer.save();
    capturer.stop();
  }
}