const dom = {
  selector(selector) {
    return document.querySelector(selector)
  },
  find(selector) {
    return document.querySelector(`[data-${selector}]`)
  },
  findAll(selector) {
    return document.querySelectorAll(selector)
  },

  event(element = window, callback = () => {}, event = 'click') {
    element.addEventListener(event, callback)
  },
  addClass(element, className = 'active') {
    element.classList.add(className)
  },
  removeClass(element, className = 'active') {
    element.classList.remove(className)
  },
  toggleClass(condition, element, successClass) {
    if (condition) {
      element.classList.add(successClass)
    } else {
      element.classList.remove(successClass)
    }
  },
  events(elements, callback, eventType = 'click') {
    const targets = typeof elements === 'string' ?
        document.querySelectorAll(elements) :
        elements
    for (let i = 0; i < targets.length; i++) {
      targets[i].addEventListener(eventType, (e) => callback(e, targets[i]))
    }
  },
  changePosition(element, top, left) {
    element.style.top = top + 'px'
    element.style.left = left + 'px'
  },
  elementLoop(selector, callback) {
    const elements = [...document.querySelectorAll(selector)]
    elements.map(callback)
  },
  destroy(elem) {
    elem.style.display = 'none'
  },
  init(elem) {
    elem.style.display = 'block'
  }
}
