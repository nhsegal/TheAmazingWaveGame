class Pen {
  constructor(p, x, y, c) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = 10;
    this.color = p.color(c);
    this.hit = false;
  }

  display() {
    const p = this.p;
    p.fill(this.color);
    p.noStroke();
    if (this.hit) {
      p.rect(this.x, this.y, this.r, this.r * 5);
    } else {
      p.circle(this.x, this.y, this.r);
    }
  }

  /*
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
  */
}

export default Pen;
