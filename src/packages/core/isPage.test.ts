import isPage from "./isPage";

describe("isPage", () => {
	it("Should return true if page match by bodyClass", () => {
		document.body.classList.add("home");

		const sut = new isPage();

		const res = sut.is(["home"]);

		expect(res).toBe(true);
	});

	it("Should return true if page match by meta", () => {
		const metaTag = document.createElement("meta");
		metaTag.setAttribute("name", "page");
		metaTag.setAttribute("content", "home");

		document.head.append(metaTag);

		const sut = new isPage();

		const res = sut.is(["home"]);

		expect(res).toBe(true);
	});

	it("Should return false if fail to match page by meta", () => {
		const metaTag = document.createElement("meta");
		metaTag.setAttribute("name", "page");
		metaTag.setAttribute("content", "category");

		document.head.append(metaTag);

		const sut = new isPage();

		const res = sut.is(["testee"]);

		expect(res).toBe(false);
	});

	it("Should return false if fail to match page by bodyClass", () => {
		document.body.classList.add("category");

		const sut = new isPage();

		const res = sut.is(["testeee"]);

		expect(res).toBe(false);
	});
});
