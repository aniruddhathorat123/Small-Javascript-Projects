// set initial value of counter.
let count = 0;

// select values and buttons.
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// btns gives the NodeList like following.
// NodeList(3) [button.btn.decrease, button.btn.reset, button.btn.increase]
console.log(btns);

// for each button in btns node list, we create function
// and in that fucntion we list the click event to any of
// the 3 button.
btns.forEach(function(btn) {
    btn.addEventListener("click", function (btnEvent) {
        const style = btnEvent.currentTarget.classList;
        if (style.contains("decrease")) {
            count--;
        } else if (style.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        // set color of value as per value.
        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})

// This method is called when any of the three buttons
// gets clicked.
// *Param : btnEvent: event object of button clicked.
function onButtonClicked(btnEvent) {
    //const style = btnEvent.currentTarget
    console.log("btn clicked");
}