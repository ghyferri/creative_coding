import '../styles/particle.css';
import { GlowParticle } from './glowparticle';

const COLORS = [
  { r: 149, g: 64, b: 181 }, //purple
  { r: 45, g: 21, b: 87 }, //blue
  { r: 158, g: 33, b: 124 }, //pink
  //{r: 51, g: 117, b: 175}, //light blue
  { r: 0, g: 30, b: 53 }, //dark purple
];

export default class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.totalPartciles = 100;
    this.particles = [];
    this.maxRadius = 200;
    this.minRadius = 50;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;
    console.log();

    this.canvas.width = this.stageWidth;
    this.canvas.height = this.stageHeight;

    this.ctx.globalCompositeOperation = 'saturation';

    this.createParticles();
  }

  createParticles() {
    let curColor = 0;
    this.particles = [];

    for (let i = 0; i < this.totalPartciles; i++) {
      const item = new GlowParticle(
        Math.random() * this.stageWidth,
        Math.random() * this.stageHeight,
        Math.random() * (this.maxRadius - this.minRadius) + this.minRadius,
        COLORS[curColor],
      );

      if (++curColor >= COLORS.length) {
        curColor = 0;
      }

      this.particles[i] = item;
    }
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    for (let i = 0; i < this.totalPartciles; i++) {
      const item = this.particles[i];
      item.animate(this.ctx, this.stageWidth, this.stageHeight);
    }
  }
}
