class Link {
  constructor(p, x, y, s) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.py = 0;
    this.fy = 0;
    this.linkSize = s;
  }

  display(y) {
    const p = this.p;
    p.noStroke();
    p.circle(this.x, y, this.linkSize);
  }
}

export default Link;
