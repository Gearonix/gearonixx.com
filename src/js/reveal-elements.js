const revealElements = document.querySelectorAll('[data-reveal]')

const scrollReveal = function() {
  for (let i = 0; i < revealElements.length; i++) {
    const top = revealElements[i].getBoundingClientRect().top


    const elementIsInScreen = top - 50 < window.innerHeight / 1.15 && top > - 100
    if (elementIsInScreen) {
      revealElements[i].classList.add('revealed')
    } else {
      revealElements[i].classList.remove('revealed')
    }
  }
}
scrollReveal()

window.addEventListener('wheel', scrollReveal)
