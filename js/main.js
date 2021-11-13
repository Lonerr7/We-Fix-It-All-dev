"use strict";

// Menu-burger
const body = document.querySelector('body');
const menuArrows = document.querySelectorAll('.menu__arrow');
const mobileMenuArrows = document.querySelectorAll('.mobile-menu__arrow');
const menuListSublist = document.querySelector('.menu__list-item--sublist');
const menuSublist = document.querySelector('.menu__sublist');
const burgerIcon = document.querySelector('.menu__burger-icon');
const mobileMenu = document.querySelector('.mobile-menu');

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },

    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },

    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },

    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },

    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry()||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    }
};

if (isMobile.any()) {
    body.classList.add('_touch');
} else {
    body.classList.add('_pc');
}

function showSubMenu(selector, className) {
    if (selector.length > 0) {
        selector.forEach(arrow => {
            arrow.addEventListener('click', () => {
                arrow.parentElement.classList.toggle(className);
            })
        });
    }
}

showSubMenu(menuArrows, 'menu__list-item--active');
showSubMenu(mobileMenuArrows, 'mobile-menu__list-item--active');

burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('_visible');
    body.classList.toggle('lock');
});

// Slider
$('.services__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Accordion
// const accrodionArrows = document.querySelectorAll('.accordion__item-arrow');
const accordionHeadings = document.querySelectorAll('.accordion__item-titlebox');

if (accordionHeadings.length > 0) {
    accordionHeadings.forEach((heading, index) => {
        heading.addEventListener('click', (e) => {
            const arrow = document.querySelector(`.accordion__item-arrow[data-arrow="${index}"]`);
            arrow.classList.toggle('arrow--active');
            heading.classList.toggle('active');
            const accordionItemBody = heading.nextElementSibling;
            if (heading.classList.contains('active')) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
        
    }) 
}

// Scroll top btn
function goToTop() {
    const btnTop = $('.go-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            btnTop.fadeIn();
        } else {
            btnTop.fadeOut();
        }  
    });
}

goToTop();