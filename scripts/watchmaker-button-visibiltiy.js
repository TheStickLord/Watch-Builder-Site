"use strict";

console.log("Link Success - button-visibility");

function toggleVisibility(event) {
    const element = event.target.nextElementSibling; 
    element.classList.toggle("hidden"); 
}

const buttons = document.querySelectorAll(".selection-button");
buttons.forEach(button => {
    button.addEventListener("click", toggleVisibility);
});

const menuButtons = document.querySelectorAll(".menu-subtitle-dropdown");
menuButtons.forEach(button => {
    button.addEventListener("click", toggleVisibility);
});