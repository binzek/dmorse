const root = document.getElementById("root");
const themeSwitch = document.getElementById("theme-switch");
const themeSwitchLight = document.getElementById("theme-switch--light");
const themeSwitchDark = document.getElementById("theme-switch--dark");

themeSwitchLight.addEventListener("click", () => {
  root.setAttribute("data-theme", "light");
  themeSwitch.setAttribute("data-active", "light");
});

themeSwitchDark.addEventListener("click", () => {
  root.setAttribute("data-theme", "dark");
  themeSwitch.setAttribute("data-active", "dark");
});
