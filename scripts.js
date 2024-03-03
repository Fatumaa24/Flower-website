const button = document.createElement("button");
button.textContent = "Click me";

document.body.appendChild(button);

document.querySelector("button").addEventListener("click", function () {
    alert("Congrats !! you have won a free rose");


})

