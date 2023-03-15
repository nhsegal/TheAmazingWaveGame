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

  const pen1 = new Pen(p, 0, 250, p.color(0));
  const pen2 = new Pen(p, 0, 250, p.color(0));
  const pen3 = new Pen(p, 0, 250, p.color(0));
  const pen4 = new Pen(p, 0, 250, p.color(0));
  const pen5 = new Pen(p, 0, 250, p.color(0));
  const pen6 = new Pen(p, 0, 250, p.color(0));

  const levelSet = (item) => {
    switch (item) {
      case '1':
        level = '1';
        pen1.x = chain.links[Math.floor(chain.links.length - 4)].x;
        pen1.y = 10;
        pen1.color = p.color(100, 0, 200);
        pen2.x = chain.links[Math.floor(chain.links.length / 2)].x;
        pen2.y = 60;
        pen2.color = p.color(250, 100, 0);
        pen1.hitCheck(chain);
        pen1.display();
        pen2.hitCheck(chain);
        pen2.display();
        break;
      case '2':
        level = '2';
        pen1.x = chain.links[Math.floor(chain.links.length - 20)].x;
        pen1.y = (3.5 * p.height) / 5;
        pen1.color = p.color(100, 0, 200);
        pen2.x = chain.links[Math.floor(chain.links.length - 4)].x;
        pen2.y = (1.5 * p.height) / 5;
        pen2.color = p.color(250, 100, 0);
        pen3.x = chain.links[Math.floor(chain.links.length - 20)].x;
        pen3.y = (1.5 * p.height) / 5;
        pen3.color = p.color(100, 0, 200);
        pen1.hitCheck(chain);
        pen1.display();
        pen2.hitCheck(chain);
        pen2.display();
        pen3.hitCheck(chain);
        pen3.display();
        break;
      case '3':
        level = '3';
        pen1.x = p.width / 2;
        pen1.y = (3.5 * p.height) / 5;
        pen1.color = p.color(100, 0, 200);
        pen2.x = (p.width / 2) - 120;
        pen2.y = (3.5 * p.height) / 5;
        pen2.color = p.color(250, 100, 0);
        pen3.x = (p.width / 2) + 120;
        pen3.y = (3.5 * p.height) / 5;
        pen3.color = p.color(250, 100, 0);
        pen4.x = p.width - 10;
        pen4.y = (3 * p.height) / 5;
        pen4.color = p.color(250, 100, 0);

        pen5.x = p.width - 10;
        pen5.y = (2 * p.height) / 5;
        pen5.color = p.color(250, 100, 0);
        pen1.hitCheck(chain);
        pen1.display();
        pen2.hitCheck(chain);
        pen2.display();
        pen3.hitCheck(chain);
        pen3.display();
        pen4.hitCheck(chain);
        pen4.display();
        pen5.hitCheck(chain);
        pen5.display();
        break;
      case '4':
        level = '4';
        pen1.x = p.width / 2;
        pen1.y = (3.5 * p.height) / 5;
        pen1.color = p.color(250, 100, 0);

        pen2.x = p.width / 2;
        pen2.y = (1.5 * p.height) / 5;
        pen2.color = p.color(250, 100, 0);

        pen3.x = p.width / 2 - 80;
        pen3.y = (1.5 * p.height) / 5;
        pen3.color = p.color(100, 0, 200);

        pen4.x = p.width / 2 - 80;
        pen4.y = (3.5 * p.height) / 5;
        pen4.color = p.color(100, 0, 200);

        pen5.x = p.width / 2 + 80;
        pen5.y = (1.5 * p.height) / 5;
        pen5.color = p.color(100, 0, 200);

        pen6.x = p.width / 2 + 80;
        pen6.y = (3.5 * p.height) / 5;
        pen6.color = p.color(100, 0, 200);

        pen1.hitCheck(chain);
        pen1.display();
        pen2.hitCheck(chain);
        pen2.display();
        pen3.hitCheck(chain);
        pen3.display();
        pen4.hitCheck(chain);
        pen4.display();
        pen5.hitCheck(chain);
        pen5.display();
        pen6.hitCheck(chain);
        pen6.display();
        break;
      case '5':
        level = '5';
        pen1.x = 1 * (p.width / 4);
        pen1.y = (4 * p.height) / 5;
        pen1.color = p.color(100, 0, 200);

        pen3.x = 1 * (p.width / 4);
        pen3.y = (1 * p.height) / 5;
        pen3.color = p.color(100, 0, 200);

        pen5.x = 3 * (p.width / 4);
        pen5.y = (4 * p.height) / 5;
        pen5.color = p.color(100, 0, 200);

        pen6.x = 3 * (p.width / 4);
        pen6.y = (1 * p.height) / 5;
        pen6.color = p.color(100, 0, 200);

        pen2.x = 6;
        pen2.y = (2 * p.height) / 6;
        pen2.color = p.color(250, 100, 0);

        pen4.x = 6;
        pen4.y = (4 * p.height) / 6;
        pen4.color = p.color(250, 100, 0);

        pen1.hitCheck(chain);
        pen1.display();
        pen2.hitCheck(chain);
        pen2.display();
        pen3.hitCheck(chain);
        pen3.display();
        pen4.hitCheck(chain);
        pen4.display();
        pen5.hitCheck(chain);
        pen5.display();
        pen6.hitCheck(chain);
        pen6.display();
        break;
      default:
    }
  };

  const reset = () => {
    chain.links.forEach((val, i, arr) => {
      arr[i].y = 0;
      arr[i].py = 0;
      arr[i].fy = 0;
    });

    pen1.hit = false;
    pen2.hit = false;
    pen3.hit = false;
    pen4.hit = false;
    pen5.hit = false;
    pen6.hit = false;
  };

  p.setup = ()=> {
    p.createCanvas(width, 300);
    p.textAlign(p.CENTER);

    // Event Listeners
    document.querySelectorAll('input[name="right_end"]').forEach((option) => {
      option.addEventListener('change', (event)=> {
        end = event.target.value;
      });
    });

    document.querySelector('#resetButton').addEventListener('click', reset);

    document.querySelectorAll('select[name="level"]').forEach((option) => {
      option.addEventListener('change', (e) => {
        levelSet(e.target.value);
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
    chain.display(end, dragging);

    let item = level;
    p.noStroke();
    levelSet(item);
  };

  p.mousePressed = () =>{
    if (
      p.dist(chain.links[0].x, chain.links[0].y + p.height / 2, p.mouseX, p.mouseY)
      < (3 * chain.linkSize) / 2
    ) {
      dragging = true;
    }
  };
  p.mouseReleased = () =>{
    dragging = false;
  };
};

export default sketch;
