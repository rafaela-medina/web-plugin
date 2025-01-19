export function createButton() {
    // Criando o botão principal
    const button = document.createElement("div");
    button.id = "data-extraction-button";
    button.innerHTML = `
      <div class="button-content">
        <span class="tooltip">Extrair Dados</span>
        <img src="https://example.com/icon.png" alt="Extrair">
      </div>
    `;
  
    // Adiciona evento de clique para ativar a extração
    button.onclick = () => {
      console.log("🔄 Extração de dados iniciada...");
      button.classList.add("active");
      setTimeout(() => {
        button.classList.remove("active");
        console.log("✅ Extração concluída!");
      }, 1500); // Simula um tempo de extração
    };
  
    // Adicionando o botão ao corpo da página
    document.body.appendChild(button);
  
    // Injetando os estilos do botão
    injectStyles();
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
        width: 50px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
      }
  
      #data-extraction-button .button-content {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
  
      #data-extraction-button img {
        width: 24px;
        height: 24px;
      }
  
      #data-extraction-button .tooltip {
        position: absolute;
        right: 60px;
        background: white;
        color: #002b80;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
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
  
      #data-extraction-button.active {
        background-color: #0051cc;
      }
    `;
    document.head.appendChild(style);
  }
  