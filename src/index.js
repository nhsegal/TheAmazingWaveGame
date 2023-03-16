import './style.css';
import sketch from './sketch';
// import p5 from './p5/p5.min.js';
// import { loadSound } from 'p5/lib/addons/p5.sound';
const p5 = window.p5;
const containerElement = document.getElementById('p5container');

// eslint-disable-next-line
const app = new p5(sketch, containerElement);
// app.loadSound = loadSound.bind(app);
