let deferredPrompt;

const body = document.querySelector("body");
const a2hsScreen = document.getElementById("a2hs-screen");
const a2hsInstallButton = document.getElementById("a2hs-button--install");
const a2hsCancelButton = document.getElementById("a2hs-button--cancel");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  a2hsScreen.style.display = "flex";
  body.classList.add("noscroll");
});

a2hsCancelButton.addEventListener("click", () => {
  a2hsScreen.style.display = "none";
  body.classList.remove("noscroll");
});

a2hsInstallButton.addEventListener("click", () => {
  a2hsScreen.style.display = "none";
  body.classList.remove("noscroll");
  deferredPrompt.prompt();
  deferredPrompt = null;
});
