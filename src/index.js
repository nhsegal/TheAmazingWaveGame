import sketch from './sketch';
import p5 from 'p5';

const containerElement = document.getElementById('p5-container');
console.log(containerElement);

// eslint-disable-next-line
const test= new p5(sketch, containerElement);

console.log(test);
