var button = document.querySelector(".button");
var image = document.querySelector(".img-lucrare");
var wasClicked = false;

button.addEventListener("click", function() {
   if(!wasClicked) {image.style.width = "800px"; wasClicked = true;} else 
{image.style.width = "451px"; wasClicked = false;} }, false);
