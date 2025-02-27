import IRuler from "./IRuler";
declare global {
    interface Window {
        dataLayer: DataLayerObject[] | undefined;
    }
    interface DataLayerObject {
        pageCategory: string;
    }
}
export default class isPage implements IRuler {
    private identificacaoMetaPage;
    private classTagBody;
    private pageDataLayer;
    constructor();
    is(rules: string[]): boolean;
}
//# sourceMappingURL=isPage.d.ts.map