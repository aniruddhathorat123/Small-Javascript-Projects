// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// toggle the `show-links` class from `links` class 
// whenever user click on navgation button.
navToggle.addEventListener("click", function() {
    //console.log(links.classList);
    // METHOD 1:
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }
    // MEHTOD 2:
    links.classList.toggle("show-links");
})
