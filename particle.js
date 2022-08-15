function Particle() {
    // this.pos = createVector(random(width), random(height))
    this.pos = createVector(width / 2, 0)
    this.vel = p5.Vector.random2D();
    this.vel.mult(2)
    this.acc = createVector(0, 0)
    this.run = function () {



        this.update();
        this.edges();
        this.show();

    }
    this.show = function () {
        push();
        stroke(255, 30)
        strokeWeight(1)
        point(this.pos.x, this.pos.y)
        pop();
    }
    this.update = function () {
        this.vel.add(this.acc);
        this.vel.limit(5)
        this.pos.add(this.vel);
        this.acc.mult(0)
    }
    this.applyForce = function (target) {
        let force = p5.Vector.sub(target, this.pos)
        let d = force.mag();
        d = constrain(d, 1, 25)
        var G = 100
        let strength = G / (d * d)
        force.setMag(strength)
        if (d < 20) {
            force.mult(-1);
        }
        this.acc.add(force)
        // line(dir.x,dir.y,this.pos.x,this.pos.y)
    }
    this.edges = function () {
        if (this.pos.x > width) this.vel.x *= -1
        if (this.pos.x < 0) this.vel.x *= -1
        if (this.pos.y > height) this.vel.y *= -1
        if (this.pos.y < 0) this.vel.y *= -1
    }

}