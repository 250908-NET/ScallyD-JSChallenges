function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}

function subtractNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let difference = n1 - n2;

  document.getElementById("result").textContent = "Result: " + difference;
}

function multiplyNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let product = n1 * n2;

  document.getElementById("result").textContent = "Result: " + product;
}

function divideNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);

  let message = "Error: Division by zero.";
  if (n2 !== 0) {
    let quotient = n1 / n2;
    message = "Result: " + quotient;
  }

  document.getElementById("result").textContent = message;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document
  .getElementById("subtractBtn")
  .addEventListener("click", subtractNumbers);
document
  .getElementById("multiplyBtn")
  .addEventListener("click", multiplyNumbers);
document.getElementById("divideBtn").addEventListener("click", divideNumbers);
