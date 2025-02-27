import IRuler from "./IRuler";

declare global {
	interface Window {
		dataLayer: DataLayerObject[] | undefined;
	}

	interface DataLayerObject {
		pageCategory: string;
	}
}
/**
 *  Classe para verificar se estamos em uma das paginas
 *  que são passadas por argumento
 */

export default class isPage implements IRuler {
	private identificacaoMetaPage: string;
	private classTagBody: string[];
	private pageDataLayer: string;

	constructor() {
		const metaPage = document.querySelector('meta[name="page"]');
		this.identificacaoMetaPage = metaPage
			? metaPage.getAttribute("content") || ""
			: "";

		this.classTagBody = Array.from(document.body.classList);
		this.pageDataLayer = "";
		if (typeof window.dataLayer !== "undefined") {
			this.pageDataLayer = window.dataLayer[0]?.pageCategory;
		}
	}

	/**
	 * * @param {array} [args] um ou um array de strings contendo a palavra chave para identificar a pagina
	 * @return {Boolean} retorna true se um dos argumentos estiver na meta/bodyClass/tag
	 */

	is(rules: string[]): boolean {
		let is = false;

		rules.forEach((rule) => {
			if (
				this.identificacaoMetaPage.search(rule) >= 0 ||
				this.pageDataLayer === rule ||
				this.classTagBody.includes(rule)
			) {
				is = true;
			}
		});

		return is;
	}
}
