var redLight = document.getElementById("red");
    var yellowLight = document.getElementById("yellow");
    var greenLight = document.getElementById("green");
function resetLights() {
    

    redLight.classList.remove("actred");
    yellowLight.classList.remove("actyellow");
    greenLight.classList.remove("actgreen");
}

function redlg() {
    
    resetLights();
    redLight.classList.add("actred");
}

function yellg() {
    
    resetLights();
    yellowLight.classList.add("actyellow");
}

function grelg() {
   
    resetLights();
    greenLight.classList.add("actgreen");
}
