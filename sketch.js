let tempSlider;
let temp = 20;

let count = 40;
let particles = [];
var label;

function setup() {
  createCanvas(windowWidth, windowHeight);
  group = createDiv((''));
  group.position(20, 20);
  tempSlider = createSlider(0, 373, 273);
  tempSlider.parent(group);
  tempSlider.position(95, -3, "relative")

  createParticles();
}

function createParticles() {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(60);

    particles.forEach(p => {
        p.update();
        p.show();
    });

    temp = tempSlider.value();
    stroke(0, 0, 0);
    fill(0, 0, 0);
    textSize(16);
    text("Temp: " + temp + " °K", 12, 35)
    temp = map(temp, 0, 373, 0, 100);
}