

const initScrollbar = () => {
  const options = {
    damping: 0.05,
    alwaysShowTracks: true,
    syncCallbacks: true }

  const scrollbar = window.Scrollbar.init(document.querySelector('#root'), options)

  const header = document.querySelector('[data-header]')

  scrollbar.addListener(({ offset }) => {
    console.log(offset.y)
    if (offset.y > 50) {
      header.classList.add('active')
      header.style.top = offset.y + 'px'
      header.style.left = offset.x + 'px'
    } else {
      header.classList.remove('active')
    }
  })
}
