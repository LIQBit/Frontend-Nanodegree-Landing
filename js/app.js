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
 * 
*/

const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navCreator = () => {

    let navContainer = '';

    // iterates over all sections on the page
    sections.forEach(function(section) {

        const sectionID = section.id;
        const sectionDataNav = section.dataset.nav;

        navContainer += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

    
    });


    // adds created nav elements to the navbar
    navBar.innerHTML = navContainer;

};

navCreator();


// Add class 'active' to section when near top of viewport

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
    sections.forEach(function(section) {
        const position = activePosition(section);

        viewport = () => position < 200 && position >= -200;

        activeClassRemove(section);
        activeClassAdd(viewport(),section);
    });
};

window.addEventListener('scroll', activeSection);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// collapsible content controls

document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        //const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        //if (button.classList.contains('accordion__button--active')) {
        //    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        //} else {
        //    accordionContent.style.maxHeight = 0;
        // }
    });



});