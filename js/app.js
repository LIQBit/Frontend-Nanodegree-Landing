/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
*/
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * 
 * Start Helper Functions
 * 
*/

/**
* End Helper Functions
 * 
 * 
 * 
* Begin Main Functions
 * 
*/



// Scroll to anchor ID using scrollTO event
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
const navCreator = () => {

    let navContainer = '';

    // iterates over all sections on the page
    sections.forEach((section) => {
        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navContainer += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    });

    // adds created nav elements to the navbar
    navBar.innerHTML = navContainer;

};

navCreator();


// Scroll to section on link click

// Set sections as active
const activePosition = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// removes active class from a section not in viewport
const activeClassRemove = (section) => {
    section.classList.remove('your-active-class');
    section.style.cssText = 'background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)';
};

// Adds a conditional. If true, add 'your-active-class' to section in viewport
const activeClassAdd = (conditional, section) => {
    if(conditional) {
        section.classList.add('your-active-class');
        section.style.cssText = 'background-color: rgba(139, 251, 255, 0.199)';
    };
};


// Iterates through sections, checks a section's position, removes actives status & assigns active status accordingly   
const activeSection = () => {
    sections.forEach((section) => {
        const position = activePosition(section);

        viewport = () => position < 200 && position >= -200;

        activeClassRemove(section);
        activeClassAdd(viewport(),section);
    });
};

window.addEventListener('scroll', activeSection);


// collapsible content controls

document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {

        button.classList.toggle('accordion__button--active');

    });

});


// show nav while scrolling/hide nav when scrolling stops

let foo = null;

document.addEventListener('scroll', () => {
    const thisNav = document.querySelector('nav');
    // clearTimeout method stops setTimeout from kicking in & displays nav while scrolling
    if(foo !== null) {
        clearTimeout(foo);
        thisNav.style.display = 'block';
    }

    // hides nav when scrolling stops
    foo = setTimeout(() => {
        thisNav.style.display = 'none';
    }, 4000);

});


