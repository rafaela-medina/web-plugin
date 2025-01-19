import { createButton } from "./adapters/buttonAdapter";
import { trackThemeChanges } from "./core/dataExtractor";

(function initializePlugin() {
  document.addEventListener("DOMContentLoaded", () => {
    trackThemeChanges();
    createButton();
  });
})();
