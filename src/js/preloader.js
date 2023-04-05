const loadingElement = document.querySelector('[data-loading]')


window.addEventListener('load', function() {
  loadingElement.classList.add('loaded')
  document.body.classList.remove('active')
  setTimeout(initScrollbar, 1000)
})


