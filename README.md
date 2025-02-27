# Test Packages

Esse é um repositório que contem vários pacotes uteis para o desenvolvimento.

## Instalação

``` npm install @avanti_suporte_jh1/pkg```

## Pacotes

- [Container](src/packages/core/doc)
- [StateManager](src/packages/core/doc)


# 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Configuração Inicial

1. Clone o repositório
```bash
git clone <repository-url>
```

2. Instale as dependências
```bash
npm install
```

3. Build do projeto
```bash
npm run build
```

### Scripts Disponíveis

- `npm run build` - Compila o projeto TypeScript
- `npm test` - Executa os testes
- `npm run lint` - Verifica a formatação do código

## 📝 Publicação

1. Login no NPM
```bash
npm login
```

2. Atualize a versão do pacote
```bash
npm version patch  # Para bugfix (1.0.0 -> 1.0.1)
npm version minor  # Para novas features (1.0.0 -> 1.1.0)
npm version major  # Para breaking changes (1.0.0 -> 2.0.0)
```

3. Publique o pacote
```bash
npm publish --access public
```