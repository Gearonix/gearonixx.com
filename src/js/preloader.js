const loadingElement = document.querySelector('[data-loading]')
const firstRevealed = document.querySelectorAll('[data-fisrt-reveal]')

window.addEventListener('load', function() {
  loadingElement.classList.add('loaded')
  document.body.classList.remove('active')
  setTimeout(() => {
    initScrollbar()
    cursor.classList.remove('disabled')
    document.body.addEventListener('mouseout', function() {
      cursor.classList.add('disabled')
    })
    document.body.addEventListener('mouseover', function() {
      cursor.classList.remove('disabled')
    })

    for (const reveal of firstRevealed) {
      reveal.classList.add('revealed')
    }
  }, 1000)
})


