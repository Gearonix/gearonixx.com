const scrollbarApi = {
  subscribers: [],
  init() {
    if (this.get()) {
      return
    }

    const options = {
      damping: 0.05,
      alwaysShowTracks: true,
      syncCallbacks: true
    }

    const scrollbar = window.Scrollbar.init(document.querySelector('#root'), options)

    scrollbar.addListener(() => {
      document.body.dispatchEvent(new MouseEvent('mousemove'))
      window.dispatchEvent(new MouseEvent('wheel'))
    })

    for (const subscriber of this.subscribers) {
      subscriber(scrollbar)
    }

    return scrollbar
  },
  get() {
    return window.Scrollbar.getAll()[0]
  },
  destroy() {
    window.Scrollbar.destroy(document.querySelector('#root'))
  },
  subscribe(callback) {
    this.subscribers.push(callback)
  }
}
