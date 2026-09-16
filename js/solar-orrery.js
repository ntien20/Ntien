// ==============================================================================
// THE ABYSSAL COSMOS - MÔ PHỎNG THÁI DƯƠNG HỆ & VÀNH ĐAI TIỂU HÀNH TINH (ORRERY ENGINE)
// Mô phỏng cơ học quỹ đạo Kepler, 8 hành tinh, 700+ mảnh vỡ tiểu hành tinh, Apophis, Oumuamua
// ==============================================================================

class SolarOrrery {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: false, desynchronized: true }) || this.canvas.getContext('2d');

    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.zoom = 1;
    this.panX = 0;
    this.panY = 0;
    this.timeSpeed = 1;
    this.isPaused = false;
    this.showOrbits = true;
    this.showAsteroidBelt = true;
    this.selectedBody = null;

    // Planets configuration (orbital radii scaled aesthetically for viewing)
    this.planets = [
      { id: 'mercury', name: 'Sao Thủy', dist: 55, speed: 0.048, size: 3.2, color: '#94a3b8', angle: 0.2, realDist: '0.39 AU', period: '88 ngày' },
      { id: 'venus', name: 'Sao Kim', dist: 78, speed: 0.035, size: 5.5, color: '#f97316', angle: 1.5, realDist: '0.72 AU', period: '225 ngày' },
      { id: 'earth', name: 'Trái Đất', dist: 110, speed: 0.029, size: 6.0, color: '#10b981', angle: 3.2, realDist: '1.00 AU', period: '365 ngày' },
      { id: 'mars', name: 'Sao Hỏa', dist: 145, speed: 0.024, size: 4.5, color: '#ef4444', angle: 4.8, realDist: '1.52 AU', period: '687 ngày' },
      { id: 'jupiter', name: 'Sao Mộc', dist: 235, speed: 0.013, size: 14.0, color: '#d97706', angle: 0.8, realDist: '5.20 AU', period: '11.8 năm' },
      { id: 'saturn', name: 'Sao Thổ', dist: 310, speed: 0.009, size: 11.5, color: '#eab308', angle: 2.1, hasRings: true, realDist: '9.58 AU', period: '29.5 năm' },
      { id: 'uranus', name: 'Sao Thiên Vương', dist: 380, speed: 0.006, size: 8.0, color: '#06b6d4', angle: 5.0, realDist: '19.2 AU', period: '84 năm' },
      { id: 'neptune', name: 'Sao Hải Vương', dist: 440, speed: 0.005, size: 7.8, color: '#3b82f6', angle: 3.7, realDist: '30.1 AU', period: '165 năm' },
      { id: 'pluto', name: 'Sao Diêm Vương', dist: 495, speed: 0.0038, size: 2.8, color: '#c084fc', angle: 1.1, eccentricity: 0.12, realDist: '39.5 AU', period: '248 năm' }
    ];

    // Famous special asteroids & visitors
    this.specialAsteroids = [
      { id: 'ceres', name: '1 Ceres', dist: 185, speed: 0.018, size: 3.8, color: '#00f5d4', angle: 2.4, desc: 'Hành tinh lùn lớn nhất vành đai (940 km)' },
      { id: 'psyche', name: '16 Psyche', dist: 198, speed: 0.017, size: 3.2, color: '#c99a4e', angle: 4.1, desc: 'Lõi kim loại vô giá 10.000 triệu tỷ USD' },
      { id: 'apophis', name: '99942 Apophis', dist: 105, speed: 0.031, size: 2.5, color: '#ef233c', angle: 5.2, isElliptic: true, a: 115, b: 85, desc: 'Suýt va chạm Trái Đất 2029 (Apollo-class)' },
      { id: 'oumuamua', name: '1I/\'Oumuamua', isHyperbolic: true, progress: -180, speed: 1.2, color: '#a855f7', desc: 'Vật thể liên sao hình điếu xì gà bay xuyên Thái Dương Hệ' }
    ];

    // Main Asteroid Belt particles (between Mars ~150 and Jupiter ~230)
    this.asteroidBelt = [];
    this.generateAsteroidBelt(650);

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    // Mouse click on planets / asteroids
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * this.dpr;
      const y = (e.clientY - rect.top) * this.dpr;
      this.handleClick(x, y);
    });

    if (window.fpsEngine) {
      window.fpsEngine.registerTick((delta) => this.renderStep(delta));
    } else {
      this.animate();
    }
  }

  resize() {
    const parent = this.canvas.parentElement;
    this.width = parent.clientWidth || 900;
    this.height = parent.clientHeight || 600;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
  }

  generateAsteroidBelt(count) {
    this.asteroidBelt = [];
    for (let i = 0; i < count; i++) {
      const dist = 165 + Math.random() * 55; // Between Mars (145) and Jupiter (235)
      const angle = Math.random() * Math.PI * 2;
      const speed = (0.022 / Math.sqrt(dist / 100)) * (0.85 + Math.random() * 0.3);
      this.asteroidBelt.push({
        dist: dist,
        angle: angle,
        speed: speed,
        size: Math.random() * 1.6 + 0.6,
        alpha: Math.random() * 0.6 + 0.3,
        color: Math.random() > 0.85 ? '#c99a4e' : '#94a3b8'
      });
    }
  }

  setSpeed(speed) {
    this.timeSpeed = speed;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    return this.isPaused;
  }

  toggleOrbits(val) {
    this.showOrbits = val;
  }

  toggleBelt(val) {
    this.showAsteroidBelt = val;
  }

  handleClick(clickX, clickY) {
    const cx = (this.width * this.dpr) / 2 + this.panX;
    const cy = (this.height * this.dpr) / 2 + this.panY;

    // Check Sun
    const sunDist = Math.hypot(clickX - cx, clickY - cy);
    if (sunDist < 25 * this.dpr) {
      this.displayTargetInfo({
        name: 'Mặt Trời (Sol)',
        type: 'Sao lùn vàng G2V',
        dist: '0 AU (Tâm điểm Thái Dương Hệ)',
        temp: '5.500°C bề mặt / 15 triệu °C lõi',
        desc: 'Nguồn sinh mệnh của toàn bộ hệ, giữ 99.86% tổng khối lượng vật chất.'
      });
      return;
    }

    // Check Planets
    for (let p of this.planets) {
      const px = cx + Math.cos(p.angle) * p.dist * this.dpr * this.zoom;
      const py = cy + Math.sin(p.angle) * p.dist * this.dpr * this.zoom;
      const dist = Math.hypot(clickX - px, clickY - py);
      if (dist < Math.max(16 * this.dpr, p.size * 2 * this.dpr)) {
        this.selectedBody = p;
        this.displayTargetInfo({
          name: p.name,
          type: 'Hành tinh chính',
          dist: p.realDist,
          period: p.period,
          desc: `Chu kỳ quanh Mặt Trời: ${p.period}. Vận tốc quỹ đạo mô phỏng Kepler.`
        });
        return;
      }
    }

    // Check Special Asteroids
    for (let a of this.specialAsteroids) {
      if (a.isHyperbolic) continue;
      const ax = cx + Math.cos(a.angle) * a.dist * this.dpr * this.zoom;
      const ay = cy + Math.sin(a.angle) * a.dist * this.dpr * this.zoom;
      const dist = Math.hypot(clickX - ax, clickY - ay);
      if (dist < 18 * this.dpr) {
        this.selectedBody = a;
        this.displayTargetInfo({
          name: a.name,
          type: 'Tiểu hành tinh đặc biệt',
          dist: `${a.dist * 0.015} AU`,
          desc: a.desc
        });
        return;
      }
    }
  }

  displayTargetInfo(info) {
    const card = document.getElementById('orrery-target-card');
    if (!card) return;

    card.innerHTML = `
      <div class="glass-panel" style="padding: 16px; border-color: rgba(0, 245, 212, 0.4); animation: fadeInModal 0.3s ease;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span class="badge badge-cyan">${info.type}</span>
          <span style="font-size: 0.75rem; color: #94a3b8;">${info.dist}</span>
        </div>
        <h4 style="font-size: 1.2rem; color: #ffffff; margin-bottom: 4px;">${info.name}</h4>
        <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${info.desc}</p>
      </div>
    `;
  }

  animate() {
    this.renderStep(1.0);
    requestAnimationFrame(() => this.animate());
  }

  renderStep(delta = 1.0) {
    const w = this.width * this.dpr;
    const h = this.height * this.dpr;
    const cx = w / 2 + this.panX;
    const cy = h / 2 + this.panY;

    this.ctx.fillStyle = 'rgba(2, 2, 6, 0.4)';
    this.ctx.fillRect(0, 0, w, h);

    const step = this.isPaused ? 0 : this.timeSpeed * delta;

    // 1. Draw Orbit Lines
    if (this.showOrbits) {
      this.ctx.lineWidth = 1 * this.dpr;
      this.planets.forEach(p => {
        this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, p.dist * this.dpr * this.zoom, 0, Math.PI * 2);
        this.ctx.stroke();
      });

      // Special Asteroid Orbits
      this.ctx.strokeStyle = 'rgba(0, 245, 212, 0.2)';
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, 185 * this.dpr * this.zoom, 0, Math.PI * 2); // Ceres
      this.ctx.stroke();

      // Apophis hazardous eccentric crossing orbit
      this.ctx.strokeStyle = 'rgba(239, 35, 60, 0.35)';
      this.ctx.beginPath();
      this.ctx.ellipse(cx - 20 * this.dpr, cy, 120 * this.dpr * this.zoom, 92 * this.dpr * this.zoom, 0.3, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    // 2. Draw Asteroid Belt (700+ debris)
    if (this.showAsteroidBelt) {
      this.asteroidBelt.forEach(ast => {
        ast.angle += ast.speed * 0.3 * step;
        const ax = cx + Math.cos(ast.angle) * ast.dist * this.dpr * this.zoom;
        const ay = cy + Math.sin(ast.angle) * ast.dist * this.dpr * this.zoom;

        this.ctx.fillStyle = ast.color;
        this.ctx.globalAlpha = ast.alpha;
        this.ctx.beginPath();
        this.ctx.arc(ax, ay, ast.size * this.dpr * this.zoom, 0, Math.PI * 2);
        this.ctx.fill();
      });
      this.ctx.globalAlpha = 1;
    }

    // 3. Draw The Sun
    const sunGrad = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, 28 * this.dpr);
    sunGrad.addColorStop(0, '#ffffff');
    sunGrad.addColorStop(0.2, '#fef08a');
    sunGrad.addColorStop(0.5, '#f59e0b');
    sunGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');

    this.ctx.fillStyle = sunGrad;
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 28 * this.dpr, 0, Math.PI * 2);
    this.ctx.fill();

    this.ctx.fillStyle = '#fef08a';
    this.ctx.beginPath();
    this.ctx.arc(cx, cy, 10 * this.dpr, 0, Math.PI * 2);
    this.ctx.fill();

    // 4. Update and Draw Planets
    this.planets.forEach(p => {
      p.angle += p.speed * 0.4 * step;
      const px = cx + Math.cos(p.angle) * p.dist * this.dpr * this.zoom;
      const py = cy + Math.sin(p.angle) * p.dist * this.dpr * this.zoom;

      // Draw Planet Body
      this.ctx.fillStyle = p.color;
      this.ctx.beginPath();
      this.ctx.arc(px, py, Math.max(1.8, p.size * 0.55 * this.dpr), 0, Math.PI * 2);
      this.ctx.fill();

      // Saturn Rings
      if (p.hasRings) {
        this.ctx.strokeStyle = 'rgba(234, 179, 8, 0.6)';
        this.ctx.lineWidth = 2.2 * this.dpr;
        this.ctx.beginPath();
        this.ctx.ellipse(px, py, (p.size + 9) * 0.55 * this.dpr, 3.5 * this.dpr, 0.4, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Planet Label
      this.ctx.fillStyle = '#94a3b8';
      this.ctx.font = `${10 * this.dpr}px 'Space Grotesk', sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(p.name, px, py + (p.size * 0.6 + 12) * this.dpr);
    });

    // 5. Draw Special Asteroids
    this.specialAsteroids.forEach(a => {
      if (a.isHyperbolic) {
        // 'Oumuamua interstellar hyperbolic path
        a.progress += a.speed * step;
        if (a.progress > 400) a.progress = -400;

        const ox = cx + a.progress * this.dpr;
        const oy = cy - Math.abs(a.progress * 0.35) * this.dpr + 30 * this.dpr;

        this.ctx.fillStyle = a.color;
        this.ctx.beginPath();
        this.ctx.arc(ox, oy, 3.2 * this.dpr, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = a.color;
        this.ctx.font = `${9 * this.dpr}px 'Space Grotesk', sans-serif`;
        this.ctx.fillText(a.name, ox, oy - 8 * this.dpr);
        return;
      }

      a.angle += a.speed * 0.4 * step;
      let ax, ay;
      if (a.isElliptic) {
        ax = cx - 20 * this.dpr + Math.cos(a.angle) * a.a * this.dpr * this.zoom;
        ay = cy + Math.sin(a.angle) * a.b * this.dpr * this.zoom;
      } else {
        ax = cx + Math.cos(a.angle) * a.dist * this.dpr * this.zoom;
        ay = cy + Math.sin(a.angle) * a.dist * this.dpr * this.zoom;
      }

      this.ctx.fillStyle = a.color;
      this.ctx.beginPath();
      this.ctx.arc(ax, ay, a.size * this.dpr * this.zoom, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = a.color;
      this.ctx.font = `${9 * this.dpr}px 'Space Grotesk', sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(a.name, ax, ay - 6 * this.dpr);
    });
  }
}

// -----------------------------------------------------------------------------
// ASTEROID IMPACT THREAT CALCULATOR
// Tính toán động năng va chạm, hố va chạm và hậu quả khí quyển toàn cầu
// -----------------------------------------------------------------------------
class AsteroidImpactSimulator {
  constructor() {
    this.asteroids = {
      chelyabinsk: { name: 'Thiên thạch Chelyabinsk 2013', diamMeters: 20, speedKmS: 19, density: 3000, desc: 'Nổ trên không cao 30km, sóng xung kích làm vỡ 100.000 cửa sổ.' },
      tunguska: { name: 'Vật thể Tunguska 1908', diamMeters: 60, speedKmS: 25, density: 2500, desc: 'San phẳng 80 triệu cây rừng trên diện tích 2.150 km² ở Siberia.' },
      apophis: { name: '99942 Apophis (Tiếp cận 2029)', diamMeters: 370, speedKmS: 30, density: 3200, desc: 'Mối đe dọa hàng đầu: Sức nổ 1.200 Megatons nếu va chạm.' },
      bennu: { name: '101955 Bennu', diamMeters: 490, speedKmS: 28, density: 1200, desc: 'Tiểu hành tinh xốp giàu carbon mục tiêu của tàu OSIRIS-REx.' },
      psyche: { name: '16 Psyche (Quái vật kim loại)', diamMeters: 226000, speedKmS: 22, density: 7000, desc: 'Hủy diệt hành tinh hoàn toàn: Làm tan chảy vỏ Trái Đất.' },
      chicxulub: { name: 'Kẻ Tuyệt Diệt Chicxulub (Khủng long)', diamMeters: 12000, speedKmS: 20, density: 3000, desc: 'Tuyệt chủng 75% sinh quyển 66 triệu năm trước.' }
    };

    this.init();
  }

  init() {
    const select = document.getElementById('impact-asteroid-select');
    const targetType = document.getElementById('impact-target-type');
    const calcBtn = document.getElementById('impact-calc-btn');

    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        const key = select ? select.value : 'apophis';
        const isOcean = targetType ? targetType.value === 'ocean' : false;
        this.calculateImpact(this.asteroids[key], isOcean);
      });
    }

    // Trigger initial calculation
    setTimeout(() => {
      if (this.asteroids['apophis']) this.calculateImpact(this.asteroids['apophis'], false);
    }, 500);
  }

  calculateImpact(ast, isOcean) {
    const resultBox = document.getElementById('impact-results-area');
    if (!resultBox) return;

    // Mass: volume of sphere * density
    const radius = ast.diamMeters / 2;
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    const massKg = volume * ast.density;

    // Kinetic Energy E = 0.5 * m * v^2 in Joules
    const velocityMs = ast.speedKmS * 1000;
    const energyJoules = 0.5 * massKg * Math.pow(velocityMs, 2);

    // 1 Megaton TNT = 4.184 × 10^15 Joules
    const megatonsTNT = (energyJoules / 4.184e15).toFixed(1);
    const hiroshimaEquiv = (megatonsTNT * 1e6 / 15).toLocaleString(); // 15 kilotons Hiroshima

    // Approximate Crater Diameter (Schmidt-Holsapple scaling simplified)
    const craterKm = (0.07 * Math.pow(energyJoules / 1e12, 0.29)).toFixed(1);

    // Richter magnitude estimate: M = 0.67 * log10(E) - 5.87
    const richter = Math.min(12, (0.67 * (Math.log10(energyJoules) - 9.1)).toFixed(1));

    resultBox.innerHTML = `
      <div class="result-box glass-panel animate-fade-in" style="border-color: rgba(239, 35, 60, 0.4);">
        <div class="result-header">
          <span class="badge" style="background: rgba(239, 35, 60, 0.2); border-color: #ef4444; color: #fca5a5;">
            Báo Cáo Đánh Giá Thảm Họa Va Chạm
          </span>
          <h4 class="result-title" style="color: #ffffff; margin-top: 6px;">${ast.name}</h4>
          <p style="font-size: 0.82rem; color: #94a3b8;">${ast.desc}</p>
        </div>

        <div class="stardust-breakdown-grid" style="margin-top: 16px;">
          <div class="stardust-card">
            <div class="element-symbol" style="border-color: #ef4444; color: #ef4444; background: rgba(239, 35, 60, 0.15);">
              TNT
            </div>
            <div class="element-info">
              <strong style="color: #fca5a5;">${megatonsTNT} Megatons</strong>
              <span class="element-origin">Tương đương ${hiroshimaEquiv} quả bom Hiroshima</span>
            </div>
          </div>

          <div class="stardust-card">
            <div class="element-symbol" style="border-color: #f59e0b; color: #f59e0b; background: rgba(245, 158, 11, 0.15);">
              HỐ
            </div>
            <div class="element-info">
              <strong style="color: #fef08a;">${craterKm > 0.1 ? craterKm + ' km' : (ast.diamMeters * 3) + ' m'}</strong>
              <span class="element-origin">Đường kính miệng hố va chạm nóng chảy</span>
            </div>
          </div>

          <div class="stardust-card">
            <div class="element-symbol" style="border-color: #06b6d4; color: #06b6d4; background: rgba(6, 182, 212, 0.15);">
              CHẤN
            </div>
            <div class="element-info">
              <strong style="color: #67e8f9;">${richter > 0 ? richter + ' Độ Richter' : 'Sóng hạ âm'}</strong>
              <span class="element-origin">Chấn động truyền xuyên qua tâm địa cầu</span>
            </div>
          </div>

          <div class="stardust-card">
            <div class="element-symbol" style="border-color: #a855f7; color: #a855f7; background: rgba(168, 85, 247, 0.15);">
              ${isOcean ? 'SÓNG' : 'BỤI'}
            </div>
            <div class="element-info">
              <strong style="color: #d8b4fe;">${isOcean ? 'Sóng thần cao hàng chục đến hàng trăm mét' : 'Mùa đông va chạm che phủ ánh sáng'}</strong>
              <span class="element-origin">${isOcean ? 'Đánh sụp mọi thành phố ven biển trong lục địa' : 'Khí hậu toàn cầu giảm đột ngột'}</span>
            </div>
          </div>
        </div>

        <div class="philosophical-quote" style="border-left-color: #ef4444; margin-top: 16px;">
          <em>"Nếu một tiểu hành tinh như ${ast.name} đâm sầm vào Trái Đất, nhân loại không có nơi nào để trốn thoát. Dự án DART của NASA đã chứng minh ta có thể làm lệch hướng thiên thể bằng động năng, nhưng chìa khóa quyết định là phát hiện sớm từ bóng tối ngoài rìa vũ trụ."</em>
        </div>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.solarOrrery = new SolarOrrery('solar-orrery-canvas');
  window.impactSim = new AsteroidImpactSimulator();
});
