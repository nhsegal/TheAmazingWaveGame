class Link {
  constructor(p, x, linkSize) {
    this.p = p;
    this.x = x;
    this.y = 0;
    this.py = 0;
    this.fy = 0;
    this.linkSize = linkSize;
  }

  display() {
    const p = this.p;
    p.noStroke();
    p.circle(this.x, this.y, this.linkSize);
  }
}

export default Link;
