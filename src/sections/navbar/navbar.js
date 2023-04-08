const initNavbar = () => {
  const navbar = dom.find('navbar')
  const overlay = dom.find('overlay')
  const header = dom.find('header')
  const cursor = dom.find('cursor')

  const openNav = function() {
    scrollbarApi.destroy()
    dom.destroy(cursor)
    dom.destroy(header)
    dom.addClass(navbar, 'active')
    dom.addClass(header, 'active')
    dom.addClass(overlay, 'active')
    dom.addClass(document.body, 'active')
  }


  const closeNav = function() {
    scrollbarApi.init()
    dom.init(header)
    dom.init(cursor)
    dom.removeClass(navbar, 'active')
    dom.removeClass(overlay, 'active')
    dom.removeClass(document.body, 'active')
  }


  dom.events('[data-nav-open]', openNav)
  dom.events('[data-nav-close]', closeNav)
}

initNavbar()

