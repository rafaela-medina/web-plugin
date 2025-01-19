import { ExtractDataUseCase } from "../core/useCases/ExtractDataUseCase";
import { ApiService } from "../core/services/ApiService";
import { showToast } from "./toastAdapter";

const icon = `
 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fill-rule="nonzero"><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M28.90625,1.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125h-17.28125c-1.91406,0 -3.5,1.55859 -3.5,3.46875v38.4375c0,2.25391 1.86719,4.09375 4.125,4.09375h25.75c2.25781,0 4.125,-1.83984 4.125,-4.09375v-28.71875c0.02734,-0.13281 0.02734,-0.27344 0,-0.40625v-0.28125c0.00781,-0.26562 -0.09375,-0.52734 -0.28125,-0.71875l-11.5,-11.5c-0.19141,-0.1875 -0.45312,-0.28906 -0.71875,-0.28125h-0.3125c-0.08984,-0.02344 -0.1875,-0.03516 -0.28125,-0.03125zM11.5,4h16.5v8.34375c0,2.01172 1.64453,3.65625 3.65625,3.65625h8.34375v27.90625c0,1.16797 -0.94531,2.09375 -2.125,2.09375h-25.75c-1.17969,0 -2.125,-0.92578 -2.125,-2.09375v-38.4375c0,-0.82422 0.66016,-1.46875 1.5,-1.46875zM30,4.9375l9.0625,9.0625h-7.40625c-0.93359,0 -1.65625,-0.72266 -1.65625,-1.65625zM17,24v2h16v-2zM17,28v2h16v-2zM17,32v2h16v-2zM17,36v2h9v-2z"></path></g></g></svg>
`;

export function createButton() {
  const apiService = new ApiService();
  const extractDataUseCase = new ExtractDataUseCase(apiService);

  const button = document.createElement("div");
  button.id = "data-extraction-button";
  button.innerHTML = `
    <div class="button-content">
      <span class="tooltip">Extrair Dados</span>
      <div class="icon">${icon}</div>
    </div>
  `;

  injectStyles();

  button.onclick = async () => {
    button.classList.add("active");

    try {
      showToast("🔄 Extraindo dados...", true);
      const success = await extractDataUseCase.execute();
      showToast(
        success ? "✅ Dados enviados com sucesso!" : "❌ Erro ao enviar dados!",
        success
      );
    } catch (error) {
      showToast("⚠️ Erro na extração!", false);
    }

    button.classList.remove("active");
  };

  document.body.appendChild(button);
}

function injectStyles() {
  const style = document.createElement("style");
  style.innerHTML = `
    #data-extraction-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #002b80;
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      z-index: 1000;
    }

    #data-extraction-button img {
      width: 30px;
      height: 30px;
    }

    #data-extraction-button .tooltip {
      position: absolute;
      right: 70px;
      background: white;
      color: #002b80;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 14px;
      opacity: 0;
      transform: translateX(10px);
      transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      white-space: nowrap;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    #data-extraction-button:hover .tooltip {
      opacity: 1;
      transform: translateX(0);
    }
  `;
  document.head.appendChild(style);
}
