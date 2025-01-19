import { ExtractDataUseCase } from "../core/useCases/ExtractDataUseCase";
import { ApiService } from "../core/services/ApiService";
import { showToast } from "./toastAdapter";

export function createButton() {
  const apiService = new ApiService();
  const extractDataUseCase = new ExtractDataUseCase(apiService);

  const button = document.createElement("div");
  button.id = "data-extraction-button";
  button.innerHTML = `
    <div class="button-content">
      <span class="tooltip">Extrair Dados</span>
      <img src="https://example.com/icon.png" alt="Extrair">
    </div>
  `;

  button.onclick = async () => {
    button.classList.add("active");

    try {
      showToast("🔄 Extraindo dados...", true);
      const success = await extractDataUseCase.execute();
      showToast(success ? "✅ Dados enviados com sucesso!" : "❌ Erro ao enviar dados!", success);
    } catch (error) {
      showToast("⚠️ Erro na extração!", false);
    }

    button.classList.remove("active");
  };

  document.body.appendChild(button);
}
