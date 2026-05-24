let screen = document.getElementById("screen"); //display screen
let screen2 = document.getElementById("screen2"); //answer screen

let calculation = ""; //store the calculation

function showValue(button) {
    let value = button.innerText; //get the value of the button
    calculation += value; //append the value to the calculation
    screen.innerText = calculation; //display the calculation on the screen


    document.getElementById("cancell").onclick = function () {
        calculation = calculation.slice(0, -1);
        screen.textContent = calculation
    }
    
}


function showSing(button) {
    let value = button.innerText; //get the value of the button
    

    if (value === "x"){
        value = "*";
        calculation += value;
        screen.textContent = calculation;
    }else if(value === "/"){
        calculation += value;
        screen.textContent = calculation;
    }else if(value === "+"){
        calculation += value;
        screen.textContent = calculation;
    }else if(value === "-"){
        calculation += value;
        screen.textContent = calculation;
    }else if (value === "%") {
    calculation = calculation / 100;
    screen.textContent = calculation;
    } else if (value === "+/-") {
    calculation = Number(calculation) * -1;
    screen.textContent = calculation;
    }else {
    
}
if (value === "C"){
        calculation = ""; //clear the calculation
        screen.innerText = ""; //clear the screen
        screen2.innerText = ""; //clear the answer screen
    } else if (value === "=") {
        let result = eval(calculation); //evaluate the calculation
        screen2.innerText = result + "="; //display the result on the answer screen
    } else {

    }


}

function showColor(button) {
    let colors = ["#f8a384", "#c8fd8b", "#bcfbfb", "#fac5fa", "#fcf7af"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
function showColorShell(button) {
let colors1 = ["#000000", "#335d02", "#010858", "#faf6fa", "#f9e901"];
let colors2 = ["#ffffff", "#88ffeb", "#000000", "#fdc6fd", "#fffeeb"];
let randomColor1 = colors1[Math.floor(Math.random() * colors1.length)];
let randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];
document.getElementById("body").style.backgroundColor = randomColor1;
let buttons = document.querySelectorAll("#number button");
buttons.forEach(function(btn) {
    btn.style.backgroundColor = randomColor2;
});


let colors3 = ["#a40000", "#b70000", "#b53c00", "#ffae00", "#ff0000"];
let colors4 = ["#15ff00", "#00ffd5", "#0d6d00", "#2cb222", "#00ff9d"];
let randomColor3 = colors3[Math.floor(Math.random() * colors3.length)];
let randomColor4 = colors4[Math.floor(Math.random() * colors4.length)];
document.getElementById("c").style.backgroundColor = randomColor3;
document.getElementById("eq").style.backgroundColor = randomColor4;
}