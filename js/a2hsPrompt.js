let deferredPrompt;

const a2hsScreen = document.getElementById("a2hs-screen");
const a2hsInstallButton = document.getElementById("a2hs-button--install");
const a2hsCancelButton = document.getElementById("a2hs-button--cancel");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  a2hsScreen.style.display = "flex";
});

a2hsCancelButton.addEventListener("click", () => {
  a2hsScreen.style.display = "none";
});

a2hsInstallButton.addEventListener("click", () => {
  a2hsScreen.style.display = "none";
  deferredPrompt.prompt();
  deferredPrompt = null;
});
