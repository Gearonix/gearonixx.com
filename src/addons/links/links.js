
const initLinks = () => {
  dom.elementLoop('[data-href]', (link) => {
    const attribute = link.getAttribute('data-href')

    if (!attribute?.startsWith('#')) {
      return dom.event(link, () => {
        window.open(attribute, '_blank')?.focus?.()
      })
    }

    dom.event(link, () => {
      const scrollbar = scrollbarApi.get() || scrollbarApi.init()
      const trigger = dom.selector(attribute)
      const destination = trigger.getBoundingClientRect().top
      scrollbar.scrollTo(0, destination + scrollbar.offset.y, 900)
      window.dispatchEvent(new MouseEvent('wheel'))
    })
  })
}

initLinks()
