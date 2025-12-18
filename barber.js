document.addEventListener('DOMContentLoaded', () => {

  /* ===============================
     1. REVEAL AL SCROLL (BASE)
  =============================== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ===============================
     2. ANIMACIÓN ESCALONADA (WOW)
     Servicios entran uno por uno
  =============================== */
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
  });

  /* ===============================
     3. CARGA DE SERVICIO DESDE URL
     contacto.html?servicio=...
  =============================== */
  const params = new URLSearchParams(window.location.search);
  const servicio = params.get('servicio');
  const servicioSelect = document.querySelector('#servicio');

  if (servicio && servicioSelect) {
    servicioSelect.value = decodeURIComponent(servicio);
  }

  /* ===============================
     4. ENVÍO A WHATSAPP (PRO)
  =============================== */
  const form = document.querySelector('#form-reserva');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const servicio = document.getElementById('servicio').value;
      const fecha = document.getElementById('fecha').value;
      const hora = document.getElementById('hora').value;

      const telefono = "527712039397";
      const mensaje = 
        `👑 *Alesta Barbería*\n\n` +
        `👤 Cliente: ${nombre}\n` +
        `✂️ Servicio: ${servicio}\n` +
        `📅 Fecha: ${fecha}\n` +
        `⏰ Hora: ${hora}`;

      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
    });
  }

  /* ===============================
     5. NAVBAR DINÁMICO (WOW)
     Se encoge al hacer scroll
  =============================== */
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('navbar-small');
    } else {
      navbar.classList.remove('navbar-small');
    }
  });

});
