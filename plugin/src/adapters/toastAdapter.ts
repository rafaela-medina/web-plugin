import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function showToast(message: string, isSuccess: boolean): void {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    position: "center",
    backgroundColor: isSuccess ? "green" : "red",
    stopOnFocus: true,
  }).showToast();
}
