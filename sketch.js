let tempSlider;
let temp = 20;

let count = 30;
let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  group = createDiv((''));
  tempSlider = createSlider(0, 373, 20);

  tempSlider.parent(group);

  group.position(20, 20);
  tempSlider.position(95, -3, "relative")
  for (let i = 0; i < count; i++) { particles.push(new Particle()); }
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
