const tabSwitches = document.getElementById("tab-switches");
const tabSwitchEncode = document.getElementById("tab-switch--encode");
const tabSwitchDecode = document.getElementById("tab-switch--decode");
const encodeBoxes = document.getElementById("boxes--encode");
const decodeBoxes = document.getElementById("boxes--decode");

window.addEventListener("load", () => {
  if (!localStorage.app) {
    localStorage.app = "encode";
  }
  tabSwitches.setAttribute("data-current", localStorage.app);
  if (localStorage.app == "decode") {
    encodeBoxes.style.display = "none";
    decodeBoxes.style.display = "flex";
  } else {
    decodeBoxes.style.display = "none";
    encodeBoxes.style.display = "flex";
  }
});

tabSwitchEncode.addEventListener("click", () => {
  localStorage.app = "encode";
  tabSwitches.setAttribute("data-current", "encode");
  decodeBoxes.style.display = "none";
  encodeBoxes.style.display = "flex";
});

tabSwitchDecode.addEventListener("click", () => {
  localStorage.app = "decode";
  tabSwitches.setAttribute("data-current", "decode");
  encodeBoxes.style.display = "none";
  decodeBoxes.style.display = "flex";
});
