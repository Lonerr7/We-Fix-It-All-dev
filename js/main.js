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