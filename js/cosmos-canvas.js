// ==============================================================================
// THE ABYSSAL COSMOS - BẦU TRỜI SAO 3D & TINH VÂN HUYỀN ẢO (CANVAS ENGINE)
// Hiệu ứng không gian đa tầng, thấu kính hấp dẫn tương tác chuột, sao băng
// ==============================================================================

class CosmosCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: false, desynchronized: true }) || this.canvas.getContext('2d');

    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.stars = [];
    this.nebulaClouds = [];
    this.shootingStars = [];
    this.dustParticles = [];

    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000, radius: 180, isDown: false };
    this.warpSpeed = 1;
    this.targetWarp = 1;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Mouse & Touch tracking
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
      this.spawnDust(e.clientX, e.clientY);
    });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.targetX = e.touches[0].clientX;
        this.mouse.targetY = e.touches[0].clientY;
        this.spawnDust(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('mousedown', () => {
      this.targetWarp = 3.5;
    });

    window.addEventListener('mouseup', () => {
      this.targetWarp = 1;
    });

    this.generateStars(380);
    this.generateNebulaClouds(6);

    // Đồng bộ tần số quét 120 FPS
    if (window.fpsEngine) {
      window.fpsEngine.registerTick((delta) => this.renderStep(delta));
    } else {
      this.animate();
    }
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  generateStars(count) {
    this.stars = [];
    const colors = ['#ffffff', '#a5f3fc', '#e0e7ff', '#fef08a', '#c084fc', '#67e8f9'];
    for (let i = 0; i < count; i++) {
      this.stars.push({
        x: (Math.random() - 0.5) * this.width * 2,
        y: (Math.random() - 0.5) * this.height * 2,
        z: Math.random() * this.width,
        baseZ: Math.random() * this.width,
        size: Math.random() * 1.8 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2
      });
    }
  }

  generateNebulaClouds(count) {
    this.nebulaClouds = [];
    const hues = [
      { r: 123, g: 63, b: 228, a: 0.07 }, // Abyssal Violet
      { r: 0, g: 245, b: 212, a: 0.05 },   // Cyan Whisper
      { r: 201, g: 154, b: 78, a: 0.04 },  // Accretion Gold
      { r: 15, g: 23, b: 42, a: 0.12 }     // Deep Void Indigo
    ];

    for (let i = 0; i < count; i++) {
      const palette = hues[i % hues.length];
      this.nebulaClouds.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 350 + 250,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        color: palette,
        pulseSpeed: Math.random() * 0.01 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }
  }

  spawnDust(x, y) {
    if (Math.random() > 0.4) return;
    this.dustParticles.push({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: Math.random() * 2.2 + 0.8,
      alpha: 0.7,
      decay: Math.random() * 0.02 + 0.01,
      color: Math.random() > 0.5 ? '#a855f7' : '#38bdf8'
    });
  }

  spawnShootingStar() {
    if (Math.random() < 0.012 && this.shootingStars.length < 3) {
      const startX = Math.random() * this.width;
      const startY = Math.random() * (this.height * 0.5);
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      const speed = Math.random() * 12 + 10;
      this.shootingStars.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: Math.random() * 120 + 80,
        alpha: 1,
        decay: 0.018
      });
    }
  }

  animate() {
    this.renderStep(1.0);
    requestAnimationFrame(() => this.animate());
  }

  renderStep(delta = 1.0) {
    // Smooth warp transition (scaled to 120 FPS step)
    this.warpSpeed += (this.targetWarp - this.warpSpeed) * 0.05 * delta;

    // Smooth mouse interpolation
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.1 * delta;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.1 * delta;

    this.ctx.fillStyle = '#030308';
    this.ctx.fillRect(0, 0, this.width, this.height);

    // 1. Draw Nebulae
    this.drawNebulae(delta);

    // 2. Draw 3D Stars with Gravitational Lensing around Mouse
    this.drawStars(delta);

    // 3. Draw Ethereal Cosmic Dust
    this.drawDust(delta);

    // 4. Draw Shooting Stars
    this.spawnShootingStar();
    this.drawShootingStars(delta);
  }

  drawNebulae(delta = 1.0) {
    this.nebulaClouds.forEach(cloud => {
      cloud.x += cloud.vx * delta;
      cloud.y += cloud.vy * delta;
      cloud.pulsePhase += cloud.pulseSpeed * delta;

      if (cloud.x < -cloud.radius) cloud.x = this.width + cloud.radius;
      if (cloud.x > this.width + cloud.radius) cloud.x = -cloud.radius;
      if (cloud.y < -cloud.radius) cloud.y = this.height + cloud.radius;
      if (cloud.y > this.height + cloud.radius) cloud.y = -cloud.radius;

      const currentRadius = cloud.radius + Math.sin(cloud.pulsePhase) * 40;
      const grad = this.ctx.createRadialGradient(
        cloud.x, cloud.y, 0,
        cloud.x, cloud.y, currentRadius
      );
      const { r, g, b, a } = cloud.color;
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a * 1.5})`);
      grad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${a * 0.6})`);
      grad.addColorStop(1, 'rgba(3, 3, 8, 0)');

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(cloud.x, cloud.y, currentRadius, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  drawStars(delta = 1.0) {
    const cx = this.width / 2;
    const cy = this.height / 2;

    for (let star of this.stars) {
      star.z -= 0.8 * this.warpSpeed * delta;
      if (star.z <= 0) {
        star.z = this.width;
        star.x = (Math.random() - 0.5) * this.width * 2;
        star.y = (Math.random() - 0.5) * this.height * 2;
      }

      star.twinklePhase += star.twinkleSpeed * delta;
      const twinkle = 0.5 + Math.sin(star.twinklePhase) * 0.5;

      const k = 280 / star.z;
      let sx = star.x * k + cx;
      let sy = star.y * k + cy;

      // Gravitational lens deflection near mouse cursor
      const dx = sx - this.mouse.x;
      const dy = sy - this.mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < this.mouse.radius && dist > 1) {
        // Gravitational warping formula: light bends around singularity
        const force = (1 - dist / this.mouse.radius) * 35;
        const angle = Math.atan2(dy, dx);
        sx += Math.cos(angle) * force;
        sy += Math.sin(angle) * force;
      }

      const size = Math.max(0.4, (1 - star.z / this.width) * star.size * 2.2);
      const alpha = Math.min(1, Math.max(0.15, (1 - star.z / this.width) * twinkle));

      if (this.warpSpeed > 1.5) {
        // Draw warp streak lines
        const prevK = 280 / (star.z + 18 * this.warpSpeed);
        const px = star.x * prevK + cx;
        const py = star.y * prevK + cy;

        this.ctx.strokeStyle = star.color;
        this.ctx.lineWidth = size * 0.8;
        this.ctx.globalAlpha = alpha;
        this.ctx.beginPath();
        this.ctx.moveTo(sx, sy);
        this.ctx.lineTo(px, py);
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
      } else {
        this.ctx.fillStyle = star.color;
        this.ctx.globalAlpha = alpha;
        this.ctx.beginPath();
        this.ctx.arc(sx, sy, size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
      }
    }
  }

  drawDust(delta = 1.0) {
    for (let i = this.dustParticles.length - 1; i >= 0; i--) {
      const p = this.dustParticles[i];
      p.x += p.vx * delta;
      p.y += p.vy * delta;
      p.alpha -= p.decay * delta;

      if (p.alpha <= 0) {
        this.dustParticles.splice(i, 1);
        continue;
      }

      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = p.alpha;
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }
  }

  drawShootingStars(delta = 1.0) {
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.x += s.vx * delta;
      s.y += s.vy * delta;
      s.alpha -= s.decay * delta;

      if (s.alpha <= 0 || s.x > this.width || s.y > this.height) {
        this.shootingStars.splice(i, 1);
        continue;
      }

      const grad = this.ctx.createLinearGradient(
        s.x, s.y,
        s.x - s.vx * (s.length / 10),
        s.y - s.vy * (s.length / 10)
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${s.alpha})`);
      grad.addColorStop(0.3, `rgba(56, 189, 248, ${s.alpha * 0.6})`);
      grad.addColorStop(1, 'rgba(3, 3, 8, 0)');

      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 1.6;
      this.ctx.beginPath();
      this.ctx.moveTo(s.x, s.y);
      this.ctx.lineTo(s.x - s.vx * (s.length / 10), s.y - s.vy * (s.length / 10));
      this.ctx.stroke();
    }
  }
}

// Khởi tạo sau khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  window.cosmosCanvas = new CosmosCanvas('cosmos-background');
});
