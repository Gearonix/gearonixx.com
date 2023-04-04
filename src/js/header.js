const header = document.querySelector('[data-header]')

const activeElementOnScroll = function() {
  if (window.scrollY > 50) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

window.addEventListener('scroll', activeElementOnScroll)
