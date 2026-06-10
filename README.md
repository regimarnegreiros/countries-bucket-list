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

Visualização em formato de lista detalhada de todos os países do mundo.

### 📍 Gerenciamento de Status

Classificação dos países em:

- ✅ Visitados
- ⬜ Não Visitados (Quero visitar)

### 📊 Painel de Estatísticas

- Percentual do mundo explorado
- Detalhamento por continente

### 🔎 Filtros e Busca Avançada

Filtragem instantânea por:

- Nome do país
- Região
- Status de visitação

### 🌐 Integração com APIs

Consumo automatizado de dados geográficos e informações atualizadas utilizando serviços como a **REST Countries API**.

---

## 🛠️ Tecnologias Utilizadas

O projeto segue boas práticas modernas de desenvolvimento.

### Front-end

- React.js
- HTML5
- CSS3

### Gerenciamento de Estado

- `useState`

### Consumo de API

- Fetch API

### Qualidade de Código

- ESLint
- Prettier

---

## 📂 Estrutura do Repositório

```text
.
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── routes/          # Rotas das páginas da aplicação
│   ├── services/        # Serviços e chamadas de API
│   └── styles/          # CSS global
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
└── viteconfig.json
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

### 4. Iniciar o Projeto

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
http://localhost:5173
```

---

## 📄 Licença

Este projeto está licenciado sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais informações.
