// Shared JavaScript for the portfolio website.
document.addEventListener('DOMContentLoaded', () => {
  // Display the current year automatically in every footer.
  document.querySelectorAll('.year').forEach(item => {
    item.textContent = new Date().getFullYear();
  });

  // Mobile navigation menu.
  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      menuButton.textContent = isOpen ? '×' : '☰';
    });
  }

  // Front-end contact form validation. This demo does not send/store messages.
  const contactForm = document.querySelector('#contactForm');
  const formNote = document.querySelector('#formNote');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }
      formNote.textContent = 'Thank you! The form fields are valid. To deliver this message, the website owner must connect the form to an email service or server.';
      formNote.classList.add('success-note');
      contactForm.reset();
    });
  }
});
