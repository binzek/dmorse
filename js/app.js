if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .catch((err) => console.error(err));
  });
} else {
  console.error("Service Workers not supported");
}
