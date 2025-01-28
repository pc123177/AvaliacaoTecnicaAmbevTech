# Projeto de Testes Automatizados com Cypress

Este repositório contém testes automatizados E2E para o frontend e API da aplicação Serverest.

- **Frontend:** [https://front.serverest.dev/](https://front.serverest.dev/)  
- **API:** [https://serverest.dev/](https://serverest.dev/)

---

## Pré-requisitos

Antes de começar, certifique-se de ter as ferramentas abaixo instaladas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## Instalação

1. Clone o repositório
2. Acesse o repositorio do projeto
3. Instale as dependências:
   ```bash
   npm install
   ```


## Executando os Testes
1. Abra a interface interativa do Cypress:
   ```bash
   npx cypress open
   ```
2. Na interface do Cypress, você pode escolher:
   - **Testes Frontend:** Navegue até `cypress/e2e/frontend/`
   - **Testes de API:** Navegue até `cypress/e2e/api/`

3. Clique no teste desejado para rodá-lo.


## 📁 Estrutura do Projeto

```
├── cypress/
│   ├── e2e/
│   │   ├── api/        # Testes de API
│   │   └── frontend/   # Testes de Frontend
│   ├── fixtures/       # Arquivos de dados para testes
│   ├── support/        # Comandos e configurações personalizadas
│   └── plugins/        # Plugins do Cypress
└── cypress.config.js   # Configuração do Cypress
```