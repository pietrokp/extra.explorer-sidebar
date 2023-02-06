const sidebarSwitcherClose = document.querySelector('#sidebar-switcher1')
const sidebarSwitcherOpen = document.querySelector('#sidebar-switcher2')

const sidebar = document.getElementById('sidebar')
const search = document.getElementById('search')
const hideOnClick = document.querySelectorAll('.hide-onclick')
const invisibleOnClick = document.querySelectorAll('.invisible-onclick')

sidebarSwitcherClose.addEventListener('click', function() {
    sidebar.style.width = "6.5rem"
    search.style.width = "4.4rem"

    hideOnClick.forEach((hidden) => { 
        hidden.classList.add('hide')
    })

    invisibleOnClick.forEach((invisible) => {
        invisible.classList.remove('appear')
        invisible.classList.add('disappear')
    })

    sidebarSwitcherClose.classList.toggle('hide')
    sidebarSwitcherOpen.classList.toggle('hide')
})

sidebarSwitcherOpen.addEventListener('click', function() {
    sidebar.style.width = "25rem"
    search.style.width = "22.5rem"

    hideOnClick.forEach((hidden) => {
        hidden.classList.remove('hide')
    })

    invisibleOnClick.forEach((invisible) => {
        invisible.classList.remove('disappear')
        invisible.classList.add('appear')
    })

    sidebarSwitcherClose.classList.toggle('hide')
    sidebarSwitcherOpen.classList.toggle('hide')
})