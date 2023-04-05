
const addEventOnElements = function(elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}


const cursor = document.querySelector('[data-cursor]')
const anchorElements = document.querySelectorAll('a')
const buttons = document.querySelectorAll('button')

// change cursorElement position based on cursor move
document.body.addEventListener('mousemove', function(event) {
  setTimeout(function() {
    cursor.style.top = `${event.clientY + window.Scrollbar.getAll()[0].offset.y}px`
    cursor.style.left = `${event.clientX}px`
  }, 100)
})
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

// add disabled class on cursorElement, when mouse out of body
document.body.addEventListener('mouseout', function() {
  cursor.classList.add('disabled')
})

// remove diabled class on cursorElement, when mouse in the body
document.body.addEventListener('mouseover', function() {
  cursor.classList.remove('disabled')
})
