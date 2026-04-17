// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.scroll-link');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Validation
const form = document.querySelector('#contactForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (valid) {
        // process form submission
    }
});

// Event Handlers for Volunteer and Donation Buttons
const volunteerButton = document.querySelector('#volunteerButton');
const donateButton = document.querySelector('#donateButton');

volunteerButton.addEventListener('click', () => {
    // Logic for volunteering
    alert('Thank you for your interest in volunteering!');
});

donateButton.addEventListener('click', () => {
    // Logic for donations
    alert('Thank you for your generous donation!');
});
