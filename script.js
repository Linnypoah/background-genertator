var css =  document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hexString = "0123456789abcdef";
var button = document.createElement("button")

button.textContent ="generate"
body.appendChild(button)
color1.value = "#ff0000"
color2.value = "#FFFF00"
css.textContent = "linear-gradient(to right, " + color1.value + ", "+ color2.value + ")";

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", "+ color2.value + ")";
    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient)


color2.addEventListener("input", setGradient)

function hex(){
    var hexCode = "#";
    for (i =0; i<6; i++){
        hexCode += hexString[Math.floor(Math.random()*hexString.length)]
    }
    return hexCode
}

function generateGrad(){
    color1.value = hex()
    color2.value = hex()
    setGradient()
}

button.addEventListener("click", generateGrad )




