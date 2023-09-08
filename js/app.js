if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("Service worker registered"))
      .catch((err) =>
        console.log("Service worker could not be registered", err)
      );
  });
}
