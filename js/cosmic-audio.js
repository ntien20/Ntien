// ==============================================================================
// THE ABYSSAL COSMOS - BỘ TẠO ÂM THANH HƯ KHÔNG VŨ TRỤ (WEB AUDIO SYNTHESIZER)
// Tạo không gian âm thanh huyền bí, sâu thẳm và rợn ngợp chuẩn điện ảnh Sci-Fi
// ==============================================================================

class CosmicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.analyser = null;
    this.oscillators = [];
    this.noiseNode = null;
    this.pulsarInterval = null;
    this.currentMode = 'abyss'; // 'abyss' | 'pulsar' | 'nebula'
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.3, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }
  }

  togglePlay() {
    this.initContext();

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    if (!this.ctx) this.initContext();
    this.isPlaying = true;

    // Smooth fade in
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.35, this.ctx.currentTime + 3);

    this.startDeepDrone();
    this.startCosmicWind();
    this.startEtherealHarmonics();
    if (this.currentMode === 'pulsar') {
      this.startPulsarBeats();
    }
  }

  stop() {
    if (!this.ctx || !this.isPlaying) return;
    this.isPlaying = false;

    // Smooth fade out
    this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);

    setTimeout(() => {
      this.oscillators.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
      this.oscillators = [];

      if (this.noiseNode) {
        try { this.noiseNode.stop(); this.noiseNode.disconnect(); } catch (e) {}
        this.noiseNode = null;
      }

      if (this.pulsarInterval) {
        clearInterval(this.pulsarInterval);
        this.pulsarInterval = null;
      }
    }, 1600);
  }

  setVolume(val) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(val, this.ctx.currentTime + 0.1);
    }
  }

  // 1. Âm thanh tần số siêu thấp (Deep Space Drone)
  startDeepDrone() {
    const freqs = [43.2, 54.0, 64.8]; // Harmonic sub-bass ratios
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(f, this.ctx.currentTime);

      // Lowpass filter for dark, muddy gloom
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140 + idx * 40, this.ctx.currentTime);
      filter.Q.setValueAtTime(4, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.18 / (idx + 1), this.ctx.currentTime);

      // Slow frequency drift (LFO simulation)
      const driftOsc = this.ctx.createOscillator();
      const driftGain = this.ctx.createGain();
      driftOsc.frequency.setValueAtTime(0.08 + idx * 0.03, this.ctx.currentTime);
      driftGain.gain.setValueAtTime(2.5, this.ctx.currentTime);
      driftOsc.connect(osc.frequency);
      driftOsc.start();
      this.oscillators.push(driftOsc);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });
  }

  // 2. Gió vũ trụ hư không (Filtered Cosmic Wind Noise)
  startCosmicWind() {
    const bufferSize = this.ctx.sampleRate * 3;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    // Pink-ish noise generation
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.08;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(280, this.ctx.currentTime);
    filter.Q.setValueAtTime(2.2, this.ctx.currentTime);

    // Filter frequency modulation (breathing void)
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // 8-second breathing cycle
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(180, this.ctx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();
    this.oscillators.push(lfo);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start();
    this.noiseNode = whiteNoise;
  }

  // 3. Tiếng chuông vũ trụ & hòa âm hư không (Ethereal Harmonics)
  startEtherealHarmonics() {
    const chord = [216, 288, 360, 432]; // 432Hz mystical tuning
    chord.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(freq, this.ctx.currentTime);
      filter.Q.setValueAtTime(12, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime);

      // Tremolo
      const trem = this.ctx.createOscillator();
      trem.frequency.setValueAtTime(0.2 + idx * 0.1, this.ctx.currentTime);
      const tremGain = this.ctx.createGain();
      tremGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      trem.connect(gain.gain);
      trem.start();
      this.oscillators.push(trem);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });
  }

  // 4. Nhịp đập vô tuyến Sao Xung (Pulsar Radio Pulse)
  startPulsarBeats() {
    if (this.pulsarInterval) clearInterval(this.pulsarInterval);
    
    this.pulsarInterval = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      this.triggerPulsarClick();
    }, 720); // ~1.4 Hz pulse
  }

  triggerPulsarClick() {
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.1);
    } catch (e) {}
  }

  setMode(mode) {
    this.currentMode = mode;
    if (!this.isPlaying) return;

    if (mode === 'pulsar') {
      this.startPulsarBeats();
    } else {
      if (this.pulsarInterval) {
        clearInterval(this.pulsarInterval);
        this.pulsarInterval = null;
      }
    }
  }

  // Lấy dữ liệu phổ để vẽ audio visualizer
  getAudioData() {
    if (!this.analyser) return new Uint8Array(0);
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }
}

// Instance toàn cục
window.cosmicAudio = new CosmicAudioEngine();
