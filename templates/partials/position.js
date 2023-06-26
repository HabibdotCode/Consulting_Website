//a javascript snippet for navbar for the sticky position property whenever there is a scroll event 
const navbar = document.getElementsByClassName('navbar');
let top = navbar.offsetTop;
function stickynavbar() {
    if (window.scrollY >= top) {    
        navbar.classList.add('sticky');
    }
    else {
    navbar.classList.remove('sticky');    
}
}

window.addEventListener('scroll', stickynavbar);