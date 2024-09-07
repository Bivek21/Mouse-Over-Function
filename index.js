const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Ouch😝";
});
