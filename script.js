// SELECT ELEMENTS
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const hiddenElements = document.querySelectorAll('.hidden');

// MOBILE MENU TOGGLE
hamburger.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

// SCROLL ANIMATION OBSERVER
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// APPLY OBSERVER
hiddenElements.forEach((el) => observer.observe(el));