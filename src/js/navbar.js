
const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll('[data-nav-toggler]'),
  document.querySelectorAll('[data-nav-link]'),
  document.querySelector('[data-navbar]'),
  document.querySelector('[data-overlay]')
]

const toggleNav = function() {
  if (!navbar.classList.contains('active')) {
    window.Scrollbar.destroy(document.querySelector('#root'))
  } else {
    initScrollbar()
  }
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('active')
}

addEventOnElements(navTogglers, 'click', toggleNav)

const closeNav = function() {
  navbar.classList.remove('active')
  overlay.classList.remove('active')
  document.body.classList.remove('active')
}

addEventOnElements(navLinks, 'click', closeNav)

