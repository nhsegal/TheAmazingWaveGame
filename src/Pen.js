import hitSound from './cowbell.wav';

class Pen {
  constructor(p, x, y, c) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = 10;
    this.color = this.p.color(c);
    this.hit = false;
    this.effect = new Audio(hitSound);
    this.effect.load();
  }

  display() {
    const p = this.p;
    p.fill(this.color);
    p.noStroke();
    if (this.hit) {
      if (this.y > p.height / 2) {
        p.rect(this.x, this.y, this.r, this.r * 5);
      } else if (this.y < p.height / 2) {
        p.rect(this.x, this.y - this.r * 5, this.r, this.r * 5);
      }
    } else {
      p.circle(this.x, this.y, this.r);
    }
  }

  hitCheck(chain) {
    const p = this.p;
    if (

      ((this.x > chain.links[Math.floor(this.x / chain.linkSize)].x - chain.linkSize)
      && (this.x < chain.links[Math.floor(this.x / chain.linkSize)].x + chain.linkSize)

      && (((this.y > chain.links[Math.floor(this.x / chain.linkSize)].y - chain.linkSize
          + p.height / 2)
      && (this.y < p.height / 2))

      || ((this.y < chain.links[Math.floor(this.x / chain.linkSize)].y + chain.linkSize
          + p.height / 2
      && (this.y > p.height / 2)))))
      && this.hit === false

    ) {
      this.hit = true;
      this.effect.play();
    }
    return false;
  }
}

export default Pen;
