const links = document.querySelectorAll('[data-href]')


for (const link of links) {
  link.parentNode.addEventListener('click', () => {
    window.location.href = link.getAttribute('data-href')
  })
}
