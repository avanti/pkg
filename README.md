# Packages

Este repositório contém vários pacotes úteis para o desenvolvimento, como o pacote de checkout, por exemplo.

## Instalação

### Opção 1: Usando a URL do GitHub

Você pode instalar o pacote diretamente do GitHub usando o seguinte comando:

**Usando npm:**
```bash
npm install git+https://github.com/avanti/pkg.git
```

**Usando yarn:**
```bash
yarn add git+https://github.com/avanti/pkg.git
```

**Ou via SSH:**
```bash
npm install git+ssh://git@github.com/avanti/pkg.git
```

```bash
yarn add git+ssh://git@github.com/avanti/pkg.git
```

### Opção 2: Formato Abreviado

Você também pode instalar o pacote usando um formato mais curto:

**Usando npm:**
```bash
npm install avanti/pkg
```

**Usando yarn:**
```bash
yarn add avanti/pkg
```

## Referência no `package.json` do Projeto

Após a instalação, o seu `package.json` ficará assim:

```json
"dependencies": {
  "@avanti_suporte/pkg": "avanti/pkg"
}
```