// HAMBURGER below

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function() {
    var contentContainers = document.querySelectorAll(".content-img-container");
    // var bgText = document.querySelector(".bg-text-caps-p");

    var offset = 200;

    window.addEventListener("scroll", function() {
        contentContainers.forEach(function(container, index) {
            if (isElementInViewport(container, offset)) {
                if (!container.classList.contains("visible")) {
                    container.classList.add("visible");
                }
            } else {
                if (container.classList.contains("visible")) {
                    container.classList.remove("visible");
                }
            }
        });
    });

    function isElementInViewport(el, offset) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 - offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger the scroll event
    window.dispatchEvent(new Event('scroll'));
});


// HAMBURGER above



// SLIDER ANIMATION below


const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 50000);
    }
}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

function nextSlideImgClick(){
    slideIndex++;
    showSlide(slideIndex);
}



// SLIDER ANIMATION above



// TEXT SELECTOR below

document.getElementById('topicOne').addEventListener('click', function() {
    showText('textOne');
});

document.getElementById('topicTwo').addEventListener('click', function() {
    showText('textTwo');
});

document.getElementById('topicThree').addEventListener('click', function() {
    showText('textThree');
});

let textOne = document.getElementById("textOne")
let textTwo = document.getElementById("textTwo")
let textThree = document.getElementById("textThree")

function showText(){
    slides[slideIndex].classList.add("displaySlide");
}


// TEXT SELECTOR above
















// const test_form = document.getElementById("test-form");
// console.log('FJDKFHDJKFHSKDJFH')

// test_form.addEventListener("click", function test_form () {
//     const text_area = document.getElementById("text-area");
// })


// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }