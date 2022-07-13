const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomNum = getRandNum();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
    console.log(colors[randomNum]);
})

function getRandNum() {
    // multiplied with size of array so that we can get random number between 0 to max size of array.
    return Math.floor(Math.random() * colors.length);
}