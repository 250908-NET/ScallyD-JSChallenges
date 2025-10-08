function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
  alert("Bye.");
}

// Connect the function to the button
let btn = document.getElementById("helloBtn");
btn.addEventListener("click", sayHello);

document.querySelector("#byeButton").addEventListener("click", sayGoodbye);
