function Attractor() {
    // this.pos = createVector(random(width), random(height))
    this.pos = createVector(random(width), random(height))


    this.run = function () {
        // this.show();
    }

    this.show = function () {
        push();
        noStroke();
        fill(100, 200, 100)
        ellipse(this.pos.x, this.pos.y, 20)
        pop();
    }
}