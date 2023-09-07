const tabSwitches = document.getElementById("tab-switches");
const tabSwitchEncode = document.getElementById("tab-switch--encode");
const tabSwitchDecode = document.getElementById("tab-switch--decode");

window.addEventListener("load", () => {
  if (!localStorage.app) {
    localStorage.app = "encode";
  }
  tabSwitches.setAttribute("data-current", localStorage.app);
});

tabSwitchEncode.addEventListener("click", () => {
  localStorage.app = "encode";
  tabSwitches.setAttribute("data-current", "encode");
});

tabSwitchDecode.addEventListener("click", () => {
  localStorage.app = "decode";
  tabSwitches.setAttribute("data-current", "decode");
});
