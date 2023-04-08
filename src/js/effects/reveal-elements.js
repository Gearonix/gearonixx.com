const initRevealElements = () => {
  const scrollReveal = () => {
    dom.elementLoop('[data-reveal]', (elem) => {
      const top = elem.getBoundingClientRect().top

      const elementIsInScreen = top - 50 < window.innerHeight / 1.15

      dom.toggleClass(elementIsInScreen, elem, 'revealed')
    })
  }
  scrollReveal()

  dom.event(window, scrollReveal, 'wheel')

  dom.event(window, () => {
    setTimeout(() => {
      dom.elementLoop('[data-first-reveal]', (elem) => {
        dom.addClass(elem, 'revealed')
      })
    }, 1000)
  }, 'load')
}

initRevealElements()
