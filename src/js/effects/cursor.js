let currentClientY = 0
let currentClientX = 0


const initCursor = () => {
  const cursor = dom.find('cursor')

  dom.event(window, () => {
    setTimeout(() => {
      dom.removeClass(cursor, 'disabled')
      dom.event(document.body, () => {
        dom.addClass(cursor, 'disabled')
      }, 'mouseout')

      dom.event(document.body, () => {
        dom.removeClass(cursor, 'disabled')
      }, 'mouseover')
    }, 1000)
  }, 'load')


  dom.event(document.body, (e) => {
    setTimeout(() => {
      const scrollbar = scrollbarApi.get()
      const cursorTop = currentClientY + scrollbar?.offset?.y

      dom.changePosition(cursor, cursorTop, currentClientX)

      if (e.clientY && e.clientX) {
        currentClientY = e.clientY
        currentClientX = e.clientX
      }
    }, 100)
  }, 'mousemove')

  const addHover = () => dom.addClass(cursor, 'hovered')
  const removeHover = () => dom.removeClass(cursor, 'hovered')

  dom.events('a', addHover, 'mouseover')
  dom.events('a', removeHover, 'mouseout')
  dom.events('button', addHover, 'mouseover')
  dom.events('button', removeHover, 'mouseout')
}

initCursor()
