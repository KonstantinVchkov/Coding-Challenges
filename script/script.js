// selecting all buttons
const buttons = document.querySelectorAll(".button");
// Selecting the text area
const textArea = document.querySelector("p");
// Selecting the space button
const space = document.querySelector(".space");

// The iteration is used on the "buttons" array to iterate through every button element and add an event listener that will listen for a "click" event.
buttons.forEach((el) => {
  el.addEventListener("click", () => {
    textArea.textContent += el.innerText;
  });
});

// Space button - Making an empty space.
space.addEventListener("click", () => {
  textArea.textContent += " ";
});
