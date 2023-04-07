const backTopBtn = document.querySelector('[data-back-top-btn]')

window.addEventListener('wheel', function() {
  const scrollbar = getScrolbar()
  if (!scrollbar) {
    return
  }
  const percent = (scrollbar.offset.y / scrollbar.limit.y) * 100
  backTopBtn.textContent = `${percent.toFixed(0)}%`

  if (percent > 5) {
    backTopBtn.classList.add('show')
  } else {
    backTopBtn.classList.remove('show')
  }
})


