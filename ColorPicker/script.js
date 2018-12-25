var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandom = document.querySelector("button");


function setGradient() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";
    css.textContent = body.style.background + ";";
}

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");";

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

buttonRandom.addEventListener("click", function() {
    color1.value = '#' + (Math.random() * 0xFFFFFF | 0).toString(16);
	color2.value = '#' + (Math.random() * 0xFFFFFF | 0).toString(16);
	setGradient();
})