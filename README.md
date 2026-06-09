# 🌍 Countries Bucket List

Uma aplicação moderna e interativa para gerenciar sua lista de países visitados e planejar suas próximas aventuras pelo mundo.

---

## 📋 Índice

1. [Sobre o Projeto](#-sobre-o-projeto)
2. [Funcionalidades Principais](#-funcionalidades-principais)
3. [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
4. [Estrutura do Repositório](#-estrutura-do-repositório)
5. [Como Executar o Projeto](#️-como-executar-o-projeto)
6. [Licença](#-licença)

---

## 📑 Sobre o Projeto

O **Countries Bucket List** é um sistema desenvolvido para entusiastas de viagens que desejam catalogar suas experiências internacionais.

A aplicação permite:

- Mapear os países já visitados;
- Marcar destinos dos sonhos;
- Visualizar estatísticas consolidadas;
- Acompanhar o progresso de exploração por continente e globalmente.

---

## 🚀 Funcionalidades Principais

### 🌎 Mapeamento Global Interativo

Visualização gráfica ou em formato de lista detalhada de todos os países do mundo.

### 📍 Gerenciamento de Status

Classificação dos países em:

- ✅ Visitados
- ⭐ Quero Visitar (Bucket List)
- ⬜ Não Visitados

### 📊 Painel de Estatísticas

- Percentual do mundo explorado
- Detalhamento por continente
- Gráficos e indicadores visuais

### 🔎 Filtros e Busca Avançada

Filtragem instantânea por:

- Nome do país
- Região
- Idioma
- Moeda
- Status de visitação

### 🌐 Integração com APIs

Consumo automatizado de dados geográficos e informações atualizadas utilizando serviços como a **REST Countries API**.

---

## 🛠️ Tecnologias Utilizadas

O projeto segue boas práticas modernas de desenvolvimento.

### Front-end

- React.js
- Next.js
- TypeScript
- HTML5
- CSS3

### Estilização

- Tailwind CSS
- Styled Components
- Dark Mode

### Gerenciamento de Estado

- Context API
- Redux Toolkit

### Consumo de API

- Axios
- Fetch API

### Qualidade de Código

- ESLint
- Prettier
- Husky

---

## 📂 Estrutura do Repositório

```text
.
├── .github/             # Workflows do GitHub Actions e modelos de PR
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/          # Mídias e estilos globais
│   ├── components/      # Componentes reutilizáveis
│   ├── hooks/           # Custom Hooks
│   ├── pages/           # Páginas da aplicação
│   ├── services/        # Serviços e chamadas de API
│   ├── store/           # Estado global
│   ├── types/           # Interfaces e tipos TypeScript
│   └── utils/           # Funções utilitárias
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

Certifique-se de possuir instalado:

- Git
- Node.js
- npm ou Yarn

### 1. Clonar o Repositório

```bash
git clone https://github.com/regimarnegreiros/countries-bucket-list.git
```

### 2. Entrar na Pasta do Projeto

```bash
cd countries-bucket-list
```

### 3. Instalar Dependências

Com npm:

```bash
npm install
```

Ou com Yarn:

```bash
yarn install
```

### 4. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example`:

```bash
cp .env.example .env.local
```

Preencha as variáveis necessárias.

### 5. Iniciar o Projeto

Com npm:

```bash
npm run dev
```

Ou com Yarn:

```bash
yarn dev
```

Acesse:

```text
http://localhost:3000
```

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.
