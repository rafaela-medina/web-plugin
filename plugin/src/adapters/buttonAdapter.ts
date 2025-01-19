import { ExtractDataUseCase } from "../core/useCases/ExtractDataUseCase";
import { ApiService } from "../core/services/ApiService";
import { showToast } from "./toastAdapter";
import icon from "../assets/icon.svg";

export function createButton() {
  const apiService = new ApiService();
  const extractDataUseCase = new ExtractDataUseCase(apiService);

  const button = document.createElement("div");
  button.id = "data-extraction-button";
  button.innerHTML = `
    <div class="button-content">
      <span class="tooltip">Extrair Dados</span>
      <img src="${icon}" alt="Extrair">
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
