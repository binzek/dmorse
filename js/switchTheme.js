const root = document.getElementById("root");
const themeSwitch = document.getElementById("theme-switch");
const themeSwitchLight = document.getElementById("theme-switch--light");
const themeSwitchDark = document.getElementById("theme-switch--dark");

window.addEventListener("load", () => {
  if (!localStorage.theme) {
    localStorage.theme = "light";
  }
  root.setAttribute("data-theme", localStorage.theme);
  themeSwitch.setAttribute("data-active", localStorage.theme);
});

themeSwitchLight.addEventListener("click", () => {
  root.setAttribute("data-theme", "light");
  themeSwitch.setAttribute("data-active", "light");
  localStorage.theme = "light";
});

themeSwitchDark.addEventListener("click", () => {
  root.setAttribute("data-theme", "dark");
  themeSwitch.setAttribute("data-active", "dark");
  localStorage.theme = "dark";
});
