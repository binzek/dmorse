const morseCodeFlipped = {
  "•-": "A",
  "-•••": "B",
  "-•-•": "C",
  "-••": "D",
  "•": "E",
  "••-•": "F",
  "--•": "G",
  "••••": "H",
  "••": "I",
  "•---": "J",
  "-•-": "K",
  "•-••": "L",
  "--": "M",
  "-•": "N",
  "---": "O",
  "•--•": "P",
  "--•-": "Q",
  "•-•": "R",
  "•••": "S",
  "-": "T",
  "••-": "U",
  "•••-": "V",
  "•--": "W",
  "-••-": "X",
  "-•--": "Y",
  "--••": "Z",
  "-----": "0",
  "•----": "1",
  "••---": "2",
  "•••--": "3",
  "••••-": "4",
  "•••••": "5",
  "-••••": "6",
  "--••••": "7",
  "---•••": "8",
  "----••": "9",
  "•-•-•-": ".",
  "--••--": ",",
  "••--••": "?",
  "•----•": "'",
  "-•-•--": "!",
  "-••-•": "/",
  "-•--•": "(",
  "-•--•-": ")",
  "•-•-•": "&",
  "---•••": ":",
  "-•-•-•": ";",
  "-•••-": "=",
  "•-•-•": "+",
  "-••••-": "-",
  "••--•-": "_",
  "•-••-•": '"',
  "•--•-•": "@",
  "/": " ",
};

const decodeButton = document.getElementById("button--decode");
const morseInput = document.getElementById("input--morse");
const textOutput = document.getElementById("output--text");
const copyTextButton = document.getElementById("button--copy-text");

decodeButton.addEventListener("click", () => {
  textOutput.value = morseInput.value
    .split(" ")
    .map((char) => morseCodeFlipped[char] || char)
    .join("");
});

copyTextButton.addEventListener("click", () => {
  textOutput.select();
  document.execCommand("copy");
});
