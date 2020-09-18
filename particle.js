class Particle {
    constructor() {
        var direction = random(360)
        let xDir, yDir;

        if (direction < 90) {
            xDir = map(direction, 0, 90, 0, 1);
            yDir = map(direction, 0, 90, 1, 0);
        } else if (direction < 180) {
            xDir = map(direction, 90, 180, 1, 0);
            yDir = map(direction, 90, 180, 0, 1);
        } else if (direction < 270) {
            xDir = map(direction, 180, 270, 0, -1);
            yDir = map(direction, 180, 270, -1, 0);
        } else {
            xDir = map(direction, 270, 360, -1, 0);
            yDir = map(direction, 270, 360, 0, -1);
        }

        this.velocity;
        this.direction = createVector(xDir, yDir);
        this.position = createVector(random(width), random(height));
    }

    update() {
        particles.forEach(p => {
            if ((dist(p.position.x, p.position.y, this.position.x, this.position.y) < 10) && p !== this) {
                this.flip(-1);
            }
        });
        if (this.position.x < 0 || this.position.x > windowWidth) {
            this.flip(0);
        }
        if (this.position.y < 0 || this.position.y > windowHeight) {
            this.flip(1);
        }
        this.velocity = createVector(temp*0.1*this.direction.x, temp*0.1*this.direction.y);
        this.position.add(this.velocity);
    }

    flip(d) {
        if (d == 0) {
            this.direction.x = -this.direction.x;
        } else if (d == 1) {
            this.direction.y = -this.direction.y;
        } else {
            this.direction.y = -this.direction.y;
            this.direction.x = -this.direction.x;
        }
    }

    show() {
        stroke(255, 0, 0);
        fill(255, 0, 0);
        ellipse(this.position.x, this.position.y, 10, 10);
    }
}