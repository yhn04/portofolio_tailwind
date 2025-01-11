// Navbar Fixed
window.onscroll = function() {
    const Header = document.querySelector('header');
    const fixedNav = Header.offsetTop; 

    if (window.pageYOffset > fixedNav) {
        Header.classList.add('navbar-fixed');
    } else {
        Header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger =document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});