import Link from './link';

export default class Chain {
  constructor(p, len) {
    this.p = p;
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
    if (end === 'Right side fixed') {
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
    for (let i = 1; i < this.links.length - 1; i++) {
      this.links[i].fy = r
          * r
          * (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y)
        + 2 * this.links[i].y
        - this.links[i].py;
    }
    if (end == 'Right side free') {
      chain.links[chain.links.length - 1].fy = -r
          * r
          * (this.links[chain.links.length - 1].y
            - this.links[chain.links.length - 2].y)
        + 2 * this.links[chain.links.length - 1].y
        - this.links[chain.links.length - 1].py;
    } else {
      chain.links[chain.links.length - 1].fy = 0;
    }

    if (!dragging) {
      chain.links[0].fy = chain.links[1].y
        + ((r - 1) / (r + 1)) * (chain.links[1].fy - chain.links[0].y);
      chain.links[0].y = chain.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i++) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}
