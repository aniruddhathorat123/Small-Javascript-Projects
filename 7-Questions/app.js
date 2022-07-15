//using selectors inside the element
// traversing the dom

// FIRST WAY:
const questions = document.querySelectorAll(".question");
questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    //console.log(btn);
    // for each button, add click listener to show and hide 
    // answer field.
    btn.addEventListener("click", function() {
        // first close other question if it is open.
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});



// ANOTHER WAY:
// const queBtns = document.querySelectorAll(".question-btn");
// queBtns.forEach(function(queBtn) {
//     queBtn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     })
// })
