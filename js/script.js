/**
 * EstateNova – Luxury Real Estate Template
 * Standalone Vanilla JavaScript Controller
 */

// --- FAVORITES (SHORTLIST) STORE ---
const FavoritesStore = {
  STORAGE_KEY: 'estatenova_favorites',

  getAll() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error('Error loading favorites:', e);
      return [];
    }
  },

  has(id) {
    const list = this.getAll();
    return list.includes(id);
  },

  add(id) {
    const list = this.getAll();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
      this.notify(id, true);
    }
  },

  remove(id) {
    let list = this.getAll();
    list = list.filter((item) => item !== id);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    this.notify(id, false);
  },

  toggle(id) {
    if (this.has(id)) {
      this.remove(id);
      return false;
    } else {
      this.add(id);
      return true;
    }
  },

  clear() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.notify(null, false);
  },

  count() {
    return this.getAll().length;
  },

  notify(id, added) {
    // Update all badges on page
    updateFavoriteBadges();
    // Update all heart buttons on page
    updateHeartButtons();
    // Re-render favorites drawer if open
    renderDrawerFavorites();
    // Re-render favorites page if on favorites.html
    if (window.location.pathname.includes('favorites.html')) {
      renderFavoritesPage();
    }
  },
};

// --- TOAST NOTIFICATIONS ---
function showToast(message, iconType = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className =
    'pointer-events-auto bg-stone-900/95 text-stone-100 border border-stone-800 px-4 py-3 shadow-2xl backdrop-blur-md flex items-center gap-3 text-xs tracking-wide transition-all duration-300 opacity-0 translate-y-2';

  let iconSvg = '';
  if (iconType === 'heart') {
    iconSvg = `<svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
  } else if (iconType === 'check') {
    iconSvg = `<svg class="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>`;
  } else {
    iconSvg = `<svg class="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
  }

  toast.innerHTML = `
    ${iconSvg}
    <span class="font-light">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
    toast.classList.add('opacity-100', 'translate-y-0');
  });

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3200);
}

// --- UPDATE FAVORITES BADGES & HEARTS ---
function updateFavoriteBadges() {
  const count = FavoritesStore.count();
  const badges = document.querySelectorAll('.favorites-badge-count');
  badges.forEach((b) => {
    b.textContent = count;
    if (count > 0) {
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  const countTexts = document.querySelectorAll('.favorites-text-count');
  countTexts.forEach((t) => {
    t.textContent = `(${count})`;
  });
}

function updateHeartButtons() {
  const heartBtns = document.querySelectorAll('[data-favorite-id]');
  heartBtns.forEach((btn) => {
    const id = btn.getAttribute('data-favorite-id');
    const isFav = FavoritesStore.has(id);
    const heartSvg = btn.querySelector('svg');
    if (heartSvg) {
      if (isFav) {
        heartSvg.setAttribute('fill', '#b45309');
        heartSvg.classList.add('text-amber-700');
        heartSvg.classList.remove('text-stone-700');
        btn.setAttribute('title', 'Remove from saved shortlist');
      } else {
        heartSvg.setAttribute('fill', 'none');
        heartSvg.classList.remove('text-amber-700');
        heartSvg.classList.add('text-stone-700');
        btn.setAttribute('title', 'Save to private shortlist');
      }
    }
  });
}

// --- NAVBAR & MOBILE MENU ---
function initNavbar() {
  const nav = document.getElementById('main-navbar');
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-stone-950/95', 'shadow-2xl');
        nav.classList.remove('bg-stone-950/80');
      } else {
        nav.classList.add('bg-stone-950/80');
        nav.classList.remove('bg-stone-950/95', 'shadow-2xl');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // Mobile menu toggle
  const openMobileBtn = document.getElementById('mobile-menu-open-btn');
  const closeMobileBtn = document.getElementById('mobile-menu-close-btn');
  const mobileMenu = document.getElementById('mobile-menu-overlay');

  if (openMobileBtn && mobileMenu) {
    openMobileBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    });
  }

  if (closeMobileBtn && mobileMenu) {
    closeMobileBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  // Close mobile menu on clicking backdrop
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }
}

// --- FAVORITES (SHORTLIST) DRAWER ---
function initFavoritesDrawer() {
  const drawer = document.getElementById('favorites-drawer');
  const openBtns = document.querySelectorAll('.open-favorites-drawer-btn');
  const closeBtn = document.getElementById('close-favorites-drawer-btn');
  const clearBtn = document.getElementById('clear-drawer-favorites-btn');

  openBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openFavoritesDrawer();
    });
  });

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      closeFavoritesDrawer();
    });
  }

  if (drawer) {
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeFavoritesDrawer();
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      FavoritesStore.clear();
      showToast('Shortlist cleared', 'info');
    });
  }
}

function openFavoritesDrawer() {
  const drawer = document.getElementById('favorites-drawer');
  if (drawer) {
    renderDrawerFavorites();
    drawer.classList.remove('hidden');
    const panel = drawer.querySelector('.drawer-panel');
    if (panel) {
      requestAnimationFrame(() => {
        panel.classList.remove('translate-x-full');
      });
    }
    document.body.classList.add('overflow-hidden');
  }
}

function closeFavoritesDrawer() {
  const drawer = document.getElementById('favorites-drawer');
  if (drawer) {
    const panel = drawer.querySelector('.drawer-panel');
    if (panel) {
      panel.classList.add('translate-x-full');
      setTimeout(() => {
        drawer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }, 300);
    } else {
      drawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  }
}

function renderDrawerFavorites() {
  const container = document.getElementById('drawer-favorites-list');
  const emptyState = document.getElementById('drawer-favorites-empty');
  const footer = document.getElementById('drawer-favorites-footer');
  if (!container) return;

  const favIds = FavoritesStore.getAll();
  const savedProps = PROPERTIES_DATA.filter((p) => favIds.includes(p.id));

  if (savedProps.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (footer) footer.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (footer) footer.classList.remove('hidden');

  container.innerHTML = savedProps
    .map(
      (p) => `
    <div class="flex gap-4 p-4 border border-stone-200 bg-white hover:border-amber-400/60 transition-colors group">
      <a href="property-details.html?id=${p.id}" class="w-20 h-20 flex-shrink-0 overflow-hidden bg-stone-900 block">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </a>
      <div class="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <div class="flex items-start justify-between gap-2">
            <a href="property-details.html?id=${p.id}" class="font-serif text-sm font-normal text-stone-900 hover:text-amber-800 line-clamp-1 transition-colors">
              ${p.title}
            </a>
            <button type="button" class="text-stone-400 hover:text-rose-600 transition-colors cursor-pointer" onclick="FavoritesStore.remove('${p.id}'); showToast('Removed from shortlist', 'heart');">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <p class="text-[11px] text-stone-500 line-clamp-1 mt-0.5">${p.location}, ${p.city}</p>
        </div>
        <div class="flex items-center justify-between pt-2 border-t border-stone-100">
          <span class="font-serif text-sm font-medium text-stone-900">${p.formattedPrice}</span>
          <a href="property-details.html?id=${p.id}" class="text-[11px] uppercase tracking-wider text-amber-700 hover:text-amber-900 font-medium">
            Details &rarr;
          </a>
        </div>
      </div>
    </div>
  `
    )
    .join('');
}

// --- SCHEDULE VIEWING MODAL ---
let currentViewingPropertyId = null;

function initScheduleModal() {
  const modal = document.getElementById('schedule-viewing-modal');
  const closeBtn = document.getElementById('close-schedule-modal-btn');
  const form = document.getElementById('schedule-viewing-form');
  const successState = document.getElementById('schedule-modal-success');
  const resetBtn = document.getElementById('schedule-modal-reset-btn');

  // Open triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-schedule-modal-btn');
    if (trigger) {
      e.preventDefault();
      const propId = trigger.getAttribute('data-property-id');
      openScheduleModal(propId);
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      closeScheduleModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeScheduleModal();
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="client_name"]')?.value.trim();
      const email = form.querySelector('[name="client_email"]')?.value.trim();
      const phone = form.querySelector('[name="client_phone"]')?.value.trim();
      const date = form.querySelector('[name="viewing_date"]')?.value;

      if (!name || !email || !phone || !date) {
        showToast('Please complete all required fields.', 'info');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Transmitting Confidential Request...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.classList.add('hidden');
        if (successState) successState.classList.remove('hidden');
        showToast('Viewing request submitted successfully.', 'check');
      }, 900);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (form) {
        form.reset();
        form.classList.remove('hidden');
      }
      if (successState) successState.classList.add('hidden');
      closeScheduleModal();
    });
  }
}

function openScheduleModal(propId = null) {
  const modal = document.getElementById('schedule-viewing-modal');
  if (!modal) return;

  currentViewingPropertyId = propId;
  const select = modal.querySelector('[name="property_select"]');
  if (select && PROPERTIES_DATA) {
    select.innerHTML = PROPERTIES_DATA.map(
      (p) => `<option value="${p.id}" ${propId === p.id ? 'selected' : ''}>${p.title} (${p.city}) — ${p.formattedPrice}</option>`
    ).join('');
  }

  // Set min date to tomorrow
  const dateInput = modal.querySelector('[name="viewing_date"]');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    dateInput.value = tomorrow.toISOString().split('T')[0];
  }

  const form = document.getElementById('schedule-viewing-form');
  const successState = document.getElementById('schedule-modal-success');
  if (form) form.classList.remove('hidden');
  if (successState) successState.classList.add('hidden');

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeScheduleModal() {
  const modal = document.getElementById('schedule-viewing-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- CONTACT AGENT MODAL ---
let currentSelectedAgentId = null;

function initContactAgentModal() {
  const modal = document.getElementById('contact-agent-modal');
  const closeBtn = document.getElementById('close-agent-modal-btn');
  const form = document.getElementById('contact-agent-form');
  const successState = document.getElementById('agent-modal-success');
  const resetBtn = document.getElementById('agent-modal-reset-btn');

  // Triggers
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-agent-modal-btn');
    if (trigger) {
      e.preventDefault();
      const agentId = trigger.getAttribute('data-agent-id');
      openAgentModal(agentId);
    }
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      closeAgentModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeAgentModal();
      }
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('[name="agent_client_name"]')?.value.trim();
      const email = form.querySelector('[name="agent_client_email"]')?.value.trim();
      const phone = form.querySelector('[name="agent_client_phone"]')?.value.trim();

      if (!name || !email || !phone) {
        showToast('Please fill out all required fields.', 'info');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Sending Direct Message...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.classList.add('hidden');
        if (successState) successState.classList.remove('hidden');
        showToast('Message transmitted directly to advisor desk.', 'check');
      }, 800);
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (form) {
        form.reset();
        form.classList.remove('hidden');
      }
      if (successState) successState.classList.add('hidden');
      closeAgentModal();
    });
  }
}

function openAgentModal(agentId = null) {
  const modal = document.getElementById('contact-agent-modal');
  if (!modal) return;

  const agent = AGENTS_DATA.find((a) => a.id === agentId) || AGENTS_DATA[0];
  currentSelectedAgentId = agent.id;

  const avatar = modal.querySelector('.agent-modal-avatar');
  const name = modal.querySelector('.agent-modal-name');
  const title = modal.querySelector('.agent-modal-title');
  const phone = modal.querySelector('.agent-modal-phone');
  const email = modal.querySelector('.agent-modal-email');

  if (avatar) avatar.src = agent.image;
  if (name) name.textContent = agent.name;
  if (title) title.textContent = agent.title;
  if (phone) {
    phone.textContent = agent.phone;
    phone.href = `tel:${agent.phone.replace(/[^0-9+]/g, '')}`;
  }
  if (email) {
    email.textContent = agent.email;
    email.href = `mailto:${agent.email}`;
  }

  const form = document.getElementById('contact-agent-form');
  const successState = document.getElementById('agent-modal-success');
  if (form) form.classList.remove('hidden');
  if (successState) successState.classList.add('hidden');

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeAgentModal() {
  const modal = document.getElementById('contact-agent-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

// --- GLOBAL ACCORDION HANDLER ---
function initAccordions() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq-trigger-btn');
    if (!btn) return;

    const item = btn.closest('.faq-item');
    if (!item) return;

    const isOpen = item.classList.contains('is-open');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    // Close sibling accordions in same group if desired
    const parentContainer = item.parentElement;
    if (parentContainer) {
      parentContainer.querySelectorAll('.faq-item').forEach((sibling) => {
        if (sibling !== item) {
          sibling.classList.remove('is-open');
          const ans = sibling.querySelector('.faq-answer');
          const ic = sibling.querySelector('.faq-icon');
          if (ans) ans.classList.add('hidden');
          if (ic) ic.innerHTML = `<svg class="w-4 h-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>`;
        }
      });
    }

    if (isOpen) {
      item.classList.remove('is-open');
      if (answer) answer.classList.add('hidden');
      if (icon) icon.innerHTML = `<svg class="w-4 h-4 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>`;
    } else {
      item.classList.add('is-open');
      if (answer) answer.classList.remove('hidden');
      if (icon) icon.innerHTML = `<svg class="w-4 h-4 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>`;
    }
  });
}

// --- PROPERTY CARD GENERATOR ---
function createPropertyCardHtml(p, viewMode = 'grid') {
  if (!p) return '';
  const isFav = FavoritesStore.has(p.id);
  const image = p.heroImage || p.image || (p.images && p.images[0]) || 'images/properties/property-01';
  const area = p.squareFeet || p.area || 0;
  const address = p.address || p.location || '';
  const city = p.city || 'Exclusive';
  const price = typeof p.price === 'number' ? p.price : 0;
  const formattedPrice = p.formattedPrice || (price > 0 ? `$${price.toLocaleString()}` : 'Price on Request');

  let ppsfText = '';
  if (p.pricePerSqFt) {
    ppsfText = `$${p.pricePerSqFt.toLocaleString()} / sq ft`;
  } else if (p.status === 'for-sale' && area > 0 && price > 0) {
    ppsfText = `$${Math.round(price / area).toLocaleString()} / sq ft`;
  } else if (p.status === 'for-rent' && area > 0 && price > 0) {
    ppsfText = `$${(price / area).toFixed(2)} / sq ft / mo`;
  } else {
    ppsfText = 'Premier Offering';
  }

  const agent = p.agent || (typeof getAgentById === 'function' ? getAgentById('agent-1') : {}) || {};
  const agentName = agent.name || 'Private Advisor';
  const agentAvatar = agent.image || agent.avatar || 'images/agents/elena-rostova.jpg';

  if (viewMode === 'list') {
    return `
      <div class="group bg-white border border-stone-200 overflow-hidden flex flex-col md:flex-row hover:border-amber-400/80 hover:shadow-xl transition-all duration-300">
        <div class="relative md:w-80 lg:w-96 aspect-[16/10] md:aspect-auto overflow-hidden bg-stone-900 flex-shrink-0">
          <img src="${image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20"></div>
          <div class="absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 ${
              p.status === 'for-sale' ? 'bg-amber-700 text-white' : 'bg-emerald-800 text-white'
            }">
              ${p.status === 'for-sale' ? 'For Sale' : 'Luxury Lease'}
            </span>
            <span class="text-[10px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 bg-stone-900/85 text-stone-300 backdrop-blur-sm">
              ${p.propertyType}
            </span>
          </div>
          <button
            type="button"
            data-favorite-id="${p.id}"
            class="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform active:scale-90 hover:bg-white text-stone-200 hover:text-amber-700 cursor-pointer"
            onclick="event.preventDefault(); const res = FavoritesStore.toggle('${p.id}'); showToast(res ? 'Saved to shortlist' : 'Removed from shortlist', 'heart');"
            title="Save to shortlist"
          >
            <svg class="w-4 h-4 ${isFav ? 'text-amber-700 fill-amber-700' : 'text-stone-300'}" viewBox="0 0 24 24" fill="${isFav ? '#b45309' : 'none'}" stroke="currentColor" stroke-width="1.5">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </button>
        </div>
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-start justify-between gap-4 mb-2">
              <div>
                <p class="text-xs uppercase tracking-[0.2em] text-amber-800 font-semibold mb-1">${address}, ${city}</p>
                <h3 class="font-serif text-xl sm:text-2xl text-stone-900 group-hover:text-amber-800 transition-colors">
                  <a href="property-details.html?id=${p.id}">${p.title}</a>
                </h3>
              </div>
              <div class="text-right flex-shrink-0">
                <span class="font-serif text-2xl text-stone-900 font-medium block">${formattedPrice}</span>
                <span class="text-[11px] text-stone-500 font-light">${ppsfText}</span>
              </div>
            </div>
            <p class="text-xs text-stone-600 font-light line-clamp-2 leading-relaxed mb-4">${p.description}</p>
            <div class="flex items-center gap-6 py-3 border-y border-stone-100 text-xs text-stone-700 font-light">
              <span class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
                <strong class="font-medium text-stone-900">${p.bedrooms}</strong> Beds
              </span>
              <span class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-1.5C3.7 2 2 3.7 2 5.5v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-11Z"/><path d="M14 6h4"/></svg>
                <strong class="font-medium text-stone-900">${p.bathrooms}</strong> Baths
              </span>
              <span class="flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5 text-stone-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="M9 21H3v-6"/><path d="m3 21 7-7"/></svg>
                <strong class="font-medium text-stone-900">${area.toLocaleString()}</strong> Sq Ft
              </span>
              <span class="hidden sm:inline text-stone-400">•</span>
              <span class="hidden sm:inline text-stone-500 font-light">Built ${p.yearBuilt}</span>
            </div>
          </div>
          <div class="mt-4 pt-2 flex items-center justify-between gap-4">
            <div class="flex items-center gap-2">
              <img src="${agentAvatar}" alt="${agentName}" class="w-7 h-7 rounded-full object-cover border border-stone-200" />
              <span class="text-xs text-stone-600 font-light">Advisor: <strong class="font-medium text-stone-900">${agentName}</strong></span>
            </div>
            <div class="flex items-center gap-3">
              <button type="button" class="open-schedule-modal-btn text-xs text-stone-700 hover:text-stone-900 border border-stone-300 hover:border-stone-900 px-3 py-1.5 tracking-wider uppercase transition-colors cursor-pointer" data-property-id="${p.id}">
                Schedule Tour
              </button>
              <a href="property-details.html?id=${p.id}" class="text-xs text-white bg-stone-900 hover:bg-amber-700 px-4 py-1.5 tracking-wider uppercase transition-colors">
                View Residence
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Grid view
  return `
    <div class="group bg-white border border-stone-200 overflow-hidden flex flex-col hover:border-amber-400/80 hover:shadow-xl transition-all duration-300">
      <div class="relative aspect-[16/10] overflow-hidden bg-stone-900">
        <img src="${image}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-black/20"></div>
        <div class="absolute top-4 left-4 flex flex-wrap gap-2">
          <span class="text-[10px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 ${
            p.status === 'for-sale' ? 'bg-amber-700 text-white' : 'bg-emerald-800 text-white'
          }">
            ${p.status === 'for-sale' ? 'For Sale' : 'Luxury Lease'}
          </span>
          <span class="text-[10px] tracking-[0.15em] uppercase font-medium px-2 py-0.5 bg-stone-900/85 text-stone-300 backdrop-blur-sm">
            ${p.propertyType}
          </span>
        </div>
        <button
          type="button"
          data-favorite-id="${p.id}"
          class="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform active:scale-90 hover:bg-white text-stone-200 hover:text-amber-700 cursor-pointer"
          onclick="event.preventDefault(); const res = FavoritesStore.toggle('${p.id}'); showToast(res ? 'Saved to shortlist' : 'Removed from shortlist', 'heart');"
          title="Save to shortlist"
        >
          <svg class="w-4 h-4 ${isFav ? 'text-amber-700 fill-amber-700' : 'text-stone-300'}" viewBox="0 0 24 24" fill="${isFav ? '#b45309' : 'none'}" stroke="currentColor" stroke-width="1.5">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
          </svg>
        </button>
        <div class="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
          <div>
            <span class="font-serif text-xl sm:text-2xl font-medium tracking-tight block">${formattedPrice}</span>
            <span class="text-[10px] uppercase tracking-wider text-stone-300 font-light">${ppsfText}</span>
          </div>
          <span class="text-[10px] uppercase tracking-widest text-amber-300 bg-black/40 px-2 py-0.5 backdrop-blur-sm border border-amber-400/20">
            ${city}
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <p class="text-[10px] uppercase tracking-[0.2em] text-amber-800 font-semibold mb-1">${address}</p>
          <h3 class="font-serif text-lg text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1 mb-2">
            <a href="property-details.html?id=${p.id}">${p.title}</a>
          </h3>
          <p class="text-xs text-stone-600 font-light line-clamp-2 leading-relaxed mb-4">${p.description}</p>
        </div>
        <div>
          <div class="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 text-xs text-stone-700 font-light text-center">
            <div>
              <span class="block font-medium text-stone-900">${p.bedrooms}</span>
              <span class="text-[10px] text-stone-400 uppercase tracking-wider">Beds</span>
            </div>
            <div class="border-x border-stone-100">
              <span class="block font-medium text-stone-900">${p.bathrooms}</span>
              <span class="text-[10px] text-stone-400 uppercase tracking-wider">Baths</span>
            </div>
            <div>
              <span class="block font-medium text-stone-900">${area.toLocaleString()}</span>
              <span class="text-[10px] text-stone-400 uppercase tracking-wider">Sq Ft</span>
            </div>
          </div>
          <div class="mt-4 flex items-center justify-between gap-2">
            <button type="button" class="open-schedule-modal-btn text-[11px] text-stone-600 hover:text-stone-900 tracking-wider uppercase transition-colors cursor-pointer" data-property-id="${p.id}">
              Schedule Tour
            </button>
            <a href="property-details.html?id=${p.id}" class="text-[11px] text-amber-800 hover:text-amber-950 font-medium tracking-wider uppercase inline-flex items-center gap-1 group/link">
              <span>View Estate</span>
              <span class="group-hover/link:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- PROPERTIES PAGE FILTER & SEARCH ---
function initPropertiesPage() {
  const container = document.getElementById('properties-catalog-grid');
  if (!container) return;

  const countDisplay = document.getElementById('properties-count-display');
  const emptyState = document.getElementById('properties-empty-state');
  const searchInput = document.getElementById('filter-search');
  const statusSelect = document.getElementById('filter-status');
  const locationSelect = document.getElementById('filter-location');
  const typeSelect = document.getElementById('filter-type');
  const priceSelect = document.getElementById('filter-price');
  const bedsSelect = document.getElementById('filter-beds');
  const sortSelect = document.getElementById('filter-sort');
  const resetBtn = document.getElementById('reset-filters-btn');
  const emptyResetBtn = document.getElementById('empty-reset-filters-btn');

  const viewGridBtn = document.getElementById('view-mode-grid-btn');
  const viewListBtn = document.getElementById('view-mode-list-btn');

  let currentViewMode = 'grid';

  // Read URL query params on load
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('q') && searchInput) searchInput.value = urlParams.get('q');
  if (urlParams.get('status') && statusSelect) statusSelect.value = urlParams.get('status');
  if (urlParams.get('location') && locationSelect) locationSelect.value = urlParams.get('location');
  if (urlParams.get('type') && typeSelect) typeSelect.value = urlParams.get('type');
  if (urlParams.get('price') && priceSelect) priceSelect.value = urlParams.get('price');

  const propertiesList = Array.isArray(window.PROPERTIES_DATA) ? window.PROPERTIES_DATA : [];

  const applyFilters = () => {
    const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const status = statusSelect ? statusSelect.value : 'all';
    const loc = locationSelect ? locationSelect.value : 'all';
    const type = typeSelect ? typeSelect.value : 'all';
    const price = priceSelect ? priceSelect.value : 'all';
    const beds = bedsSelect ? bedsSelect.value : 'all';
    const sort = sortSelect ? sortSelect.value : 'featured';

    let filtered = propertiesList.filter((p) => {
      const pTitle = (p.title || '').toLowerCase();
      const pAddress = (p.address || '').toLowerCase();
      const pLocation = (p.location || '').toLowerCase();
      const pCity = (p.city || '').toLowerCase();
      const pType = (p.propertyType || '').toLowerCase();
      const pDesc = (p.description || '').toLowerCase();
      const pPrice = typeof p.price === 'number' ? p.price : 0;
      const pBeds = typeof p.bedrooms === 'number' ? p.bedrooms : 0;

      // Keyword search
      if (q) {
        const matchText = `${pTitle} ${pAddress} ${pLocation} ${pCity} ${pType} ${pDesc}`;
        if (!matchText.includes(q)) return false;
      }

      // Status
      if (status !== 'all' && p.status !== status) return false;

      // Location
      if (loc !== 'all') {
        const locLower = loc.toLowerCase();
        const cityMatch = pCity.includes(locLower) || locLower.includes(pCity);
        const locMatch = pLocation.includes(locLower) || locLower.includes(pLocation);
        const addressMatch = pAddress.includes(locLower);
        // If searching Manhattan, also match New York
        const manhattanMatch = (locLower === 'manhattan' && (pCity.includes('new york') || pAddress.includes('tribeca') || pAddress.includes('columbus circle')));
        if (!cityMatch && !locMatch && !addressMatch && !manhattanMatch) {
          return false;
        }
      }

      // Property Type
      if (type !== 'all') {
        const typeLower = type.toLowerCase();
        const typeMatch = pType.includes(typeLower) || typeLower.includes(pType);
        if (!typeMatch) return false;
      }

      // Price range
      if (price === 'under-15m' && pPrice >= 15000000) return false;
      if (price === '15m-25m' && (pPrice < 15000000 || pPrice > 25000000)) return false;
      if (price === '25m-40m' && (pPrice < 25000000 || pPrice > 40000000)) return false;
      if (price === 'above-40m' && pPrice <= 40000000) return false;

      // Bedrooms
      if (beds !== 'all') {
        const minBeds = parseInt(beds, 10);
        if (pBeds < minBeds) return false;
      }

      return true;
    });

    // Sorting
    if (sort === 'price-asc') {
      filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
    } else if (sort === 'price-desc') {
      filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
    } else if (sort === 'area-desc') {
      filtered.sort((a, b) => (b.squareFeet || b.area || 0) - (a.squareFeet || a.area || 0));
    } else if (sort === 'newest') {
      filtered.sort((a, b) => (b.yearBuilt || 0) - (a.yearBuilt || 0));
    } else {
      // featured
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Render count
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} of ${propertiesList.length} estates`;
    }

    // Render cards
    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
    } else {
      if (emptyState) emptyState.classList.add('hidden');
      if (currentViewMode === 'grid') {
        container.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';
      } else {
        container.className = 'flex flex-col gap-6';
      }
      container.innerHTML = filtered.map((p) => createPropertyCardHtml(p, currentViewMode)).join('');
    }

    updateHeartButtons();
  };

  // Event listeners
  [searchInput, statusSelect, locationSelect, typeSelect, priceSelect, bedsSelect, sortSelect].forEach((el) => {
    if (el) {
      el.addEventListener('input', applyFilters);
      el.addEventListener('change', applyFilters);
    }
  });

  const resetAll = () => {
    if (searchInput) searchInput.value = '';
    if (statusSelect) statusSelect.value = 'all';
    if (locationSelect) locationSelect.value = 'all';
    if (typeSelect) typeSelect.value = 'all';
    if (priceSelect) priceSelect.value = 'all';
    if (bedsSelect) bedsSelect.value = 'all';
    if (sortSelect) sortSelect.value = 'featured';
    applyFilters();
  };

  if (resetBtn) resetBtn.addEventListener('click', resetAll);
  if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAll);

  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      currentViewMode = 'grid';
      viewGridBtn.classList.add('bg-stone-900', 'text-white');
      viewGridBtn.classList.remove('bg-white', 'text-stone-700');
      viewListBtn.classList.remove('bg-stone-900', 'text-white');
      viewListBtn.classList.add('bg-white', 'text-stone-700');
      applyFilters();
    });

    viewListBtn.addEventListener('click', () => {
      currentViewMode = 'list';
      viewListBtn.classList.add('bg-stone-900', 'text-white');
      viewListBtn.classList.remove('bg-white', 'text-stone-700');
      viewGridBtn.classList.remove('bg-stone-900', 'text-white');
      viewGridBtn.classList.add('bg-white', 'text-stone-700');
      applyFilters();
    });
  }

  // Initial load
  applyFilters();
}

// --- PROPERTY DETAILS PAGE RENDERER ---
function initPropertyDetailsPage() {
  const root = document.getElementById('property-details-root');
  if (!root) return;

  const propertiesList = Array.isArray(window.PROPERTIES_DATA) ? window.PROPERTIES_DATA : [];
  const urlParams = new URLSearchParams(window.location.search);
  const propId = urlParams.get('id') || 'prop-1';
  const property = propertiesList.find((p) => p.id === propId || p.slug === propId) || propertiesList[0];
  if (!property) return;

  const brandName = (window.CONFIG && window.CONFIG.brand && window.CONFIG.brand.name) ||
                    (window.SITE_CONFIG && window.SITE_CONFIG.brand && window.SITE_CONFIG.brand.name) ||
                    'EstateNova';
  document.title = `${property.title} | ${brandName}`;

  // Breadcrumb
  const breadcrumb = document.getElementById('property-detail-breadcrumb');
  if (breadcrumb) breadcrumb.textContent = property.title;

  // Header Details
  const titleEl = document.getElementById('property-detail-title');
  const addressEl = document.getElementById('property-detail-address');
  const priceEl = document.getElementById('property-detail-price');
  const ppsfEl = document.getElementById('property-detail-ppsf');
  const statusBadge = document.getElementById('property-detail-status-badge');
  const typeBadge = document.getElementById('property-detail-type-badge');

  if (titleEl) titleEl.textContent = property.title;
  if (addressEl) addressEl.textContent = `${property.address || property.location || ''}, ${property.city || ''}, ${property.state || ''} ${property.zipCode || ''}`;
  if (priceEl) priceEl.textContent = property.formattedPrice || (property.price ? `$${property.price.toLocaleString()}` : 'Price on Request');

  const area = property.squareFeet || property.area || 0;
  if (ppsfEl) {
    if (property.pricePerSqFt) {
      ppsfEl.textContent = `$${property.pricePerSqFt.toLocaleString()} / sq ft`;
    } else if (property.status === 'for-sale' && area > 0 && property.price) {
      ppsfEl.textContent = `$${Math.round(property.price / area).toLocaleString()} / sq ft`;
    } else if (property.status === 'for-rent' && area > 0 && property.price) {
      ppsfEl.textContent = `$${(property.price / area).toFixed(2)} / sq ft / mo`;
    } else {
      ppsfEl.textContent = 'Premier Offering';
    }
  }

  if (statusBadge) {
    statusBadge.textContent = property.status === 'for-sale' ? 'For Sale' : 'Luxury Lease';
    statusBadge.className = `px-3 py-1 text-xs uppercase tracking-[0.2em] font-semibold ${
      property.status === 'for-sale' ? 'bg-amber-700 text-white' : 'bg-emerald-800 text-white'
    }`;
  }
  if (typeBadge) typeBadge.textContent = property.propertyType || 'Generational Estate';

  // Action buttons
  const favBtn = document.getElementById('property-detail-fav-btn');
  if (favBtn) {
    favBtn.setAttribute('data-favorite-id', property.id);
    favBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const res = FavoritesStore.toggle(property.id);
      showToast(res ? 'Saved to private shortlist' : 'Removed from shortlist', 'heart');
    });
  }

  const shareBtn = document.getElementById('property-detail-share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        showToast('Residence link copied to clipboard', 'check');
      } else {
        showToast('Direct URL: ' + window.location.href, 'info');
      }
    });
  }

  // Gallery
  const mainImage = document.getElementById('property-detail-main-image');
  const thumbsContainer = document.getElementById('property-detail-thumbnails');
  const gallery = (property.images && property.images.length > 0) ? property.images :
                  (property.gallery && property.gallery.length > 0) ? property.gallery :
                  [property.heroImage || property.image].filter(Boolean);

  if (mainImage && gallery.length > 0) {
    mainImage.src = gallery[0];
  }

  if (thumbsContainer && gallery.length > 0) {
    thumbsContainer.innerHTML = gallery
      .map(
        (imgUrl, idx) => `
        <button
          type="button"
          class="property-gallery-thumb relative aspect-[16/10] overflow-hidden bg-stone-900 border-2 ${
            idx === 0 ? 'border-amber-500' : 'border-transparent opacity-70 hover:opacity-100'
          } transition-all cursor-pointer"
          data-image-url="${imgUrl}"
        >
          <img src="${imgUrl}" alt="${property.title} - View ${idx + 1}" class="w-full h-full object-cover" />
        </button>
      `
      )
      .join('');

    thumbsContainer.querySelectorAll('.property-gallery-thumb').forEach((btn) => {
      btn.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.property-gallery-thumb').forEach((b) => {
          b.classList.remove('border-amber-500');
          b.classList.add('border-transparent', 'opacity-70');
        });
        btn.classList.add('border-amber-500');
        btn.classList.remove('border-transparent', 'opacity-70');
        if (mainImage) {
          mainImage.src = btn.getAttribute('data-image-url');
        }
      });
    });
  }

  // Quick specs
  const bedsEl = document.getElementById('spec-beds');
  const bathsEl = document.getElementById('spec-baths');
  const areaEl = document.getElementById('spec-area');
  const lotEl = document.getElementById('spec-lot');
  const yearEl = document.getElementById('spec-year');
  const garageEl = document.getElementById('spec-garage');

  if (bedsEl) bedsEl.textContent = property.bedrooms || '-';
  if (bathsEl) bathsEl.textContent = property.bathrooms || '-';
  if (areaEl) areaEl.textContent = `${area.toLocaleString()} Sq Ft`;
  if (lotEl) lotEl.textContent = property.lotSize || 'Private Grounds';
  if (yearEl) yearEl.textContent = property.yearBuilt || 'Recent';
  if (garageEl) garageEl.textContent = property.garageSpaces ? `${property.garageSpaces} Cars` : 'Private Motor Court';

  // Overview & story
  const descEl = document.getElementById('property-detail-description');
  const storyEl = document.getElementById('property-detail-story');
  if (descEl) descEl.textContent = property.description || '';
  if (storyEl) storyEl.textContent = property.story || property.description || '';

  // Features list
  const featuresList = document.getElementById('property-detail-features-list');
  if (featuresList && property.features) {
    featuresList.innerHTML = property.features
      .map(
        (f) => `
        <li class="flex items-start gap-3 text-stone-700 font-light text-sm">
          <span class="w-5 h-5 rounded-full bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>
          </span>
          <span>${f}</span>
        </li>
      `
      )
      .join('');
  }

  // Amenities tags
  const amenitiesGrid = document.getElementById('property-detail-amenities-grid');
  if (amenitiesGrid && property.amenities) {
    amenitiesGrid.innerHTML = property.amenities
      .map(
        (a) => `
        <div class="p-3 bg-stone-50 border border-stone-200 text-stone-800 text-xs font-light flex items-center gap-2">
          <div class="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
          <span>${a}</span>
        </div>
      `
      )
      .join('');
  }

  // Agent Card
  const agent = property.agent || (typeof getAgentById === 'function' ? getAgentById('agent-1') : {}) || {};
  const agentAvatar = document.getElementById('detail-agent-avatar');
  const agentName = document.getElementById('detail-agent-name');
  const agentTitle = document.getElementById('detail-agent-title');
  const agentRating = document.getElementById('detail-agent-rating');
  const agentSales = document.getElementById('detail-agent-sales');
  const agentPhone = document.getElementById('detail-agent-phone');
  const agentEmail = document.getElementById('detail-agent-email');
  const agentBtn = document.getElementById('detail-agent-modal-btn');

  if (agentAvatar) agentAvatar.src = agent.image || agent.avatar || 'images/agents/elena-rostova.jpg';
  if (agentName) agentName.textContent = agent.name || 'Senior Managing Partner';
  if (agentTitle) agentTitle.textContent = agent.title || 'Private Client Advisory';
  if (agentRating) agentRating.textContent = `★ ${agent.rating || '5.0'}`;
  if (agentSales) agentSales.textContent = agent.totalSales || agent.salesVolume || '$150M+ Transacted';
  if (agentPhone && agent.phone) {
    agentPhone.textContent = agent.phone;
    agentPhone.href = `tel:${agent.phone.replace(/[^0-9+]/g, '')}`;
  }
  if (agentEmail && agent.email) {
    agentEmail.textContent = agent.email;
    agentEmail.href = `mailto:${agent.email}`;
  }
  if (agentBtn && agent.id) {
    agentBtn.setAttribute('data-agent-id', agent.id);
  }

  // Sidebar Schedule Form Trigger
  const tourForm = document.getElementById('detail-tour-booking-form');
  if (tourForm) {
    tourForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = tourForm.querySelector('[name="tour_name"]')?.value.trim();
      const email = tourForm.querySelector('[name="tour_email"]')?.value.trim();
      const phone = tourForm.querySelector('[name="tour_phone"]')?.value.trim();
      const date = tourForm.querySelector('[name="tour_date"]')?.value;

      if (!name || !email || !phone || !date) {
        showToast('Please fill out all viewing fields.', 'info');
        return;
      }

      const submitBtn = tourForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Submitting Request...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        tourForm.reset();
        showToast('Showing request submitted to ' + (agent.name || 'Advisor Desk'), 'check');
      }, 700);
    });
  }

  // Similar properties
  const similarContainer = document.getElementById('property-detail-similar-grid');
  if (similarContainer) {
    const similar = propertiesList.filter((p) => p.id !== property.id).slice(0, 3);
    similarContainer.innerHTML = similar.map((p) => createPropertyCardHtml(p, 'grid')).join('');
  }

  updateHeartButtons();
}

// --- FAVORITES PAGE RENDERER ---
function renderFavoritesPage() {
  const container = document.getElementById('favorites-page-grid') || document.getElementById('favorites-catalog-grid');
  const emptyState = document.getElementById('favorites-page-empty') || document.getElementById('favorites-empty-state');
  const actionBanner = document.getElementById('favorites-action-banner');
  const headerCount = document.getElementById('favorites-page-count') || document.getElementById('favorites-header-count');
  const clearBtn = document.getElementById('clear-all-favorites-page-btn') || document.getElementById('clear-shortlist-page-btn');

  if (!container) return;

  const favIds = FavoritesStore.getAll();
  const properties = (window.PROPERTIES_DATA || []).filter((p) => favIds.includes(p.id));

  if (headerCount) {
    headerCount.textContent = `${properties.length} ${properties.length === 1 ? 'Estate' : 'Estates'} Saved`;
  }

  if (properties.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    if (actionBanner) actionBanner.classList.add('hidden');
    if (clearBtn) clearBtn.classList.add('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (actionBanner) actionBanner.classList.remove('hidden');
  if (clearBtn) clearBtn.classList.remove('hidden');

  container.innerHTML = properties.map((p) => createPropertyCardHtml(p, 'grid')).join('');
  updateHeartButtons();

  if (clearBtn) {
    clearBtn.onclick = () => {
      FavoritesStore.clear();
      showToast('All saved residences cleared', 'info');
      renderFavoritesPage();
    };
  }
}

// --- CENTRALIZED CONFIGURATION & REBRANDING SYNC ---
function applyGlobalConfig() {
  const cfg = window.CONFIG || window.SITE_CONFIG;
  if (!cfg) return;

  // 1. Sync CSS Theme Variables to :root
  if (cfg.theme) {
    const root = document.documentElement;
    if (cfg.theme.accentColor) root.style.setProperty('--color-accent', cfg.theme.accentColor);
    if (cfg.theme.accentHover) root.style.setProperty('--color-accent-hover', cfg.theme.accentHover);
    if (cfg.theme.accentGold) root.style.setProperty('--color-accent-gold', cfg.theme.accentGold);
    if (cfg.theme.primaryDark) root.style.setProperty('--color-primary', cfg.theme.primaryDark);
    if (cfg.theme.secondaryDark) root.style.setProperty('--color-secondary', cfg.theme.secondaryDark);
    if (cfg.theme.bgLight) root.style.setProperty('--color-bg-main', cfg.theme.bgLight);
  }

  // 2. Sync Brand Information across the DOM
  if (cfg.brand) {
    if (cfg.brand.name) {
      document.querySelectorAll('.brand-name').forEach((el) => { el.textContent = cfg.brand.name; });
    }
    if (cfg.brand.logoText) {
      document.querySelectorAll('.brand-logo-text').forEach((el) => { el.textContent = cfg.brand.logoText; });
    }
    if (cfg.brand.tagline) {
      document.querySelectorAll('.brand-tagline').forEach((el) => { el.textContent = cfg.brand.tagline; });
    }
    if (cfg.brand.licenseNumber) {
      document.querySelectorAll('.brand-license').forEach((el) => { el.textContent = cfg.brand.licenseNumber; });
    }
  }

  // 3. Sync Contact Details
  if (cfg.contact) {
    if (cfg.contact.phone) {
      document.querySelectorAll('.contact-phone').forEach((el) => { el.textContent = cfg.contact.phone; });
      document.querySelectorAll('.contact-phone-link').forEach((el) => {
        el.setAttribute('href', 'tel:' + cfg.contact.phone.replace(/[^0-9+]/g, ''));
        const span = el.querySelector('span');
        if (span) span.textContent = cfg.contact.phone;
      });
    }
    if (cfg.contact.email) {
      document.querySelectorAll('.contact-email').forEach((el) => { el.textContent = cfg.contact.email; });
      document.querySelectorAll('.contact-email-link').forEach((el) => {
        el.setAttribute('href', 'mailto:' + cfg.contact.email);
        const span = el.querySelector('span');
        if (span) span.textContent = cfg.contact.email;
      });
    }
  }

  // 4. Sync Footer
  if (cfg.footer && cfg.footer.copyrightText) {
    document.querySelectorAll('.footer-copyright').forEach((el) => { el.textContent = cfg.footer.copyrightText; });
  }

  // 5. Sync Social Links
  if (cfg.socialLinks) {
    Object.keys(cfg.socialLinks).forEach((network) => {
      document.querySelectorAll(`[data-social="${network}"]`).forEach((el) => {
        el.setAttribute('href', cfg.socialLinks[network]);
      });
    });
  }

  // 6. Sync Google Maps Embed on Contact Page if available
  const mapContainer = document.getElementById('map-container-element');
  if (mapContainer && cfg.contact && cfg.contact.googleMapsEmbedUrl) {
    mapContainer.innerHTML = `<iframe class="w-full h-full border-0" src="${cfg.contact.googleMapsEmbedUrl}" allowfullscreen loading="lazy"></iframe>`;
  }
}

// --- CONTACT PAGE FORM VALIDATION ---
function initContactPage() {
  const form = document.getElementById('contact-inquiry-form') || document.getElementById('private-client-contact-form');
  const successState = document.getElementById('contact-form-success') || document.getElementById('contact-form-success-state');
  const resetBtn = document.getElementById('contact-form-reset-btn');

  if (!form) return;

  const nameInput = form.querySelector('[name="contact_name"]') || form.querySelector('[name="name"]');
  const emailInput = form.querySelector('[name="contact_email"]') || form.querySelector('[name="email"]');
  const phoneInput = form.querySelector('[name="contact_phone"]') || form.querySelector('[name="phone"]');
  const messageInput = form.querySelector('[name="contact_message"]') || form.querySelector('[name="message"]');

  const nameError = document.getElementById('error-contact-name') || document.getElementById('error-name');
  const emailError = document.getElementById('error-contact-email') || document.getElementById('error-email');
  const phoneError = document.getElementById('error-contact-phone') || document.getElementById('error-phone');
  const messageError = document.getElementById('error-contact-message') || document.getElementById('error-message');

  // Real-time error removal when user inputs
  [
    { input: nameInput, err: nameError },
    { input: emailInput, err: emailError },
    { input: phoneInput, err: phoneError },
    { input: messageInput, err: messageError }
  ].forEach(({ input, err }) => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('border-rose-500');
        input.classList.add('border-stone-200');
        if (err) err.classList.add('hidden');
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasError = false;

    const nameVal = nameInput ? nameInput.value.trim() : '';
    const emailVal = emailInput ? emailInput.value.trim() : '';
    const phoneVal = phoneInput ? phoneInput.value.trim() : '';
    const messageVal = messageInput ? messageInput.value.trim() : '';

    // Validate Name
    if (!nameVal || nameVal.length < 2) {
      if (nameInput) {
        nameInput.classList.add('border-rose-500');
        nameInput.classList.remove('border-stone-200');
      }
      if (nameError) nameError.classList.remove('hidden');
      hasError = true;
    } else {
      if (nameInput) {
        nameInput.classList.remove('border-rose-500');
        nameInput.classList.add('border-stone-200');
      }
      if (nameError) nameError.classList.add('hidden');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      if (emailInput) {
        emailInput.classList.add('border-rose-500');
        emailInput.classList.remove('border-stone-200');
      }
      if (emailError) emailError.classList.remove('hidden');
      hasError = true;
    } else {
      if (emailInput) {
        emailInput.classList.remove('border-rose-500');
        emailInput.classList.add('border-stone-200');
      }
      if (emailError) emailError.classList.add('hidden');
    }

    // Validate Phone
    const digitsOnly = phoneVal.replace(/\D/g, '');
    if (!phoneVal || digitsOnly.length < 7) {
      if (phoneInput) {
        phoneInput.classList.add('border-rose-500');
        phoneInput.classList.remove('border-stone-200');
      }
      if (phoneError) phoneError.classList.remove('hidden');
      hasError = true;
    } else {
      if (phoneInput) {
        phoneInput.classList.remove('border-rose-500');
        phoneInput.classList.add('border-stone-200');
      }
      if (phoneError) phoneError.classList.add('hidden');
    }

    // Validate Message
    if (!messageVal || messageVal.length < 5) {
      if (messageInput) {
        messageInput.classList.add('border-rose-500');
        messageInput.classList.remove('border-stone-200');
      }
      if (messageError) messageError.classList.remove('hidden');
      hasError = true;
    } else {
      if (messageInput) {
        messageInput.classList.remove('border-rose-500');
        messageInput.classList.add('border-stone-200');
      }
      if (messageError) messageError.classList.add('hidden');
    }

    if (hasError) {
      showToast('Please correct the highlighted required fields.', 'info');
      return;
    }

    const submitBtn = form.querySelector('button[type="submit"]');
    const originalContent = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Transmitting Fiduciary Dispatch...</span>
      `;
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalContent;
      }
      form.reset();
      form.classList.add('hidden');
      if (successState) successState.classList.remove('hidden');
      showToast('Thank you. Your inquiry has been received successfully.', 'check');
    }, 500);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      [nameInput, emailInput, phoneInput, messageInput].forEach((inp) => {
        if (inp) {
          inp.classList.remove('border-rose-500');
          inp.classList.add('border-stone-200');
        }
      });
      [nameError, emailError, phoneError, messageError].forEach((err) => {
        if (err) err.classList.add('hidden');
      });
      form.classList.remove('hidden');
      if (successState) successState.classList.add('hidden');
    });
  }
}

// --- INITIALIZE ALL ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  applyGlobalConfig();
  initNavbar();
  initFavoritesDrawer();
  initScheduleModal();
  initContactAgentModal();
  initAccordions();
  updateFavoriteBadges();
  updateHeartButtons();

  // Page-specific initializers
  if (document.getElementById('properties-catalog-grid')) {
    initPropertiesPage();
  }

  if (document.getElementById('property-details-root')) {
    initPropertyDetailsPage();
  }

  if (document.getElementById('favorites-page-grid') || document.getElementById('favorites-catalog-grid')) {
    renderFavoritesPage();
  }

  if (document.getElementById('contact-inquiry-form') || document.getElementById('private-client-contact-form')) {
    initContactPage();
  }
});
