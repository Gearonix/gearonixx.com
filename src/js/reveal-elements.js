const revealElements = document.querySelectorAll('[data-reveal]')

const scrollReveal = function() {
  for (let i = 0; i < revealElements.length; i++) {
    const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15

    if (elementIsInScreen) {
      revealElements[i].classList.add('revealed')
    } else {
      revealElements[i].classList.remove('revealed')
    }
  }
}

window.addEventListener('scroll', scrollReveal)

scrollReveal()
