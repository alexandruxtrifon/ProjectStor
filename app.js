// constantele de meniu flex
const menu = document.querySelector(`#mobile-menu`)
const menuLinks = document.querySelector (`.navbar__menu`)

// meniul pentru display mic/mobile
const mobileMenu = () => {
    menu.classList.toggle('is-actove')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);