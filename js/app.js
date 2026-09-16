// ==============================================================================
// THE ABYSSAL COSMOS - ỨNG DỤNG ĐIỀU KHIỂN CHÍNH (MAIN APPLICATION)
// Render bách khoa toàn thư, bộ lọc, tìm kiếm, modal thiên thể & audio controls
// ==============================================================================

class AbyssalCosmosApp {
  constructor() {
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.activeModalEntity = null;

    this.init();
  }

  init() {
    this.renderCategories();
    this.renderEntities();
    this.initSearch();
    this.initAudioControls();
    this.initModal();
    this.initNavigation();
    this.initCosmicWhispers();
    this.initIcons();
  }

  initIcons() {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // 1. Render danh mục
  renderCategories() {
    const container = document.getElementById('category-filter-bar');
    if (!container) return;

    container.innerHTML = COSMIC_DATABASE.categories.map(cat => `
      <button class="filter-btn ${cat.id === this.currentCategory ? 'active' : ''}" data-cat="${cat.id}">
        <i data-lucide="${cat.icon}" class="icon-small"></i>
        <span>${cat.name}</span>
      </button>
    `).join('');

    container.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentCategory = btn.dataset.cat;
        this.renderEntities();
      });
    });
  }

  // 2. Render danh sách thiên thể
  renderEntities() {
    const grid = document.getElementById('cosmic-entities-grid');
    if (!grid) return;

    const filtered = COSMIC_DATABASE.entities.filter(item => {
      const matchCat = this.currentCategory === 'all' || item.category === this.currentCategory;
      const q = this.searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        item.name.toLowerCase().includes(q) || 
        item.designation.toLowerCase().includes(q) || 
        item.subtitle.toLowerCase().includes(q) ||
        item.overview.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-results glass-panel">
          <i data-lucide="compass" class="empty-icon"></i>
          <h3>Không tìm thấy dấu vết thiên thể</h3>
          <p>Hư không sâu thẳm chưa ghi nhận thực thể nào khớp với từ khóa "${this.searchQuery}".</p>
        </div>
      `;
      this.initIcons();
      return;
    }

    grid.innerHTML = filtered.map(item => `
      <div class="cosmic-card glass-panel" data-id="${item.id}">
        <div class="card-image-wrap">
          <img src="${item.image}" alt="${item.name}" loading="lazy" class="card-img" />
          <div class="card-overlay"></div>
          <span class="card-badge" style="border-color: ${item.color}; color: ${item.color};">
            ${item.badge}
          </span>
        </div>
        
        <div class="card-body">
          <div class="card-designation">${item.designation}</div>
          <h3 class="card-title">${item.name}</h3>
          <p class="card-subtitle">${item.subtitle}</p>
          
          <div class="card-quick-stats">
            <div class="stat-pill">
              <i data-lucide="ruler" class="icon-nano"></i>
              <span>${item.distance}</span>
            </div>
            <div class="stat-pill">
              <i data-lucide="scale" class="icon-nano"></i>
              <span>${item.mass}</span>
            </div>
          </div>

          <p class="card-desc-snippet">${item.overview.slice(0, 115)}...</p>

          <button class="card-explore-btn" style="--accent-color: ${item.color}">
            <span>Thâm Nhập Vực Thẳm</span>
            <i data-lucide="arrow-right" class="icon-small"></i>
          </button>
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards
    grid.querySelectorAll('.cosmic-card').forEach(card => {
      card.addEventListener('click', () => {
        const entityId = card.dataset.id;
        const entity = COSMIC_DATABASE.entities.find(e => e.id === entityId);
        if (entity) this.openModal(entity);
      });
    });

    this.initIcons();
  }

  // 3. Thanh tìm kiếm trực tiếp
  initSearch() {
    const input = document.getElementById('cosmic-search-input');
    if (!input) return;

    input.addEventListener('input', (e) => {
      this.searchQuery = e.target.value;
      this.renderEntities();
    });

    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        this.searchQuery = '';
        this.renderEntities();
      });
    }
  }

  // 4. Modal chi tiết thiên thể
  initModal() {
    const modal = document.getElementById('cosmic-detail-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    if (!modal) return;

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  openModal(entity) {
    const modal = document.getElementById('cosmic-detail-modal');
    if (!modal) return;

    document.getElementById('modal-img').src = entity.image;
    document.getElementById('modal-title').textContent = entity.name;
    document.getElementById('modal-designation').textContent = entity.designation;
    document.getElementById('modal-badge').textContent = entity.badge;
    document.getElementById('modal-badge').style.borderColor = entity.color;
    document.getElementById('modal-badge').style.color = entity.color;

    document.getElementById('modal-quote').textContent = entity.quote;
    document.getElementById('modal-overview').textContent = entity.overview;
    document.getElementById('modal-lore').textContent = entity.lore;

    const detailsGrid = document.getElementById('modal-details-grid');
    detailsGrid.innerHTML = `
      <div class="modal-stat-item">
        <span class="stat-label">Khoảng cách tới Trái Đất</span>
        <span class="stat-value">${entity.distance}</span>
      </div>
      <div class="modal-stat-item">
        <span class="stat-label">Khối lượng ước tính</span>
        <span class="stat-value">${entity.mass}</span>
      </div>
      <div class="modal-stat-item">
        <span class="stat-label">Đường kính / Phạm vi</span>
        <span class="stat-value">${entity.diameter}</span>
      </div>
      <div class="modal-stat-item">
        <span class="stat-label">Nhiệt độ</span>
        <span class="stat-value">${entity.temperature}</span>
      </div>
      ${entity.details.map(d => `
        <div class="modal-stat-item highlight">
          <span class="stat-label">${d.label}</span>
          <span class="stat-value">${d.value}</span>
        </div>
      `).join('')}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.initIcons();
  }

  // 5. Điều khiển âm thanh
  initAudioControls() {
    const toggleBtn = document.getElementById('audio-master-toggle');
    const volumeSlider = document.getElementById('audio-volume-slider');
    const modeSelect = document.getElementById('audio-mode-select');
    const statusText = document.getElementById('audio-status-text');
    const soundIndicator = document.getElementById('audio-pulse-indicator');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const isPlaying = window.cosmicAudio.togglePlay();
        if (isPlaying) {
          toggleBtn.classList.add('playing');
          toggleBtn.querySelector('.audio-btn-label').textContent = 'Tắt Âm Hư Không';
          if (statusText) statusText.textContent = 'Đang Phát: Vực Thẳm Vũ Trụ';
          if (soundIndicator) soundIndicator.classList.add('active');
        } else {
          toggleBtn.classList.remove('playing');
          toggleBtn.querySelector('.audio-btn-label').textContent = 'Bật Âm Hư Không';
          if (statusText) statusText.textContent = 'Âm thanh đã tắt';
          if (soundIndicator) soundIndicator.classList.remove('active');
        }
        this.initIcons();
      });
    }

    if (volumeSlider) {
      volumeSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        window.cosmicAudio.setVolume(val);
      });
    }

    if (modeSelect) {
      modeSelect.addEventListener('change', (e) => {
        window.cosmicAudio.setMode(e.target.value);
      });
    }
  }

  // 6. Điều hướng mượt mà
  initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // 7. Lời thì thầm của vũ trụ (Cosmic Whispers Widget)
  initCosmicWhispers() {
    const quotes = [
      '“Vũ trụ không có nghĩa vụ phải cư xử hợp lý với trực giác của loài người.” — Neil deGrasse Tyson',
      '“Nhìn sâu vào bóng tối vô tận, bạn nhận ra hư không cũng đang lặng lẽ nhìn lại bạn.” — Friedrich Nietzsche',
      '“Tất cả chúng ta đều ở trong rãnh nước, nhưng một số người trong chúng ta đang ngước nhìn những vì sao.” — Oscar Wilde',
      '“Nếu bạn muốn làm một chiếc bánh táo từ đầu, trước tiên bạn phải phát minh ra cả vũ trụ.” — Carl Sagan',
      '“Hãy nhớ nhìn lên các vì sao chứ đừng nhìn xuống chân mình.” — Stephen Hawking'
    ];

    const quoteEl = document.getElementById('cosmic-whisper-text');
    if (!quoteEl) return;

    let index = 0;
    setInterval(() => {
      index = (index + 1) % quotes.length;
      quoteEl.style.opacity = '0';
      setTimeout(() => {
        quoteEl.textContent = quotes[index];
        quoteEl.style.opacity = '1';
      }, 500);
    }, 9000);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.cosmosApp = new AbyssalCosmosApp();
});
