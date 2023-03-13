import Chain from './Chain';
// import Pen from './Pen';

const sketch = (p) => {
  // Chain constructor(p, length, dx, r, dragging) {
  const chain = new Chain(p, 800, 1, 1, false);
  let dragging = false;
  let end = 'fixed';

  p.setup = ()=> {
    p.createCanvas(800, 300);
    p.textAlign(p.CENTER);
    document.querySelectorAll('input[name="right_end"]').forEach((option) => {
      option.addEventListener('change', (event)=> {
        end = event.target.value;
      });
    });
  };

  p.draw = () => {
    p.background(220);
    p.fill(0);
    p.stroke(0);
    p.line(0, p.height / 2, p.width, p.height / 2);
    p.line(0, p.height / 3, p.width, p.height / 3);
    p.line(0, (2 * p.height) / 3, p.width, (2 * p.height) / 3);

    if (dragging) {
      chain.links[0].fy = p.mouseY - p.height / 2;
    }
    chain.links[0].py = chain.links[0].y;
    chain.links[0].y = chain.links[0].fy;
    chain.move(end);
    chain.display(end);
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

/*

function reset() {
  dragging = false;
  chain = new Chain(width);
  pen1.hit = false;
  pen2.hit = false;
  pen3.hit = false;
  pen4.hit = false;
}
function levelSet(item) {
  switch (item) {
    case '1':
      text('Hit the purple spot with the chain', width / 2, 20);
      text('but do not hit any orange spots.', width / 2, 34);
      pen1.x = chain.links[chain.links.length - 4].x;
      pen1.y = 10;
      pen1.color = color(100, 0, 200);
      pen2.x = chain.links[chain.links.length / 2].x;
      pen2.y = 60;
      pen2.color = color(250, 100, 0);

      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      break;
    case '2':
      text('Hit the purple spots with the chain', width / 2, 20);
      text('but do not hit any orange spots.', width / 2, 34);
      pen1.x = chain.links[chain.links.length - 20].x;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(100, 0, 200);

      pen2.x = chain.links[chain.links.length - 4].x;
      pen2.y = (1.5 * height) / 5;
      pen2.color = color(250, 100, 0);

      pen3.x = chain.links[chain.links.length - 20].x;
      pen3.y = (1.5 * height) / 5;
      pen3.color = color(100, 0, 200);

      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      break;

    case '3':
      text('Hit the purple spot with the chain', width / 2, 20);
      text('but do not hit any orange spots.', width / 2, 34);
      pen1.x = 402;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(100, 0, 200);
      pen2.x = 292;
      pen2.y = (3.5 * height) / 5;
      pen2.color = color(250, 100, 0);
      pen3.x = 512;
      pen3.y = (3.5 * height) / 5;
      pen3.color = color(250, 100, 0);
      pen4.x = 792;
      pen4.y = (3.5 * height) / 5;
      pen4.color = color(250, 100, 0);
      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      pen4.hitCheck();
      pen4.display();
      break;

    case '4':
      text('Hit the purple spot with the chain', width / 2, 20);
      text('but do not hit any orange spots.', width / 2, 34);
      pen1.x = 402;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(250, 100, 0);
      pen2.x = 292;
      pen2.y = (1.5 * height) / 5;
      pen2.color = color(100, 0, 200);
      pen3.x = 512;
      pen3.y = (3.5 * height) / 5;
      pen3.color = color(100, 0, 200);
      pen4.x = 402;
      pen4.y = (1.5 * height) / 5;
      pen4.color = color(250, 100, 0);
      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      pen4.hitCheck();
      pen4.display();
      break;
    case '5':
      text('Hit the purple spot with the chain', width / 2, 20);
      text('but do not hit any orange spots.', width / 2, 34);
      pen1.x = 402;
      pen1.y = (3.5 * height) / 5;
      pen1.color = color(100, 0, 200);
      pen2.x = 6;
      pen2.y = (2 * height) / 5;
      pen2.color = color(250, 100, 0);

      pen3.x = 402;
      pen3.y = (1.5 * height) / 5;
      pen3.color = color(100, 0, 200);

      pen4.x = 6;
      pen4.y = (3 * height) / 5;
      pen4.color = color(250, 100, 0);

      pen1.hitCheck();
      pen1.display();
      pen2.hitCheck();
      pen2.display();
      pen3.hitCheck();
      pen3.display();
      pen4.hitCheck();
      pen4.display();
      break;
  }
}
*/
// const p5Sketch = new p5(sketch, containerElement);

export default sketch;
