# 🚀 Projeto Handtalk Challenge

## 📌 Descrição

Este projeto é um desafio técnico para a **Handtalk**, desenvolvido com **Clean Architecture**, **TDD**. Ele consiste em uma **API**, um **frontend** e um **plugin de extração de dados**, garantindo boas práticas de acessibilidade, performance e organização.

## 🏗️ Arquitetura

A estrutura do projeto é dividida em três principais diretórios:

- **`/api`** → Backend utilizando **Express, Node.js, TypeScript, MongoDB, Redis, Jest**.
- **`/page`** → Frontend utilizando **Vite, React, TypeScript, Styled Components** e **Storybook, Jest**.
- **`/plugin`** → Plugin de extração de dados em **Node.js + TypeScript, Jest**, responsável por capturar informações do usuário e enviá-las para a API.

## 📂 Estrutura do Projeto

```
/
├── api/       # Backend (Node.js + Express)
├── page/      # Frontend (Vite + React)
├── plugin/    # Plugin de extração de dados
└── README.md  # Documentação do projeto
```

## 📥 Instalação

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/rafaela-medina/web-plugin.git
cd web-plugin
```

### 2️⃣ Configurar Variáveis de Ambiente

Criar arquivos `.env` nas pastas **`api/`**, **`page/`** e **`plugin/`**, baseando-se nos exemplos **`.env.example`** disponíveis em cada diretório.

### 3️⃣ Instalar Dependências

```bash
cd api && npm install
cd ../page && npm install
cd ../plugin && npm install
```

## 🚀 Execução

### 🔹 Rodar Backend (API)

```bash
cd api
npm run dev
```

A API estará disponível em: `http://localhost:3000`
Acesse a documentação no SWAGGER: `http://localhost:3000/docs`

### 🔹 Rodar Frontend (Page)

```bash
cd page
npm run dev
```

A página estará disponível em: `http://localhost:5173`

## ✅ Testes

Para executar os testes unitários e de integração:

```bash
cd api && npm test
cd ../page && npm test
cd ../plugin && npm test
```

## 📡 API Endpoints

- **`POST:/api/v1/auth`** → Gera um token de autenticação baseado no domínio.
- **`POST:/api/v1/collect`** → Envia os dados extraídos para o banco (**requisição autenticada via Bearer Token**).
- **`GET:/api/v1/list`** →  Lista as últimas 20 extrações realizadas por um determinado token.

### 📌 Plugin de Extração de Dados

- Ativado via **botão fixo na tela**
- Captura:
  - Dispositivo (Android, iOS ou Desktop)
  - Sistema operacional
  - Origem (domínio da página)
  - Contagem de mudanças de tema
- Feedback acessível com **toast**.
- Implementação baseada em **TDD**.

### 📌 Frontend

- Segue **Atomic Design**.
- Botão para alternar entre **Dark Mode e Light Mode**.
- **Boas práticas de acessibilidade** (validação W3C).
- **Responsivo e performático**.
- **Storybook** documentando componentes.

### 📌 Backend

- **Rate Limiting com Redis**.
- **Logging com Winston**.
- **Testes de unidade e integração abrangentes**.
- **Autenticação via Bearer Token**.
- **Clean Architecture** e **TDD**.

Desenvolvido por **@rafaela-medina** 

