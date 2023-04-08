
const initEyeRotation = () => {
  const calculateEyeDeg = (elem) => {
    const rekt = elem.getBoundingClientRect()
    const anchorX = rekt.left + rekt.width / 2
    const anthorY = rekt.top + rekt.height / 2
    const argY = anthorY - currentClientY
    const argX = anchorX - currentClientX
    const result = Math.atan2(argY, argX) * 180 / Math.PI

    return Math.floor(result) - 32
  }

  dom.event(document.body, () => {
    dom.elementLoop('[data-eyes]', (elem) => {
      elem.style.transform = `rotate(${calculateEyeDeg(elem)}deg)`
    })
  }, 'mousemove')

  dom.events('[data-eyes]', (e, target) => {
    dom.addClass(target.parentNode, 'closed')
  }, 'mouseover')

  dom.events('[data-eyes]', (e, target) => {
    dom.removeClass(target.parentNode, 'closed')
  }, 'mouseout')
}

initEyeRotation()
