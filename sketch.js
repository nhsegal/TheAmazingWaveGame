//discrete wave equation with staggered leapfrog?
//Mur's boundary condition
// r must be <= 1

/*
To do:


*/
let chain;
let dragging;
let dt;
let dx = 1;
let waveSpeed;
let r;
let resetButton;
let radio;
let end;
let level;

function setup() {
  createCanvas(800, 300);

  chain = new Chain(width);
  dragging = false;
  dt = 0.1;
  waveSpeed = 10;
  frameRate(160);
  resetButton = createButton("Reset");
  resetButton.position(10, height - 50);
  resetButton.size(100, 40);
  resetButton.style("font-size", "20px");
  resetButton.style("background-color", color(240, 240, 130));
  resetButton.mousePressed(reset);
  r = (waveSpeed * dt) / dx;
  console.log(r);
  radio = createRadio("Right Side fixed");
  radio.style("font-family", "Helvetica");
  radio.option("Right side fixed");
  radio.option("Right side free");
  radio.selected("Right side fixed");
  radio.style("width", "140px");

  textAlign(CENTER);
  radio.position(width - 140, height - 50);

  level = createSelect();
  level.position(145, 7);
  level.selected(" ");
  level.option(" ");
  level.option("1");
  level.option("2");
  level.option("3");
  level.option("4");
  level.option("5");
  level.changed(reset);

  pen1 = new Pen(0, 250, color(0));
  pen2 = new Pen(0, 250, color(0));
  pen3 = new Pen(0, 250, color(0));
  pen4 = new Pen(0, 250, color(0));
}

function draw() {
  background(220);
  fill(0);
  textSize(14);
  text("Select the challenge:", 75, 20);
  stroke(0);
  line(0, height / 2, width, height / 2);
  line(0, height / 3, width, height / 3);
  line(0, (2 * height) / 3, width, (2 * height) / 3);
  end = radio.value();

  let item = level.value();
  noStroke();
  levelSet(item);
  if (dragging) {
    chain.links[0].fy = mouseY - height / 2;
  }
  chain.links[0].py = chain.links[0].y;
  chain.links[0].y = chain.links[0].fy;
  chain.move();
  chain.display();
}

class Link {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.py = 0;
    this.fy = 0;
    this.linkSize = s;
  }
  display(y) {
    noStroke();
    circle(this.x, y, this.linkSize);
  }
}

class Chain {
  constructor(len) {
    this.length = len;
    this.linkSize = 5 * dx;
    this.links = [];
    for (let i = 0; i < this.length / this.linkSize; i++) {
      this.links.push(
        new Link(i * this.linkSize + this.linkSize / 2, 0, this.linkSize)
      );
    }
  }
  display() {
    for (let i = 0; i < this.links.length - 1; i = i + 1) {
      if (i == 0) {
        fill(250, 0, 0);
        noStroke();
        circle(
          this.links[0].x + this.linkSize,
          this.links[0].y + height / 2,
          this.linkSize * 3
        );
      } else {
        fill(0);
        circle(
          this.links[i].x,
          (this.links[i + 1].y + this.links[i].y + this.links[i + 1].y) / 3 +
            height / 2,
          this.linkSize
        );
      }
    }
    if (end === "Right side fixed") {
      fill(0, 0, 240);
    } else {
      fill(0, 200, 0);
    }
    circle(
      this.links[this.links.length - 1].x,
      this.links[this.links.length - 1].y + height / 2,
      2 * this.linkSize
    );
  }
  move() {
    for (let i = 1; i < this.links.length - 1; i++) {
      this.links[i].fy =
        r *
          r *
          (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y) +
        2 * this.links[i].y -
        this.links[i].py;
    }
    if (end == "Right side free") {
      chain.links[chain.links.length - 1].fy =
        -r *
          r *
          (this.links[chain.links.length - 1].y -
            this.links[chain.links.length - 2].y) +
        2 * this.links[chain.links.length - 1].y -
        this.links[chain.links.length - 1].py;
    } else {
      chain.links[chain.links.length - 1].fy = 0;
    }

    if (!dragging) {
      chain.links[0].fy =
        chain.links[1].y +
        ((r - 1) / (r + 1)) * (chain.links[1].fy - chain.links[0].y);
      chain.links[0].y = chain.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i++) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}

class Pen {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.color = color(c);
    this.hit = false;
  }
  display() {
    fill(this.color);
    noStroke();
    if (this.hit) {
      rect(this.x, this.y, this.r, this.r * 5);
    } else {
      circle(this.x, this.y, this.r);
    }
  }
  hitCheck() {
    if (
      this.x > chain.links[floor(this.x / chain.linkSize)].x - chain.linkSize &&
      this.x < chain.links[floor(this.x / chain.linkSize)].x + chain.linkSize &&
      
      (this.y > chain.links[floor(this.x / chain.linkSize)].y - chain.linkSize +
          height / 2 &&
      this.y < height / 2) ||
      
       (this.y < chain.links[floor(this.x / chain.linkSize)].y + chain.linkSize +
          height / 2 &&
      this.y > height / 2)
      
    ) {
     
      this.hit = true;
    }
  }
}

function mousePressed() {
  if (
    dist(chain.links[0].x, chain.links[0].y + height / 2, mouseX, mouseY) <
    (3 * chain.linkSize) / 2
  ) {
    dragging = true;
  }
}
function mouseReleased() {
  dragging = false;
}
function reset() {
  dragging = false;
  chain = new Chain(width);
  pen1.hit = false;
  pen2.hit = false;
  pen3.hit = false;
  pen4.hit = false;
}
function levelSet(item) {
  switch (item) {
    case "1":
      text("Hit the purple spot with the chain", width / 2, 20);
      text("but do not hit any orange spots.", width / 2, 34);
      pen1.x = chain.links[chain.links.length - 4].x;
      pen1.y = 10;
      pen1.color = color(100, 0, 200);
      pen2.x = chain.links[chain.links.length / 2].x;
      pen2.y = 60;
      pen2.color = color(250, 100, 0);

      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      break;
    case "2":
      text("Hit the purple spots with the chain", width / 2, 20);
      text("but do not hit any orange spots.", width / 2, 34);
      pen1.x = chain.links[chain.links.length - 20].x;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(100, 0, 200);

      pen2.x = chain.links[chain.links.length - 4].x;
      pen2.y = (1.5 * height) / 5;
      pen2.color = color(250, 100, 0);

      pen3.x = chain.links[chain.links.length - 20].x;
      pen3.y = (1.5 * height) / 5;
      pen3.color = color(100, 0, 200);

      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      break;

    case "3":
      text("Hit the purple spot with the chain", width / 2, 20);
      text("but do not hit any orange spots.", width / 2, 34);
      pen1.x = 402;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(100, 0, 200);
      pen2.x = 292;
      pen2.y = (3.5 * height) / 5;
      pen2.color = color(250, 100, 0);
      pen3.x = 512;
      pen3.y = (3.5 * height) / 5;
      pen3.color = color(250, 100, 0);
      pen4.x = 792;
      pen4.y = (3.5 * height) / 5;
      pen4.color = color(250, 100, 0);
      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      pen4.hitCheck();
      pen4.display();
      break;

    case "4":
      text("Hit the purple spot with the chain", width / 2, 20);
      text("but do not hit any orange spots.", width / 2, 34);
      pen1.x = 402;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(250, 100, 0);
      pen2.x = 292;
      pen2.y = (1.5 * height) / 5;
      pen2.color = color(100, 0, 200);
      pen3.x = 512;
      pen3.y = (3.5 * height) / 5;
      pen3.color = color(100, 0, 200);
      pen4.x = 402;
      pen4.y = (1.5 * height) / 5;
      pen4.color = color(250, 100, 0);
      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      pen4.hitCheck();
      pen4.display();
      break;
    case "5":
      text("Hit the purple spot with the chain", width / 2, 20);
      text("but do not hit any orange spots.", width / 2, 34);
      pen1.x = 402;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(100, 0, 200);
      pen2.x = 6;
      pen2.y = (2 * height) / 5;
      pen2.color = color(250, 100, 0);

      pen3.x = 402;
      pen3.y = (1.5 * height) / 5;
      pen3.color = color(100, 0, 200);

      pen4.x = 6;
      pen4.y = (3 * height) / 5;
      pen4.color = color(250, 100, 0);

      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      pen4.hitCheck();
      pen4.display();
      break;
  }
}
