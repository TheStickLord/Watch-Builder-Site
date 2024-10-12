"use strict";

console.log("Link Success - button-handler");

const movementImage = document.getElementById("movement");
        const dialBlankImage = document.getElementById("dial-blank");
        const dialOverlayImage = document.getElementById("dial-overlay");
        const gmtImage = document.getElementById("gmt");
        const handsImage = document.getElementById("hands");
        const caseImage = document.getElementById("case");
        const bezelImage = document.getElementById("bezel");


        const NH34white = document.getElementById('NH34-35_white');
        const NH34black = document.getElementById('NH34-35_black');
        const NH36white = document.getElementById('NH36_white');
        const NH36black = document.getElementById('NH36_black');
        const NH38 = document.getElementById('NH38');

        let currentMovement = "";
        let currentCase = "";


        // Movement Selection

        function typeReveal(movementType) {
            currentMovement = movementType

            if (currentMovement == "NH34-NH35" || currentMovement == "NH36") {
                document.getElementById("NH34_36-dials").classList.remove("hidden")
                document.getElementById("NH38-dials").classList.add("hidden")

                document.getElementById("all-hands").classList.remove("hidden")
                document.getElementById("NH34-gmt-hands").classList.remove("hidden")

                if (currentMovement == "NH36") {
                    document.getElementById("NH34-gmt-hands").classList.add("hidden")
                }
            } else if (currentMovement == "NH38") {
                document.getElementById("NH34_36-dials").classList.add("hidden")
                document.getElementById("NH38-dials").classList.remove("hidden")

                document.getElementById("all-hands").classList.remove("hidden")
                document.getElementById("NH34-gmt-hands").classList.add("hidden")
            } else {
                document.getElementById("NH34_36-dials").classList.add("hidden")
                document.getElementById("NH38-dials").classList.add("hidden")

                document.getElementById("all-hands").classList.add("hidden")
                document.getElementById("NH34-gmt-hands").classList.add("hidden")
            }
        }


        NH34white.addEventListener("click", function() {
            movementImage.src = "movements/NH34_NH35-White.png"
            typeReveal("NH34-NH35")
        })

        NH34black.addEventListener("click", function() {
            movementImage.src = "movements/NH34_NH35-Black.png"
            typeReveal("NH34-NH35")
        })

        NH36white.addEventListener("click", function() {
            movementImage.src = "movements/NH36-White.png"
            typeReveal("NH36")
            gmtImage.src = ""
        })

        NH36black.addEventListener("click", function() {
            movementImage.src = "movements/NH36-Black.png"
            typeReveal("NH36")
            gmtImage.src = ""
        })

        NH38.addEventListener("click", function() {
            movementImage.src = "movements/NH38.png"
            typeReveal("NH38")
            gmtImage.src = ""
        })


        // Dial Selection

        const dialButtons = document.querySelectorAll(".dial-buttons");
        dialButtons.forEach(button => {
            button.addEventListener("click", function() {

                let buttonID = button.id
                document.getElementById("color-picker-holder").classList.remove('hidden')
                
                if (currentMovement == "NH34-NH35") {
                    dialBlankImage.src = "dial/NH34-NH35-NH36/Blanks/NH34-35.png"
                } else if(currentMovement == "NH36") {
                    dialBlankImage.src = "dial/NH34-NH35-NH36/Blanks/NH36.png"
                } 

                if (buttonID.substring(0, 5) == "diver") {

                    dialOverlayImage.src = "dial/NH34-NH35-NH36/Diver/diver-" + buttonID.substring(11, buttonID.length) + ".png"

                } else if (buttonID.substring(0, 5) == "pilot") {

                    dialOverlayImage.src = "dial/NH34-NH35-NH36/Pilot/pilot-" + buttonID.substring(11, buttonID.length) + ".png"

                } else if (buttonID.substring(0, 8) == "straight") {

                    dialOverlayImage.src = "dial/NH34-NH35-NH36/Straight-Line/straight-" + buttonID.substring(9, buttonID.length) + ".png"
                    
                } else if (buttonID.substring(0, 4) == "open") {
                    dialBlankImage.src = "dial/NH38/exposed.png"

                    dialOverlayImage.src = "dial/NH38/Open-Movement/exposed-" + buttonID.substring(10, buttonID.length) + ".png"
                } else if (buttonID.substring(0, 4) == "date") {
                    dialBlankImage.src = "dial/NH38/dateless.png"
                    
                    dialOverlayImage.src = "dial/NH38/Dateless/pilot-" + buttonID.substring(14, buttonID.length) + ".png"
                } 

            });
        });

        // Hand Selection

        const mercedesHands = document.querySelectorAll(".mercedes-hands");
        mercedesHands.forEach(hands => {
            hands.addEventListener("click", function() {
                let color = hands.id
                color = color.substring(9, color.length)
                let fileLocation = "hands/Mercedes/" + color + ".png"
                handsImage.src = fileLocation
            });
        });

        const batonHands = document.querySelectorAll(".baton-hands");
        batonHands.forEach(hands => {
            hands.addEventListener("click", function() {
                let color = hands.id
                color = color.substring(6, color.length)
                let fileLocation = "hands/Baton/" + color + ".png"
                handsImage.src = fileLocation
            });
        });

        const pilotHands = document.querySelectorAll(".pilot-hands");
        pilotHands.forEach(hands => {
            hands.addEventListener("click", function() {
                let color = hands.id
                color = color.substring(6, color.length)
                let fileLocation = "hands/Pilot/" + color + ".png"
                handsImage.src = fileLocation
            });
        });

        const SKXHands = document.querySelectorAll(".SKX-hands");
        SKXHands.forEach(hands => {
            hands.addEventListener("click", function() {
                let color = hands.id
                color = color.substring(4, color.length)
                let fileLocation = "hands/SKX/" + color + ".png"
                handsImage.src = fileLocation
            });
        });

        const gmtHands = document.querySelectorAll(".gmt-hands");
        gmtHands.forEach(hands => {
            hands.addEventListener("click", function() {
                let color = hands.id
                color = color.substring(4, color.length)
                let fileLocation = "hands/GMT/" + color + ".png"
                gmtImage.src = fileLocation
            });
        });


        //Case Selection

        function caseReveal(caseType){
            if (caseType == "SKX" || caseType == "Rolex") {
                document.getElementById("bezel-reveal").classList.remove("hidden")
            } else {
                document.getElementById("bezel-reveal").classList.add("hidden")
            }
        }

        const pilotCases = document.querySelectorAll(".pilot-case");
        pilotCases.forEach(cases => {
            cases.addEventListener("click", function() {
                caseReveal("Pilot")
                bezelImage.src = ""
                let color = cases.id
                color = color.substring(6, color.length)
                let fileLocation = "case/Pilot/" + color + ".png"
                caseImage.src = fileLocation
            });
        });

        const rolexCases = document.querySelectorAll(".rolex-case");
        rolexCases.forEach(cases => {
            cases.addEventListener("click", function() {
                caseReveal("Rolex")
                let color = cases.id
                color = color.substring(6, color.length)
                let fileLocation = "case/Rolex/" + color + ".png"
                caseImage.src = fileLocation
            });
        });

        const SKXCase = document.querySelectorAll(".SKX-case");
        SKXCase.forEach(cases => {
            cases.addEventListener("click", function() {
                caseReveal("SKX")
                let color = cases.id
                color = color.substring(4, color.length)
                let fileLocation = "case/SKX/" + color + ".png"
                caseImage.src = fileLocation
            });
        });


        // Bezel Selection

        const diverBezel = document.querySelectorAll(".diver-bezel");
        diverBezel.forEach(bezel => {
            bezel.addEventListener("click", function() {
                let color = bezel.id
                color = color.substring(6, color.length)
                let fileLocation = "case/Bezel/Diver/" + color + ".png"
                bezelImage.src = fileLocation
            });
        });

        const gmtBezel = document.querySelectorAll(".gmt-bezel");
        gmtBezel.forEach(bezel => {
            bezel.addEventListener("click", function() {
                let color = bezel.id
                color = color.substring(4, color.length)
                let fileLocation = "case/Bezel/GMT/" + color + ".png"
                bezelImage.src = fileLocation
            });
        });


        // Clear All

        document.getElementById("clear-button").addEventListener("click", function(){

            document.getElementById("color-picker-holder").classList.add('hidden')

            movementImage.src = ""
            dialBlankImage.src = ""
            dialOverlayImage.src = ""
            gmtImage.src = ""
            handsImage.src = ""
            caseImage.src = ""
            bezelImage.src = ""

            typeReveal("none")
            caseReveal("none")
        })