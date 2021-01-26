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
function navCreator () {

    // iterates over all sections on the page
    for (let i of sections) {
        let section = document.createElement('li');

        section.className = 'menu__link';

        section.id = i.id;

        section.dataset.nav = i.id;

        section.innerText = i.dataset.nav;

        navBar.appendChild(section);

    };

};

navCreator();

    
// Scroll to section on link click

// Set sections as active &/or remove active status

isActive = (section) => {
    
    const activePosition = section.getBoundingClientRect();

    if (activeSection.top < 200 && activeSection.bottom > 200) {
        const id = section.getAttribute('id');
        document.querySelector(`.${id}`).classList.add('active-class');
        section.classList.add('your-active-class');

    } else {

        const id = section.getAttribute('id');

        document.querySelector(`.${id}`).classList.remove('active-class');
        section.classList.remove('your-active-class');
        
    }

}





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