const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    menu.classList.toggle("inactive");
}

document.addEventListener("DOMContentLoaded", function() {
    var contentContainers = document.querySelectorAll(".content-img-container");
    var bgText = document.querySelector(".bg-text-caps-p");

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

        if (isElementInViewport(bgText, offset)) {
            if (!bgText.classList.contains("visible")) {
                bgText.classList.add("visible");
            }
        } else {
            if (bgText.classList.contains("visible")) {
                bgText.classList.remove("visible");
            }
        }
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

    // Trigger the scroll event to check initially
    window.dispatchEvent(new Event('scroll'));
});








// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }