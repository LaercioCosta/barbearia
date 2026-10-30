(() => {
  const config = window.BARBEARIA;
  const notice = document.querySelector('.notice');
  let noticeTimer;
  const tell = text => { notice.textContent = text; notice.classList.add('show'); clearTimeout(noticeTimer); noticeTimer = setTimeout(() => notice.classList.remove('show'), 3200); };
  const phone = String(config.whatsapp || '').replace(/\D/g, '');
  const [brandMain, brandRest = ''] = config.name.split(/\s+(.*)/s);
  document.querySelectorAll('.brand span:last-child').forEach(brand => { brand.firstChild.textContent = brandMain.toUpperCase(); brand.querySelector('small').textContent = brandRest.toUpperCase(); });
  document.title = `${config.name} | Seu estilo merece mais`;
  document.querySelector('meta[property="og:title"]').content = document.title;
  const schema = document.querySelector('script[type="application/ld+json"]');
  schema.textContent = JSON.stringify({ ...JSON.parse(schema.textContent), name: config.name });
  const bookingUrl = message => phone ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}` : '';
  document.querySelectorAll('[data-booking]').forEach(link => {
    const service = link.dataset.service;
    const message = link.dataset.message || (service ? `Olá! Gostaria de agendar ${service}.` : 'Olá! Gostaria de agendar um horário.');
    const url = bookingUrl(message);
    if (url) { link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else link.addEventListener('click', event => { event.preventDefault(); tell('Configure o número de WhatsApp em config.js para habilitar o agendamento.'); });
  });
  document.querySelector('[data-address]').textContent = config.address || 'Endereço a configurar';
  document.querySelector('[data-hours]').textContent = config.hours || 'Horários a configurar';
  document.querySelector('[data-footer-address]').textContent = config.address || 'Endereço a configurar';
  document.querySelector('[data-footer-hours]').textContent = config.hours || 'Horários a configurar';
  const map = document.querySelector('[data-map]');
  if (config.mapUrl) { map.href = config.mapUrl; map.target = '_blank'; map.rel = 'noopener noreferrer'; document.querySelector('[data-map-label]').textContent = config.address || 'Ver localização no mapa'; }
  else map.addEventListener('click', event => { event.preventDefault(); tell('Configure o link do mapa em config.js.'); });
  for (const social of ['instagram', 'facebook', 'youtube']) {
    const link = document.querySelector(`[data-social="${social}"]`);
    if (config[social]) { link.href = config[social]; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    else link.addEventListener('click', event => { event.preventDefault(); tell(`Configure o perfil ${social} em config.js.`); });
  }
  document.querySelectorAll('.service-card').forEach((card, index) => {
    const service = config.services[index];
    if (!service) return;
    card.querySelector('h3').textContent = service.name;
    card.querySelector('div p').textContent = service.description;
    card.querySelector('[data-service]').dataset.service = service.name;
    if (service.price) card.querySelector('[data-price]').textContent = `A partir de ${service.price}`;
  });
  const menu = document.querySelector('.menu-toggle'), nav = document.querySelector('.nav');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); nav.classList.toggle('open', open); });
  nav.addEventListener('click', event => { if (event.target.closest('a')) { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menu'); } });
  const dialog = document.querySelector('.lightbox');
  document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => { const image = button.querySelector('img'), enlarged = document.createElement('img'); enlarged.src = image.currentSrc || image.src; enlarged.alt = image.alt; dialog.querySelector('img')?.remove(); dialog.append(enlarged); dialog.showModal(); }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  document.querySelector('#year').textContent = new Date().getFullYear();

  if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.about, .experience, .booking, .location, .faq, .final-cta').forEach(section => {
      gsap.from(section, { opacity: 0.05, y: 8, duration: 0.55, ease: 'power1.out', scrollTrigger: { trigger: section, start: 'top 88%', toggleActions: 'play none none reverse' } });
    });
    gsap.utils.toArray('.service-grid, .diff-grid, .team-grid, .gallery-grid, .review-grid').forEach(grid => {
      gsap.from(grid.children, { opacity: 0.05, y: 6, duration: 0.45, stagger: 0.05, ease: 'power1.out', scrollTrigger: { trigger: grid, start: 'top 88%', toggleActions: 'play none none reverse' } });
    });
  }
})();
