

const initScrollbar = () => {
  if (window.Scrollbar.getAll()[0]) {
    return
  }

  const options = {
    damping: 0.05,
    alwaysShowTracks: true,
    syncCallbacks: true }

  const scrollbar = window.Scrollbar.init(document.querySelector('#root'), options)

  const header = document.querySelector('[data-header]')
  const backTopBtn = document.querySelector('[data-back-top-btn]')

  scrollbar.addListener(({ offset }) => {
    if (offset.y > 50) {
      header.classList.add('active')
      backTopBtn.style.top = offset.y + scrollbar.bounding.bottom - 100 + 'px'
      backTopBtn.style.right = '40px'
    } else {
      header.classList.remove('active')
    }
    header.style.top = offset.y + 'px'
    header.style.left = offset.x + 'px'
    document.body.dispatchEvent(new MouseEvent('mousemove'))
    window.dispatchEvent(new MouseEvent('wheel'))
  })

  return scrollbar
}


const getScrolbar = () => {
  return window.Scrollbar.getAll()[0]
}
