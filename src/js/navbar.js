
const [navTogglers, navLinks, navbar, overlay, header] = [
  document.querySelectorAll('[data-nav-toggler]'),
  document.querySelectorAll('[data-nav-link]'),
  document.querySelector('[data-navbar]'),
  document.querySelector('[data-overlay]'),
  document.querySelector('[data-header]')
]

const toggleNav = function() {
  if (!navbar.classList.contains('active')) {
    window.Scrollbar.destroy(document.querySelector('#root'))
    cursor.style.display = 'none'
    header.style.display = 'none'
  } else {
    initScrollbar()
    cursor.style.display = 'block'
    header.style.diplsay = 'block'
  }
  navbar.classList.toggle('active')
  overlay.classList.toggle('active')
  document.body.classList.toggle('active')
}

addEventOnElements(navTogglers, 'click', toggleNav)

const closeNav = function() {
  header.style.display = 'block'
  navbar.classList.remove('active')
  overlay.classList.remove('active')
  document.body.classList.remove('active')
  cursor.style.display = 'block'
}

addEventOnElements(navLinks, 'click', closeNav)

