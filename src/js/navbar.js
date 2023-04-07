
const [navTogglers, navLinks, navbar, overlay, header] = [
  document.querySelectorAll('[data-nav-open]'),
  document.querySelectorAll('[data-nav-close]'),
  document.querySelector('[data-navbar]'),
  document.querySelector('[data-overlay]'),
  document.querySelector('[data-header]')
]

const openNav = function() {
  window.Scrollbar.destroy(document.querySelector('#root'))
  cursor.style.display = 'none'
  header.style.display = 'none'
  navbar.classList.add('active')
  overlay.classList.add('active')
  document.body.classList.add('active')
}

addEventOnElements(navTogglers, 'click', openNav)

const closeNav = function() {
  initScrollbar()
  header.style.display = 'block'
  cursor.style.display = 'block'
  navbar.classList.remove('active')
  overlay.classList.remove('active')
  document.body.classList.remove('active')
}

addEventOnElements(navLinks, 'click', closeNav)

