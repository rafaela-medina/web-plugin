import { detectDevice, detectOS, getOrigin, trackThemeChanges, getThemeSwitchCount } from "./core/dataExtractor";
import { createButton } from "./adapters/buttonAdapter";

(function initializePlugin() {
  document.addEventListener("DOMContentLoaded", () => {
    createButton();
    trackThemeChanges();
  });
})();
