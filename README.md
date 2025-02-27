# Test Packages

Esse é um repositório que contem vários pacotes uteis para o desenvolvimento como checkout por exemplo.

## Instalação

### Opção 1: Usando a URL do GitHub

npm install git+https://github.com/avanti/pkg.git

ou

yarn add git+https://github.com/avanti/pkg.git

ou com SSH:

npm install git+ssh://git@github.com:avanti/pkg.git

yarn add git+ssh://git@github.com:avanti/pkg.git

### Opção 2: Formato abreviado

npm install avanti/pkg

ou 

yarn add avanti/pkg

## 4. Referência no [package.json](vscode-file://vscode-app/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) do projeto que usa o pacote

Após a instalação, o [package.json](vscode-file://vscode-app/usr/share/code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html) do projeto que consome o pacote ficará assim:

"dependencies": {

 "@avanti_suporte_jh1/pkg": "avanti/pkg"
}