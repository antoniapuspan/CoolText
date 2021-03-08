"use strict";

window.addEventListener("DOMContentLoaded", start);

// for(let i=0;i<x.length;i++) {
//     const delay = 0.1 * i;
//     document.querySelector("letter").style.setProperty("--delay", delay + "s");
// }

function start() {
    //get the text
    let myPhrase = document.querySelector(".text");

    //Remove existing text 
    let myText = myPhrase.innerHTML;
    myPhrase.innerHTML = '';

    //split the text
    let splitText = myText.split("");
    // console.log(splitText);

    //create a span element and put the character inside the span element 
    splitText.forEach((character, index) => {
        let span = document.createElement("span");
        span.classList.add("staggered-animation");
        span.style.setProperty("--character", index);

        if (character === " ") {
            span.innerHTML = "&nbsp";
        } else {
            span.textContent = character;
        }
        myPhrase.append(span);
    });
}

