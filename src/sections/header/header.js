const initHeader = () => {
  const header = dom.find('header')
  scrollbarApi.subscribe((scrollbar) => {
    scrollbar?.addListener?.(({ offset }) => {
      dom.toggleClass(offset.y > 50, header, 'active')
      dom.changePosition(header, offset.y, offset.x)
    })
  })
}


initHeader()
