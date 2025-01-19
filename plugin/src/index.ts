import { createButton } from "./adapters/buttonAdapter";

(function initializePlugin() {
  document.addEventListener("DOMContentLoaded", () => {
    createButton();
  });
})();
