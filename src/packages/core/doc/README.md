# M3 Container

Esse pacote é ultilizado na base do seu projeto para gerenciar a inversão de dependencia por meio de services e para gerenciar a execução de certas classes por página.

## Guia de Uso

Para usar é necessário instanciar o Container passando seus components, configurações a serem injetadas e seus serviços.

Exemplo:
```js
import { Container, IsPage } from "@agenciam3/pkg";

const app = new Container({
	appName: "template",
	config,
	components: [
		Menu,
		Promocao,
		Minicart,
		MenuContents,
		Login,
		Newsletter,
		BottomNav,
		FixedHeader,
		ScrollToTop,
		AutoComplete,
        Prateleira,
        ProductImages
	],
	services: [PrateleiraService],
	pages: [
		{
			pageRefs: ["home"],
			components: [Home],
		},
		{
			pageRefs: ["categoria"],
			components: [Categoria],
		},
		{
			pageRefs: ["produto"],
            components: [Produto, ProductImages],
            services: [ProdutoService]
		},
		{
			pageRefs: ["erro"],
			components: [Erro],
		},
		{
			pageRefs: ["institucional"],
			components: [Institucional],
		},
    ],
    ruler: new IsPage();
});

```

Exemplo de uso no checkout:

```js
const m3Checkout = new Container({
	appName: "m3-checkout",
	components: [TopPrice, CheckoutImgResize, CheckoutTerms],
});

m3Checkout.start();
```

obs: Não de o nome de puro checkout porque oe quebrar o objeto global da vtex.
