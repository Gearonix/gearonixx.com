const revealElements = document.querySelectorAll('[data-reveal]')

const scrollReveal = function() {
  for (let i = 0; i < revealElements.length; i++) {
    revealElements[i].classList.add('revealed')

    const elementIsInScreen = revealElements[i].getBoundingClientRect().
        top < window.innerHeight / 1.15

    if (elementIsInScreen) {
      revealElements[i].classList.add('revealed')
    } else {
      revealElements[i].classList.remove('revealed')
    }
  }
}
scrollReveal()

window.addEventListener('wheel', scrollReveal)

window.addEventListener('scroll', () => {
  console.log('scroll')
})
