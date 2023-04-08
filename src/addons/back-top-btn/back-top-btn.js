const initBackTopButton = () => {
  const backTopBtn = dom.find('back-top-btn')

  dom.event(window, () => {
    const scrollbar = scrollbarApi.get()
    if (!scrollbar) {
      return
    }
    const percent = (scrollbar.offset.y / scrollbar.limit.y) * 100
    backTopBtn.textContent = `${percent.toFixed(0)}%`

    dom.toggleClass(percent > 5, backTopBtn, 'show')
  }, 'wheel')

  const scrollbar = scrollbarApi.get()


  scrollbar?.addListener?.(({ offset }) => {
    if (offset.y > 50) {
      const top = offset.y + scrollbar.bounding.bottom
      backTopBtn.style.top = top - 100 + 'px'
      backTopBtn.style.right = '40px'
    }
  })
}

initBackTopButton()
