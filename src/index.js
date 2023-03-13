import './style.css';
import sketch from './sketch';
import p5 from 'p5';

const containerElement = document.getElementById('p5container');

// eslint-disable-next-line
const app = new p5(sketch, containerElement);