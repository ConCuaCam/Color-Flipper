let colors = ["Green", "Red", "Rgba(133,122,200)", "#F15025"];
let button = document.getElementById("button");
let color = document.querySelector(".color")


button.addEventListener("click", function() {
    var randomColor = colors[Math.floor(Math.random()* colors.length)];

    let container = document.getElementById("container");

    container.style.background = randomColor;

    color.textContent = randomColor;

})


