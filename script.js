const startKeyPress = document.getElementById("b1");
const stopKeyPress = document.getElementById("b2");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

startKeyPress.addEventListener("click", (e) => {

    stopKeyPress.style.backgroundColor = "";
    startKeyPress.style.border = "5px solid black";
    stopKeyPress.style.border = "2px solid black";
    startKeyPress.disabled = true;
    stopKeyPress.disabled = false;


    document.addEventListener("keypress", (e) => {
        box2.innerHTML = "Key is down"
        box1.innerText = "Key is " + e.key + " pressed";
    })

    document.addEventListener("keyup", (e) => {
        box2.innerHTML = "Key is up";
        box1.innerText = "Key is " + e.key + " released";
    })
})

stopKeyPress.addEventListener("click", (e) => {
    stopKeyPress.disabled = true;
    startKeyPress.disabled = false;
    startKeyPress.style.backgroundColor = "";
    stopKeyPress.style.border = "5px solid black";
    startKeyPress.style.border = "2px solid black";
    document.removeEventListener("keypress", (e) => {
        box2.innerHTML = "Key is down"
        box1.innerText = "Key is " + e.key + " pressed"; 
    })
    document.removeEventListener("keyup", (e) => {
        box2.innerHTML = "Key is up";
        box1.innerText = "Key is " + e.key + " released"; 
    })
   box1.textContent = "";
   box2.textContent = "";
})
