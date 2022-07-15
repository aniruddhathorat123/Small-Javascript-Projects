const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

// listen click event on complete `about` section.
about.addEventListener("click", function(e) {
    // get the `data-id` for clicked item.
    // currently only buttons have `data-id` so other items
    // returns `undefined`.
    // `e.target` return whetever element you clicked.
    const id = e.target.dataset.id;
    console.log(id);
    if (id /*if id != undefined*/) {
        // remove active from other buttons.
        btns.forEach(function(btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        // display the current clicked article
        // and hide other article.
        articles.forEach(function(article) {
            article.classList.remove("active");
        });
        const dispArticle = document.getElementById(id);
        dispArticle.classList.add("active");
    }
});