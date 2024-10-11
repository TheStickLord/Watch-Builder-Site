"use strict";

console.log("Link Success - mobile-scaling");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("render-title").classList.add("hidden")
    document.querySelector(".main-body").classList.remove("flex-container")

    document.querySelector(".selection-div").classList.add("selection-div-mobile")
    document.querySelector(".render-div").classList.add("render-div-mobile")
    document.querySelector(".selection-div").classList.remove("selection-div")
    document.querySelector(".render-div").classList.remove("render-div")

    document.querySelector(".main-body").classList.add("main-body-mobile")
    document.querySelector(".main-body").classList.remove("main-body")

    document.querySelector(".color-picker-holder-position").classList.add("color-picker-holder-position-mobile")
    document.querySelector(".color-picker-holder-position").classList.remove("color-picker-holder-position")

    // Move selection-div

    const selectionDiv = document.querySelector(".selection-div-mobile")
    const renderDiv = document.querySelector(".render-div-mobile")
    const mainDiv = document.querySelector(".main-body-mobile")

    mainDiv.insertBefore(renderDiv, selectionDiv)

    // Render Scaling

    let renderImgs = document.querySelectorAll(".renderImg")
    renderImgs.forEach(image => {
        image.classList.add("renderImg-mobile")
        image.classList.remove("renderImg")
    })

}