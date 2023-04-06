
const addEventOnElements = function(elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}


const cursor = document.querySelector('[data-cursor]')
const anchorElements = document.querySelectorAll('a')
const buttons = document.querySelectorAll('button')

let currentClientY = 0
let currentClientX = 0

const angle = (cx, cy, ex, ey) => {
  return Math.floor(Math.atan2(ey - cy, ex - cx) * 180 / Math.PI) - 32
}

document.body.addEventListener('mousemove', function(e) {
  setTimeout(function() {
    cursor.style.top = `${currentClientY + getScrolbar()?.offset?.y}px`
    cursor.style.left = `${currentClientX}px`
    if (e.clientY === 0 || e.clientX === 0) {
      return
    }
    currentClientY = e.clientY
    currentClientX = e.clientX
  }, 100)

  for (const eye of document.querySelectorAll('[data-eye]')) {
    const rekt = eye.getBoundingClientRect()
    const anchorX = rekt.left + rekt.width / 2
    const anthorY = rekt.top + rekt.height / 2

    const angleDeg = angle(currentClientX, currentClientY, anchorX, anthorY)
    eye.style.transform = `rotate(${angleDeg}deg)`
  }
})
for (const eye of document.querySelectorAll('[data-eye]')) {
  eye.addEventListener('mouseover', () => {
    eye.parentNode.classList.add('closed')
  })
  eye.addEventListener('mouseout', () => {
    eye.parentNode.classList.remove('closed')
  })
}


// add cursor hoverd class
const hoverActive = function() {
  cursor.classList.add('hovered')
}

// remove cursor hovered class
const hoverDeactive = function() {
  cursor.classList.remove('hovered')
}

// add hover effect on cursor, when hover on any button or hyperlink
addEventOnElements(anchorElements, 'mouseover', hoverActive)
addEventOnElements(anchorElements, 'mouseout', hoverDeactive)
addEventOnElements(buttons, 'mouseover', hoverActive)
addEventOnElements(buttons, 'mouseout', hoverDeactive)

