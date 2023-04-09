const initBackTopButton = () => {
  const backTopBtn = dom.find('back-top-btn')

  scrollbarApi.subscribe((scrollbar) => {
    scrollbar?.addListener?.(({ offset }) => {
      const percent = (scrollbar.offset.y / scrollbar.limit.y) * 100
      backTopBtn.textContent = `${percent.toFixed(0)}%`

      if (offset.y > 50) {
        const top = offset.y + scrollbar.bounding.bottom
        backTopBtn.style.top = top - 100 + 'px'
        backTopBtn.style.right = '40px'
      }

      dom.toggleClass(offset.y > 50, backTopBtn, 'show')
    })
  })
}

initBackTopButton()
