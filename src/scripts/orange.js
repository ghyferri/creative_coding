import '../styles/particle.css';
import { GlowParticle } from './glowparticle';

const COLORS = [
  //{r: 198, g: 85, b: 36}, //dark orange
  //{r: 213, g: 127, b: 89}, //middle orange
  //{r: 188, g: 77, b: 2}, //brown/orange
  //{r: 225, g: 176, b: 93}, //dark yellow

  { r: 107, g: 25, b: 58 },
  { r: 203, g: 42, b: 19 },
  { r: 255, g: 149, b: 26 },
  { r: 0, g: 30, b: 53 },
  { r: 189, g: 44, b: 6 },
];

export default class Orange {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.totalPartciles = 100;
    this.particles = [];
    this.maxRadius = 300;
    this.minRadius = 150;

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
