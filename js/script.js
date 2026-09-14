document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-main');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        nav.classList.remove('open');
      });
    });
  }

  // Mark active nav link
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-main a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Simple contact form -> mailto fallback (no backend on static hosting)
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.querySelector('#name').value.trim();
      var email = form.querySelector('#email').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var eventType = form.querySelector('#event-type').value;
      var message = form.querySelector('#message').value.trim();

      var subject = encodeURIComponent('Solicitud de presupuesto — ' + name);
      var body = encodeURIComponent(
        'Nombre: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Teléfono: ' + phone + '\n' +
        'Tipo de evento: ' + eventType + '\n\n' +
        'Mensaje:\n' + message
      );
      window.location.href = 'mailto:info@st2audiovisual.es?subject=' + subject + '&body=' + body;
    });
  }
});
