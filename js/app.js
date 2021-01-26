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
        let navLink = document.createElement('li');
        navLink.innerHTML = `<a class="menu__link" id="#${i.id}" href="#${i.id}"> ${i.dataset.nav}</a>`;

        navBar.appendChild(navLink);

    }

};

navCreator();

    
// Scroll to section on link click

navBar.addEventListener('click', scrollToSection = () => {

    document.querySelectorAll('.menu__link').forEach(a => {

        document.querySelector('section').scrollIntoView({behavior: 'smooth'})
    })

});



// Set sections as active &/or remove active status


isActive = () => {

    for(let section of sections) {
        const activePosition = section.getBoundingClientRect();

        if (activePosition.top < 200 && activePosition.bottom > 200) {
            const id = section.getAttribute('id');

            section.classList.add('your-active-class');
    
        } else {

            const id = section.getAttribute('id');
    
            section.classList.remove('your-active-class');
            
        }
   
    };
    
};

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

    //Calling sections

    sections.forEach(section => isActive(section));

});