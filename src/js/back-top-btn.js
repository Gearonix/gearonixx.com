const backTopBtn = document.querySelector('[data-back-top-btn]')

window.addEventListener('scroll', function() {
  const bodyHeight = document.body.scrollHeight
  const windowHeight = window.innerHeight
  const scrollEndPos = bodyHeight - windowHeight
  const totalScrollPercent = (window.scrollY / scrollEndPos) * 100

  backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`

  // visible back top btn when scrolled 5% of the page
  if (totalScrollPercent > 5) {
    backTopBtn.classList.add('show')
  } else {
    backTopBtn.classList.remove('show')
  }
})
