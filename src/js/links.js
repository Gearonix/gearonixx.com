const links = document.querySelectorAll('[data-href]')


const navigate = (link, attribute) => {
  link.addEventListener('click', () => {
    const scrollbar = getScrolbar() || initScrollbar()
    const trigger = document.querySelector(attribute)
    const destination = trigger.getBoundingClientRect().top
    scrollbar.scrollTo(0, destination + scrollbar.offset.y, 900)
    window.dispatchEvent(new MouseEvent('wheel'))
  })
}


for (const link of links) {
  const attribute = link.getAttribute('data-href')
  if (!attribute?.startsWith('#')) {
    link.addEventListener('click', () => {
      window.open(link.getAttribute('data-href'), '_blank').focus()
    })
    continue
  }
  navigate(link, attribute)
}

