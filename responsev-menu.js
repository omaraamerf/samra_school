const mobileMenuIcon = document.getElementsByClassName('mobile-menu-icon')[0]
const navLinks = document.querySelector('.nav-links')
mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active')
})


