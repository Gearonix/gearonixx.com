class DisableScrollPlugin extends window.Scrollbar.ScrollbarPlugin {
  static pluginName = 'disableScroll'

  static defaultOptions = {
    direction: ''
  }

  transformDelta(delta) {
    if (this.options.direction) {
      delta[this.options.direction] = 0
    }

    return { ...delta }
  }
}

window.Scrollbar.use(DisableScrollPlugin)
