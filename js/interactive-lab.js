// ==============================================================================
// THE ABYSSAL COSMOS - PHÒNG THÍ NGHIỆM VŨ TRỤ TƯƠNG TÁC (INTERACTIVE LAB)
// Máy tính bụi sao, so sánh quy mô vũ trụ, dòng thời gian & audio visualizer
// ==============================================================================

class CosmicLab {
  constructor() {
    this.initStardustCalculator();
    this.initScaleVisualizer();
    this.initTimeline();
    this.initAudioVisualizer();
  }

  // 1. Máy tính Bụi Sao (Stardust Origin Calculator)
  initStardustCalculator() {
    const calcBtn = document.getElementById('calc-stardust-btn');
    if (!calcBtn) return;

    calcBtn.addEventListener('click', () => {
      const weightInput = document.getElementById('calc-weight');
      const birthInput = document.getElementById('calc-birthdate');
      const resultArea = document.getElementById('stardust-result');

      const weight = parseFloat(weightInput.value) || 60;
      const birthDate = birthInput.value ? new Date(birthInput.value) : new Date(2000, 0, 1);
      const now = new Date();

      const diffMs = Math.max(0, now - birthDate);
      const diffYears = (diffMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
      const cosmicAgeUniverse = 13.8e9; // 13.8 billion years
      const fractionOfCosmos = ((diffYears / cosmicAgeUniverse) * 100).toExponential(3);

      // Mass distribution in human body
      const oMass = (weight * 0.65).toFixed(1); // Oxygen
      const cMass = (weight * 0.185).toFixed(1); // Carbon
      const hMass = (weight * 0.095).toFixed(1); // Hydrogen (Big Bang)
      const nMass = (weight * 0.032).toFixed(1); // Nitrogen
      const feMass = (weight * 0.00006 * 1000).toFixed(1); // Iron in grams

      resultArea.innerHTML = `
        <div class="result-box glass-panel animate-fade-in">
          <div class="result-header">
            <span class="badge badge-accent">Kết Quả Phân Tích Bụi Sao</span>
            <h4 class="result-title">Bạn Là Một Mảnh Vỡ Ý Thức Của Vũ Trụ</h4>
          </div>

          <p class="result-summary">
            Trong suốt <strong>${diffYears} năm</strong> hiện diện (chiếm khoảng <strong>${fractionOfCosmos}%</strong> dòng đời vũ trụ), cơ thể nặng <strong>${weight} kg</strong> của bạn được dệt nên từ những lò lửa hạt nhân cổ xưa nhất:
          </p>

          <div class="stardust-breakdown-grid">
            <div class="stardust-card">
              <div class="element-symbol">H</div>
              <div class="element-info">
                <strong>${hMass} kg Hydrogen</strong>
                <span class="element-origin">Sinh ra trực tiếp từ Vụ Nổ Lớn 13.8 tỷ năm trước</span>
              </div>
            </div>

            <div class="stardust-card">
              <div class="element-symbol">O</div>
              <div class="element-info">
                <strong>${oMass} kg Oxy</strong>
                <span class="element-origin">Luyện thành trong tim các ngôi sao siêu khổng lồ</span>
              </div>
            </div>

            <div class="stardust-card">
              <div class="element-symbol">C</div>
              <div class="element-info">
                <strong>${cMass} kg Carbon</strong>
                <span class="element-origin">Nấu chín trong các sao khổng lồ đỏ cổ đại</span>
              </div>
            </div>

            <div class="stardust-card">
              <div class="element-symbol">Fe</div>
              <div class="element-info">
                <strong>${feMass} gram Sắt (trong máu)</strong>
                <span class="element-origin">Phun trào từ các vụ nổ siêu tân tinh (Supernova)</span>
              </div>
            </div>
          </div>

          <div class="philosophical-quote">
            <em>"Nguyên tử sắt trong hemoglobin mang oxy đi khắp cơ thể bạn và nguyên tử sắt trong thanh kiếm của chiến binh xưa đều được tôi rèn ở cùng một tâm chấn của một ngôi sao phát nổ cách đây hàng tỷ năm. Bạn không bước vào thế giới này; bạn sinh ra từ chính nó, tựa như sóng trào lên từ đại dương."</em>
            <div class="author">— Lawrence Krauss & Alan Watts</div>
          </div>
        </div>
      `;
    });
  }

  // 2. Trình So Sánh Thang Đo Vũ Trụ (Cosmic Scale Visualizer)
  initScaleVisualizer() {
    const scaleSlider = document.getElementById('scale-slider');
    const scaleTitle = document.getElementById('scale-title');
    const scaleSize = document.getElementById('scale-size');
    const scaleDesc = document.getElementById('scale-desc');
    const scaleVisual = document.getElementById('scale-visual-indicator');

    if (!scaleSlider || !scaleTitle) return;

    const updateScale = (index) => {
      const item = COSMIC_DATABASE.scales[index];
      if (!item) return;

      scaleTitle.textContent = item.name;
      scaleSize.textContent = `Kích thước: ${item.display}`;
      scaleDesc.textContent = item.desc;

      // Update scale bar percentage
      const percent = (index / (COSMIC_DATABASE.scales.length - 1)) * 100;
      if (scaleVisual) {
        scaleVisual.style.width = `${percent}%`;
      }
    };

    scaleSlider.addEventListener('input', (e) => {
      updateScale(parseInt(e.target.value, 10));
    });

    updateScale(0);
  }

  // 3. Khởi tạo Trục Thời Gian Vũ Trụ (Timeline)
  initTimeline() {
    const timelineContainer = document.getElementById('timeline-items-container');
    if (!timelineContainer) return;

    timelineContainer.innerHTML = COSMIC_DATABASE.timeline.map((item, idx) => `
      <div class="timeline-card glass-panel" data-era="${idx}">
        <div class="timeline-era-badge">${item.era}</div>
        <div class="timeline-time">${item.time}</div>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-desc">${item.desc}</p>
        <div class="timeline-vibe">
          <i data-lucide="eye" class="icon-small"></i>
          <span>${item.vibe}</span>
        </div>
      </div>
    `).join('');
  }

  // 4. Audio Visualizer Canvas
  initAudioVisualizer() {
    const canvas = document.getElementById('audio-visualizer-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const drawVisualizer = () => {
      requestAnimationFrame(drawVisualizer);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!window.cosmicAudio || !window.cosmicAudio.isPlaying) {
        // Idle flat line with subtle breathing
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const mid = canvas.height / 2;
        ctx.moveTo(0, mid);
        for (let x = 0; x < canvas.width; x += 6) {
          const y = mid + Math.sin(x * 0.05 + Date.now() * 0.002) * 2;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
        return;
      }

      const data = window.cosmicAudio.getAudioData();
      const barWidth = (canvas.width / data.length) * 1.8;
      let x = 0;

      for (let i = 0; i < data.length; i++) {
        const val = data[i] / 255;
        const barHeight = val * (canvas.height * 0.85);

        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, '#7b3fe4');
        grad.addColorStop(0.5, '#00f5d4');
        grad.addColorStop(1, '#ffffff');

        ctx.fillStyle = grad;
        ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);

        x += barWidth;
      }
    };

    drawVisualizer();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cosmicLab = new CosmicLab();
});
