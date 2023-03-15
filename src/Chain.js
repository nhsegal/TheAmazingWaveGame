import Link from './Link';

class Chain {
  constructor(p, length, dx, dt) {
    this.p = p;
    this.length = length;
    this.linkSize = dx;
    this.links = [];
    this.dt = dt;

    for (let i = 0; i < this.length / this.linkSize; i += 1) {
      this.links.push(new Link(
        p,
        i * this.linkSize + this.linkSize / 2,
        dx
      ));
    }
  }

  display(end, dragging) {
    const p = this.p;
    for (let i = 0; i < this.links.length - 1; i += 1) {
      if (i === 0) {
        if (dragging) {
          p.fill(250, 0, 0);
        } else { p.fill(200, 0, 0); }
        p.noStroke();
        p.circle(
          this.links[0].x + this.links[0].linkSize,
          this.links[0].y + p.height / 2,
          this.links[0].linkSize * 3
        );
      } else {
        this.links[i].display();
      }
    }

    if (end === 'fixed') {
      p.fill(0, 0, 240);
    } else if (end === 'free') {
      p.fill(0, 200, 0);
    } else if (end === 'mirror') {
      p.fill(200, 0, 0);
    }

    p.circle(
      this.links[this.links.length - 1].x,
      this.links[this.links.length - 1].y + p.height / 2,
      2 * this.linkSize
    );
  }

  move(end, dragging) {
    const p = this.p;
    for (let i = 1; i < this.links.length - 1; i += 1) {
      this.links[i].fy = ((this.dt / this.linkSize) ** 2)
      * (this.links[i - 1].y - 2 * this.links[i].y + this.links[i + 1].y)
        + 2 * this.links[i].y
        - this.links[i].py;
    }
    if (end === 'free') {
      this.links[this.links.length - 1].fy = -(this.links[this.links.length - 1].y
            - this.links[this.links.length - 2].y)
        + 2 * this.links[this.links.length - 1].y
        - this.links[this.links.length - 1].py;
    } else if (end === 'fixed') {
      this.links[this.links.length - 1].fy = 0;
    } else if (end === 'mirror' && p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = this.links[0].fy;
    } else if (end === 'mirror' && !p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    } else if (end === 'antimirror' && p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = -this.links[0].fy;
    } else if (end === 'antimirror' && !p.mouseIsPressed) {
      this.links[this.links.length - 1].fy = this.links[this.links.length - 2].y;
      this.links[this.links.length - 1].y = this.links[this.links.length - 1].fy;
    }

    if (!dragging) {
      this.links[0].fy = this.links[1].y;
      this.links[0].y = this.links[0].fy;
    }
    for (let i = 1; i < this.links.length; i += 1) {
      this.links[i].py = this.links[i].y;
      this.links[i].y = this.links[i].fy;
    }
  }
}

export default Chain;
