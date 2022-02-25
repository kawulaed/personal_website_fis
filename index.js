// add sticky nav bar
window.onscroll = function() {stickyNav()};
const navbar = document.getElementById("nav");
const sticky = navbar.offsetTop;

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}