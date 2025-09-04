/**
 * Side menu and theme toggle functionality
 * =========================================
 * This script handles the side menu open/close functionality and theme toggle.
 *
 */

// Selectors
let sideMenu = document.querySelector('#sideMenu');
let op = document.querySelector('.op');
let cl = document.querySelector('.cl');
let nav = document.querySelector('nav');
let navlist = document.querySelector('nav ul');

/**
 * Opens the side menu by translating it to the left.
 */
function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

/**
 * Closes the side menu by translating it to the right.
*/
function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

// Event listeners
op.addEventListener("click", () => {
    openMenu();
});
cl.addEventListener("click", () => {
    closeMenu();
})

// Scroll event listener
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        nav.classList.add('bg-white', 'bg-opacity-51', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navlist.classList.remove('bg-white', 'bg-opacity-51', 'shadow-sm', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
    }
    else {
        nav.classList.remove('bg-white', 'bg-opacity-51', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navlist.classList.add('bg-white', 'bg-opacity-51', 'shadow-sm', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');

    }
})

/**
 * Toggles the theme between light and dark.
 * If the theme is set to dark, it adds the 'dark' class to the document element.
 * Otherwise, it removes the 'dark' class.
 */
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function modes() {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    }
    else {
        localStorage.theme = 'light';
    }

}

// Typed.js initialization
var typed = new Typed(".auto-type", {
    strings: ["Welcome", "स्वागत है आपका", "स्वागत छ", "ਸੁਆਗਤ ਹੈ", "خوش آمدید","Willkommen"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
})



// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('nav ul li a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('nav ul li a [href*=' + id + ']').classList.add('active');
//             });

//         };
//     });
// };

const page = window.location.hash;
const sections = document.querySelectorAll('nav a').forEach(link => {
    if (link.href.includes(`${page}`)) {
        link.classList.add('active');
    }

})




