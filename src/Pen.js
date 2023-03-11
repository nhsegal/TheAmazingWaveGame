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
      this.x > chain.links[floor(this.x / chain.linkSize)].x - chain.linkSize
      && this.x < chain.links[floor(this.x / chain.linkSize)].x + chain.linkSize

      && (this.y > chain.links[floor(this.x / chain.linkSize)].y - chain.linkSize
          + height / 2
      && this.y < height / 2)

       || (this.y < chain.links[floor(this.x / chain.linkSize)].y + chain.linkSize
          + height / 2
      && this.y > height / 2)

    ) {
      this.hit = true;
    }
  }
}
