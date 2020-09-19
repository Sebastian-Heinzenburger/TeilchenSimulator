class Particle {
    
    constructor() {
        this.velocity;
        let xDir, yDir;
        this.ticksToFlipped = 0;
        var direction = random(360)

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

        this.direction = createVector(xDir, yDir);
        this.position = createVector(random(windowWidth), random(windowHeight));
    }

    update() {
        if (this.position.x < 0 || this.position.x > windowWidth) {
            this.direction.x = -this.direction.x;
        }
        if (this.position.y < 0 || this.position.y > windowHeight) {
            this.direction.y = -this.direction.y;
        }
        
        particles.forEach(p => {
            if (this.ticksToFlipped == 0) {
                if ((dist(p.position.x, p.position.y, this.position.x, this.position.y) < 10) && p !== this) {
                    this.ticksToFlipped = 15*temp;
                    if (abs(this.position.x - p.position.x) > abs(this.position.y - p.position.y)) {
                        this.direction.x = -this.direction.x;
                    } else {
                        this.direction.y = -this.direction.y;
                    }
                }
            } else {
                this.ticksToFlipped--;
            }
        });

        this.velocity = createVector(temp*0.1*this.direction.x, temp*0.1*this.direction.y);
        this.position.add(this.velocity);
    }

    show() {
        stroke(255, 0, 0);
        fill(255, 0, 0);
        ellipse(this.position.x, this.position.y, 10, 10);
    }
}
