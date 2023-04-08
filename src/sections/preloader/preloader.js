const initPreloader = () => {
  dom.event(window, () => {
    const preloader = dom.find('loading')

    dom.addClass(preloader, 'loaded')
    dom.removeClass(document.body, 'active')

    setTimeout(() => {
      scrollbarApi.init()
    }, 1000)
  }, 'load')
}

initPreloader()

