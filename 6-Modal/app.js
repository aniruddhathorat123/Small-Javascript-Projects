// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".model-btn");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// when user clicks modal-btn add .open-modal to modal-overlay
modalBtn.addEventListener("click", function() {
    modalOverlay.classList.add("open-modal");
})

// when user clicks close-btn remove .open-modal from modal-overlay
closeBtn.addEventListener("click", function() {
    modalOverlay.classList.remove("open-modal");
})