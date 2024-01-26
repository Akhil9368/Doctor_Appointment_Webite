'use strict';
// /* The above statement tells the browser to use the Strict mode application for Js file or any specific function, just to make your code safe.
// Let's understand it:
// It is introduced in ECMAScript 5 and allows us to place it in JavaScript file or in a function to make them follow some "strict" rules during execution.
// It helps us to prevents some unnecessary action to happen and helps us to throws more exceptions in detail so that we could have more clear and safe script codes.*/


/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


// PreLoader
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load", function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});


let navbar = document.querySelector("[data-navbar]");
let navTogglers = document.querySelectorAll("data-nav-toggler");
let overlay = document.querySelector("[data-overlay]");
const open_btn = document.getElementsByClassName(".nav-open-btn");

// console.log(open_btn)
function Open_close(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}  




/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backbtn = document.querySelector("[data-back-top-btn]");
const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backbtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backbtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);


// Scroll Reveal

const revealElements = document.querySelectorAll("[data-reveal]");
console.log(revealElements)
const revealElementOnScroll = function(){
  console.log("Akhil"+ revealElements);
  for(let i=0, len=revealElements.length; i<len;i++){
   
    if(revealElements[i].getBoundingClientRect().top < window.innerHeight/1.15){
      revealElements[i].classList.add("revealed");
    }
    else{
      revealElements[i].classList.remove("revealed");
    }

  }
}

window.addEventListener("scroll",revealElementOnScroll);
window.addEventListener("load",revealElementOnScroll)