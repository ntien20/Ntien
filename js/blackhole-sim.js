// ==============================================================================
// THE ABYSSAL COSMOS - MÔ PHỎNG HỐ ĐEN TƯƠNG TÁC (GARGANTUA SIMULATOR)
// Mô phỏng đĩa bồi tụ, chân trời sự kiện, thời gian giãn nở & spaghettification
// ==============================================================================

class BlackHoleSimulator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: false, desynchronized: true }) || this.canvas.getContext('2d');

    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.mass = 2800; // Khối lượng tương đối
    this.eventHorizonRadius = 48; // Bán kính chân trời sự kiện
    this.photonSphereRadius = 72; // Vòng cầu photon

    this.particles = [];
    this.accretionParticles = [];
    this.diskRotation = 0;
    this.selectedBodyType = 'probe'; // 'probe' | 'asteroid' | 'star' | 'photon'

    this.stats = {
      consumedCount: 0,
      timeDilationFactor: 1.0,
      activeBodies: 0
    };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Generate accretion disk particles
    this.generateAccretionDisk(450);

    // Canvas click to spawn celestial body
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      this.spawnBody(x, y);
    });

    if (window.fpsEngine) {
      window.fpsEngine.registerTick((delta) => this.renderStep(delta));
    } else {
      this.animate();
    }
  }

  resize() {
    const parent = this.canvas.parentElement;
    this.width = parent.clientWidth || 800;
    this.height = parent.clientHeight || 500;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
  }

  generateAccretionDisk(count) {
    this.accretionParticles = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = this.eventHorizonRadius * 1.3 + Math.random() * 160;
      this.accretionParticles.push({
        angle: angle,
        dist: dist,
        speed: (0.04 / Math.sqrt(dist / 40)) * (Math.random() * 0.4 + 0.8),
        size: Math.random() * 2.2 + 0.8,
        color: Math.random() > 0.6 ? '#c99a4e' : (Math.random() > 0.5 ? '#a855f7' : '#f97316'),
        alpha: Math.random() * 0.7 + 0.3
      });
    }
  }

  spawnBody(x, y, customType = null) {
    const type = customType || this.selectedBodyType;
    const cx = this.width / 2;
    const cy = this.height / 2;
    const dx = cx - x;
    const dy = cy - y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Vận tốc tiếp tuyến để tạo quỹ đạo ổn định hoặc rơi xoắn ốc
    const tangentX = -dy / dist;
    const tangentY = dx / dist;
    const orbitalSpeed = Math.sqrt(this.mass / (dist + 20)) * 0.85;

    let body = {
      x: x,
      y: y,
      vx: tangentX * orbitalSpeed + (Math.random() - 0.5) * 0.5,
      vy: tangentY * orbitalSpeed + (Math.random() - 0.5) * 0.5,
      type: type,
      history: [],
      alive: true,
      age: 0,
      stretchFactor: 1
    };

    if (type === 'probe') {
      body.color = '#38bdf8';
      body.size = 3.5;
      body.name = 'Tàu thăm dò';
    } else if (type === 'asteroid') {
      body.color = '#94a3b8';
      body.size = 2.8;
      body.name = 'Tiểu hành tinh';
    } else if (type === 'star') {
      body.color = '#fef08a';
      body.size = 5.2;
      body.name = 'Ngôi sao lùn';
    } else if (type === 'photon') {
      body.color = '#ffffff';
      body.size = 2.0;
      body.vx = tangentX * orbitalSpeed * 1.7;
      body.vy = tangentY * orbitalSpeed * 1.7;
      body.name = 'Chùm photon';
    }

    this.particles.push(body);
  }

  setBodyType(type) {
    this.selectedBodyType = type;
  }

  setMass(newMass) {
    this.mass = newMass;
    this.eventHorizonRadius = Math.sqrt(newMass) * 0.92;
    this.photonSphereRadius = this.eventHorizonRadius * 1.5;
    this.generateAccretionDisk(450);
  }

  clearBodies() {
    this.particles = [];
  }

  animate() {
    this.renderStep(1.0);
    requestAnimationFrame(() => this.animate());
  }

  renderStep(delta = 1.0) {
    this.ctx.fillStyle = 'rgba(3, 3, 8, 0.28)'; // Trail persistence
    this.ctx.fillRect(0, 0, this.width, this.height);

    const cx = this.width / 2;
    const cy = this.height / 2;

    // 1. Draw Relativistic Jet Plumes
    this.drawRelativisticJets(cx, cy);

    // 2. Draw Accretion Disk (Background half)
    this.diskRotation += 0.006 * delta;
    this.drawAccretionDisk(cx, cy, true, delta);

    // 3. Draw Gravitational Lensing Halo
    this.drawGravitationalLensing(cx, cy);

    // 4. Draw Event Horizon
    this.drawEventHorizon(cx, cy);

    // 5. Draw Accretion Disk (Foreground half)
    this.drawAccretionDisk(cx, cy, false, delta);

    // 6. Update and Draw Infalling Bodies with 120 FPS Spaghettification
    this.updateBodies(cx, cy, delta);
  }

  drawRelativisticJets(cx, cy) {
    // Top & Bottom relativistic plasma jets
    const jetGradTop = this.ctx.createLinearGradient(cx, cy, cx, 0);
    jetGradTop.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
    jetGradTop.addColorStop(0.3, 'rgba(56, 189, 248, 0.25)');
    jetGradTop.addColorStop(1, 'rgba(3, 3, 8, 0)');

    this.ctx.fillStyle = jetGradTop;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - 10, cy);
    this.ctx.lineTo(cx - 45, 0);
    this.ctx.lineTo(cx + 45, 0);
    this.ctx.lineTo(cx + 10, cy);
    this.ctx.fill();

    const jetGradBottom = this.ctx.createLinearGradient(cx, cy, cx, this.height);
    jetGradBottom.addColorStop(0, 'rgba(168, 85, 247, 0.45)');
    jetGradBottom.addColorStop(0.3, 'rgba(56, 189, 248, 0.25)');
    jetGradBottom.addColorStop(1, 'rgba(3, 3, 8, 0)');

    this.ctx.fillStyle = jetGradBottom;
    this.ctx.beginPath();
    this.ctx.moveTo(cx - 10, cy);
    this.ctx.lineTo(cx - 45, this.height);
    this.ctx.lineTo(cx + 45, this.height);
    this.ctx.lineTo(cx + 10, cy);
    this.ctx.fill();
  }

  drawGravitationalLensing(cx, cy) {
    // Photon sphere glow
    const grad = this.ctx.createRadialGradient(
      cx, cy, this.eventHorizonRadius,
      cx, cy, this.photonSphereRadius * 1.4
    );
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.25, '#c99a4e');
    grad.addColorStop(0.6, '#a855f7');
    grad.addColorStop(1, 'rgba(123, 63, 228, 0)');

    this.ctx.fillStyle = grad;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, this.photonSphereRadius * 1.4, 0, Math.PI * 2);
    this.ctx.fill();
  }

  drawEventHorizon(cx, cy) {
    // The pitch black void
    this.ctx.fillStyle = '#010103';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, this.eventHorizonRadius, 0, Math.PI * 2);
    this.ctx.fill();

    // Sharp event horizon boundary
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    this.ctx.lineWidth = 1.2;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, this.eventHorizonRadius, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  drawAccretionDisk(cx, cy, isBackHalf, delta = 1.0) {
    this.ctx.save();
    this.accretionParticles.forEach(p => {
      p.angle += p.speed * delta;
      const cosA = Math.cos(p.angle);
      const sinA = Math.sin(p.angle);

      // Tilt disk (Keplerian elliptic projection)
      const px = cx + cosA * p.dist;
      const py = cy + sinA * (p.dist * 0.32);

      const isBack = sinA < 0;
      if (isBack !== isBackHalf) return;

      // Relativistic Doppler beaming: particles moving toward observer (left side) are brighter
      const dopplerBoost = cosA < 0 ? 1.4 : 0.6;
      this.ctx.fillStyle = p.color;
      this.ctx.globalAlpha = Math.min(1, p.alpha * dopplerBoost);

      this.ctx.beginPath();
      this.ctx.arc(px, py, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
    this.ctx.restore();
  }

  updateBodies(cx, cy, delta = 1.0) {
    let closestDist = 9999;

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const b = this.particles[i];
      b.age++;

      const dx = cx - b.x;
      const dy = cy - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < closestDist) closestDist = dist;

      // Gravity force (Newton + Relativistic correction)
      const force = this.mass / Math.max(dist * dist, 120);
      const ax = (dx / dist) * force;
      const ay = (dy / dist) * force;

      b.vx += ax * delta;
      b.vy += ay * delta;
      b.x += b.vx * delta;
      b.y += b.vy * delta;

      // Track trajectory history
      if (b.age % 2 === 0) {
        b.history.push({ x: b.x, y: b.y });
        if (b.history.length > 28) b.history.shift();
      }

      // Draw orbit trail
      if (b.history.length > 1) {
        this.ctx.strokeStyle = b.color;
        this.ctx.lineWidth = 1.2;
        this.ctx.beginPath();
        for (let j = 0; j < b.history.length; j++) {
          const pt = b.history[j];
          if (j === 0) this.ctx.moveTo(pt.x, pt.y);
          else this.ctx.lineTo(pt.x, pt.y);
        }
        this.ctx.stroke();
      }

      // Spaghettification & Time Dilation as it approaches horizon
      if (dist < this.eventHorizonRadius * 2.2) {
        b.stretchFactor = 1 + (this.eventHorizonRadius * 2.2 - dist) / 12;
      }

      // Render celestial body
      this.ctx.save();
      this.ctx.translate(b.x, b.y);
      const stretchAngle = Math.atan2(dy, dx);
      this.ctx.rotate(stretchAngle);

      this.ctx.fillStyle = b.color;
      this.ctx.beginPath();
      // Stretched ellipse (spaghettification)
      this.ctx.ellipse(0, 0, b.size * b.stretchFactor, b.size / Math.max(1, b.stretchFactor * 0.6), 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      // Check consumption inside event horizon
      if (dist <= this.eventHorizonRadius) {
        this.particles.splice(i, 1);
        this.stats.consumedCount++;
        this.flashHorizonAbsorption();
      }
    }

    // Calculate time dilation for HUD
    if (closestDist < 9999) {
      const rRatio = Math.max(0.01, 1 - (this.eventHorizonRadius / Math.max(closestDist, this.eventHorizonRadius + 0.5)));
      this.stats.timeDilationFactor = Math.min(999, (1 / Math.sqrt(rRatio))).toFixed(2);
    } else {
      this.stats.timeDilationFactor = (1.0).toFixed(2);
    }
    this.stats.activeBodies = this.particles.length;
    this.updateHUD();
  }

  flashHorizonAbsorption() {
    if (window.cosmicAudio && window.cosmicAudio.isPlaying) {
      window.cosmicAudio.triggerPulsarClick();
    }
  }

  updateHUD() {
    const hudConsumed = document.getElementById('sim-consumed-count');
    const hudDilation = document.getElementById('sim-dilation-factor');
    const hudActive = document.getElementById('sim-active-count');

    if (hudConsumed) hudConsumed.textContent = this.stats.consumedCount;
    if (hudDilation) hudDilation.textContent = `${this.stats.timeDilationFactor}x`;
    if (hudActive) hudActive.textContent = this.stats.activeBodies;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.blackHoleSim = new BlackHoleSimulator('blackhole-canvas');
});
