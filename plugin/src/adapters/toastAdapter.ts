export function showToast(message: string, success: boolean) {
  let toast = document.querySelector(".toast") as HTMLElement;

  injectStyles();

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    ${message}
  `;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function injectStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    .toast {
      position: fixed;
      top: 20px;
      right: 20px;
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      opacity: 0;
      transform: translateX(100%);
      transition: opacity 0.3s ease, transform 0.3s ease-in-out;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    }

    .toast.show {
      opacity: 1;
      transform: translateX(0);
    }

    .toast-icon {
      width: 20px;
      height: 20px;
    }
  `;
  document.head.appendChild(style);
}
