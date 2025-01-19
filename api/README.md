# API - Plugin de Extração de Dados

## 📌 Visão Geral

Esta API foi desenvolvida para processar os dados enviados pelo **Plugin de Extração de Dados** e armazená-los no **MongoDB**. Para garantir a segurança e a eficiência no processamento dos dados, a API implementa regras de autenticação, limite de requisições e controle de acesso.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB Atlas**
- **Redis** (Rate Limiting)
- **JWT** (Autenticação via Token)
- **Winston** (Logging)
- **Jest** (Testes Unitários)

---

## 🛠️ Como Rodar a API
1️⃣ Instale as dependências
```bash
  npm install
```

2️⃣ Crie um arquivo .env na raiz do projeot e configure as variáveis de ambiente no arquivo
```bash
  PORT=
  MONGO_DB_NAME=
  MONGO_URI=
  REDIS_HOST=
  REDIS_PORT=
  JWT_SECRET=
  SWAGGER_SERVER_URL=
```

3️⃣ Inicie a API
```bash
  npm run dev
```

4️⃣ Acesse a documentação Swagger
```bash
http://localhost:3000/docs
```

## ✅ Testes
A API possui testes unitários cobrindo os principais fluxos de autenticação e coleta de dados.

#### Executar testes
```bash
  npm run test
```

## 🏗️ Arquitetura da API

A API foi desenvolvida seguindo boas práticas de arquitetura e padrões de projeto para garantir escalabilidade e manutenção fácil.

### 🔹 Clean Architecture

Utilizamos **Clean Architecture** para garantir **separação de responsabilidades** e **modularidade**.

**Camadas da Arquitetura:**
- `adapters/` → Controladores e Middlewares
- `infrastructure/` → Banco de Dados, Redis, Logger
- `usecases/` → Regras de negócio
- `shared/` → Configurações globais

Essa estrutura garante que a **lógica de negócio não dependa** de detalhes da infraestrutura, permitindo maior flexibilidade e testabilidade.

---

### 🔹 Ports & Adapters (Hexagonal Architecture)

Esse modelo permite que a API interaja com bancos de dados, serviços externos e interfaces de maneira desacoplada.

- **Ports (Interfaces):** Definem as regras de negócio (Use Cases).
- **Adapters:** Implementam como essas regras interagem com a infraestrutura (Controllers, Repositórios).

Isso facilita mudanças futuras, como **trocar MongoDB por PostgreSQL** sem impactar a lógica central da aplicação.

---
