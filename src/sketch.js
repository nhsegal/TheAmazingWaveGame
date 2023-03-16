import Chain from './Chain';
import Pen from './Pen';

const sketch = (p) => {
  // Chain constructor(p, length, dx, r)
  const width = 900;
  const dt = 5;
  const dx = 5;
  const chain = new Chain(p, width, dx, dt);
  let dragging = false;
  let end = 'fixed';
  let level = 0;
  let mySound;
  const pens = [];

  const levelSet = () => {
    switch (level) {
      case '1':
        pens.length = 0;
        for (let i = 0; i < 2; i += 1) {
          pens.push(
            new Pen(p, 0, 250, p.color(100 + 250 * i, 100 * i, 200 - 200 * i))
          );
        }

        pens[0].x = p.width - 20;
        pens[0].y = 40;
        pens[1].x = p.width / 2;
        pens[1].y = p.height / 4;
        return pens;

      case '2':
        pens.length = 0;
        for (let i = 0; i < 3; i += 1) {
          pens.push(new Pen(p, 0, 250, p.color(0)));
        }

        pens[0].x = p.width - 100;
        pens[0].y = (3.5 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);
        pens[1].x = p.width - 30;
        pens[1].y = (1.5 * p.height) / 5;
        pens[1].color = p.color(250, 100, 0);
        pens[2].x = p.width - 100;
        pens[2].y = (1.5 * p.height) / 5;
        pens[2].color = p.color(100, 0, 200);

        return pens;
      case '3':
        pens.length = 0;
        for (let i = 0; i < 5; i += 1) {
          pens.push(new Pen(p, 0, 250, p.color(0)));
        }

        pens[0].x = p.width / 2;
        pens[0].y = (3.5 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);
        pens[1].x = p.width / 2 - 120;
        pens[1].y = (3.5 * p.height) / 5;
        pens[1].color = p.color(250, 100, 0);
        pens[2].x = p.width / 2 + 120;
        pens[2].y = (3.5 * p.height) / 5;
        pens[2].color = p.color(250, 100, 0);
        pens[3].x = p.width - 10;
        pens[3].y = (3 * p.height) / 5;
        pens[3].color = p.color(250, 100, 0);
        pens[4].x = p.width - 10;
        pens[4].y = (2 * p.height) / 5;
        pens[4].color = p.color(250, 100, 0);

        return pens;
      case '4':
        pens.length = 0;
        for (let i = 0; i < 6; i += 1) {
          pens.push(new Pen(p, 0, 250, p.color(0)));
        }

        pens[0].x = p.width / 2 + 80;
        pens[0].y = (3.5 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);
        pens[1].x = p.width / 2;
        pens[1].y = (3.5 * p.height) / 5;
        pens[1].color = p.color(250, 100, 0);
        pens[2].x = p.width / 2;
        pens[2].y = (1.5 * p.height) / 5;
        pens[2].color = p.color(250, 100, 0);
        pens[3].x = p.width / 2 - 80;
        pens[3].y = (1.5 * p.height) / 5;
        pens[3].color = p.color(100, 0, 200);
        pens[4].x = p.width / 2 - 80;
        pens[4].y = (3.5 * p.height) / 5;
        pens[4].color = p.color(100, 0, 200);
        pens[5].x = p.width / 2 + 80;
        pens[5].y = (1.5 * p.height) / 5;
        pens[5].color = p.color(100, 0, 200);
        return pens;
      case '5':
        pens.length = 0;
        for (let i = 0; i < 6; i += 1) {
          pens.push(new Pen(p, 0, 250, p.color(0)));
        }
        pens[0].x = 3 * (p.width / 4);
        pens[0].y = (1 * p.height) / 5;
        pens[0].color = p.color(100, 0, 200);

        pens[1].x = 1 * (p.width / 4);
        pens[1].y = (4 * p.height) / 5;
        pens[1].color = p.color(100, 0, 200);

        pens[2].x = 1 * (p.width / 4);
        pens[2].y = (1 * p.height) / 5;
        pens[2].color = p.color(100, 0, 200);

        pens[3].x = 3 * (p.width / 4);
        pens[3].y = (4 * p.height) / 5;
        pens[3].color = p.color(100, 0, 200);

        pens[4].x = 6;
        pens[4].y = (2 * p.height) / 6;
        pens[4].color = p.color(250, 100, 0);

        pens[5].x = 6;
        pens[5].y = (4 * p.height) / 6;
        pens[5].color = p.color(250, 100, 0);

        return pens;
      default:
        return pens;
    }
  };

  const reset = () => {
    chain.links.forEach((val, i, arr) => {
      arr[i].y = 0;
      arr[i].py = 0;
      arr[i].fy = 0;
    });
    if (pens.length) {
      pens.forEach((pen)=>{
        pen.hit = false;
      });
    }
  };

  p.setup = () => {
    p.createCanvas(width, 300);
    p.textAlign(p.CENTER);

    // Event Listeners
    document.querySelectorAll('input[name="right_end"]').forEach((option) => {
      option.addEventListener('change', (event) => {
        end = event.target.value;
      });
    });

    document.querySelector('#resetButton').addEventListener('click', reset);

    document.querySelectorAll('select[name="level"]').forEach((option) => {
      option.addEventListener('change', (e) => {
        level = e.target.value;
        levelSet();
        reset();
      });
    });
  };

  p.draw = () => {
    p.background(230);
    p.fill(0);
    p.stroke(110);
    p.line(0, p.height / 2, p.width, p.height / 2);
    p.line(0, p.height / 3, p.width, p.height / 3);
    p.line(0, (2 * p.height) / 3, p.width, (2 * p.height) / 3);
    p.line(0, p.height / 6, p.width, p.height / 6);
    p.line(0, (5 * p.height) / 6, p.width, (5 * p.height) / 6);

    if (dragging) {
      chain.links[0].fy = p.mouseY - p.height / 2;
    }
    chain.links[0].py = chain.links[0].y;
    chain.links[0].y = chain.links[0].fy;
    chain.move(end, dragging);

    p.noStroke();

    if (pens.length) {
      pens.forEach((pen) => {
        if (pen.hitCheck(chain)) {
          mySound.play();
        }
        pen.display();
      });
    }
    chain.display(end, dragging);
  };

  p.mousePressed = () => {
    if (
      p.dist(
        chain.links[0].x,
        chain.links[0].y + p.height / 2,
        p.mouseX,
        p.mouseY
      )
      < (3 * chain.linkSize) / 2
    ) {
      dragging = true;
    }
  };
  p.mouseReleased = () => {
    dragging = false;
  };
};

export default sketch;
