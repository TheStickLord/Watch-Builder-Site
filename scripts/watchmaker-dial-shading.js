"use strict";

console.log("Link Success - dial-shading");

// Var Declare

const dialHue = document.querySelector('.hue-filter')
const dialBrightness = document.querySelector('.brightness-filter')
const dialGreyscale = document.querySelector('.greyscale-filter')

const hueSlider = document.getElementById("hue-slider")
const brightnessSlider = document.getElementById("brightness-slider")
const greyscaleSlider = document.getElementById("greyscale-slider")

const hueSliderText = document.getElementById('hue-value-text')
const brightnessSliderText = document.getElementById('brightness-value-text')
const greyscaleSliderManText = document.getElementById('greyscale-value-text')


// Slider Set

hueSlider.value = 0;
brightnessSlider.value = 50;
greyscaleSlider.value = 0;


// Slider Code

hueSlider.addEventListener("input", function() {
    let shift = (hueSlider.value * (360/100));
    dialHue.style.filter = `hue-rotate(${shift}deg)`
    hueSliderText.textContent = Math.round(shift)
})

brightnessSlider.addEventListener("input", function(){
    let shift = 1 + ((brightnessSlider.value / 100) - .5);

    if (shift == 2) {
        let shift = 10000
        brightnessSliderText.textContent = "Max"
    } else {
        brightnessSliderText.textContent = Math.round(shift * 10)/10
    }
    dialBrightness.style.filter = `brightness(${shift})`
})

greyscaleSlider.addEventListener("input", function(){
    let shift = 1 + ((greyscaleSlider.value / 100) - 1);
    dialGreyscale.style.filter = `grayscale(${shift})`
    greyscaleSliderManText.textContent = Math.round(shift * 10)/10
})