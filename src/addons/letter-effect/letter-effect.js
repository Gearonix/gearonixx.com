const initLetterEffect = () => {
  const letterBoxes = document.querySelectorAll('[data-letter-effect]')

  let activeLetterBoxIndex = 0
  let lastActiveLetterBoxIndex = 0
  let totalLetterBoxDelay = 0

  const setLetterEffect = () => {
    for (let i = 0; i < letterBoxes.length; i++) {
      let letterAnimationDelay = 0

      const letters = letterBoxes[i].textContent.trim()
      letterBoxes[i].textContent = ''

      for (let j = 0; j < letters.length; j++) {
        const span = document.createElement('span')

        span.style.animationDelay = `${letterAnimationDelay}s`

        if (i === activeLetterBoxIndex) {
          span.classList.add('in')
        } else {
          span.classList.add('out')
        }

        span.textContent = letters[j]

        if (letters[j] === ' ') span.classList.add('space')

        letterBoxes[i].appendChild(span)

        if (j >= letters.length - 1) break
        letterAnimationDelay += 0.05
      }

      if (i === activeLetterBoxIndex) {
        totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2))
      }

      if (i === lastActiveLetterBoxIndex) {
        letterBoxes[i].classList.add('active')
      } else {
        letterBoxes[i].classList.remove('active')
      }
    }

    setTimeout(function() {
      lastActiveLetterBoxIndex = activeLetterBoxIndex

      activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++

      setLetterEffect()
    }, (totalLetterBoxDelay * 1000) + 3000)
  }

  window.addEventListener('load', setLetterEffect)
}

initLetterEffect()
