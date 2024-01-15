const main = document.querySelector("main");
main.style.backgroundImage = `url(${images[0]})`;

function goto() {
  main.style.backgroundImage = `url(${images[currentImageIndex]})`;
}

leftButton.addEventListener("click", function () {
  goBack();
  goto();
});

rightButton.addEventListener("click", function () {
  goForward();
  goto();
});

setInterval(function () {
  goForward();
  goto();
}, 1000);
