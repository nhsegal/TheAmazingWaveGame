import Link from './link';

export default class Chain {
  constructor(p, len, dx, r, end, dragging) {
    this.p = p;
    this.length = len;
    this.linkSize = 5 * dx;
    this.links = [];
    this.r = r;
    this.end = end;
    this.dragging = dragging;
    for (let i = 0; i < this.length / this.linkSize; i += 1) {
      this.links.push(
        new Link(p, i * this.linkSize + this.linkSize / 2, 0, this.linkSize)
      );
    }
  }

  display() {
    const p = this.p;
    for (let i = 0; i < this.links.length - 1; i += 1) {
      if (i === 0) {
        p.fill(250, 0, 0);
        p.noStroke();
        p.circle(
          this.links[0].x + this.linkSize,
          this.links[0].y + p.height / 2,
          this.linkSize * 3
        );
      } else {
        p.fill(0);
        p.circle(
          this.links[i].x,
          (this.links[i + 1].y + this.links[i].y + this.links[i + 1].y) / 3
            + p.height / 2,
          this.linkSize
        );
      }
    }

    if (this.end === 'Right side fixed') {
      p.fill(0, 0, 240);
    } else {
      p.fill(0, 200, 0);
    }

    p.circle(
      this.links[this.links.length - 1].x,
      this.links[this.links.length - 1].y + p.height / 2,
      2 * this.linkSize
    );
  }

  move() {
    for (let i = 1; i < this.links.length - 1; i += 1) {
      this.links[i].fy = this.r
          * this.r
          * (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y)
        + 2 * this.links[i].y
        - this.links[i].py;
    }
    if (this.end === 'Right side free') {
      this.links[this.links.length - 1].fy = -this.r
          * this.r
          * (this.links[this.links.length - 1].y
            - this.links[this.links.length - 2].y)
        + 2 * this.links[this.links.length - 1].y
        - this.links[this.links.length - 1].py;
    } else {
      this.links[this.links.length - 1].fy = 0;
    }

    if (!this.dragging) {
      this.links[0].fy = this.links[1].y
        + ((this.r - 1) / (this.r + 1)) * (this.links[1].fy - this.links[0].y);
      this.links[0].y = this.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i += 1) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}
