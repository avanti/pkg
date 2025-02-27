import isPage from "./isPage";
import Container, { IContainerContext } from "./Container";

class ShelfService {
	constructor() {}

	doSomething() {
		return 1;
	}
}

describe("Container", () => {
	it("Should instantiate all Components", () => {
		let testNumber = 1;
		class Home {
			constructor() {
				testNumber += 1;
			}
		}

		class Product {
			constructor() {
				testNumber += 1;
			}
		}

		const sut = new Container({
			appName: "test",
			components: [Home, Product],
		});

		sut.start();

		expect(testNumber).toBe(3);
	});

	it("Should be able to get the service and execute it methods", () => {
		let testNumber = 0;
		class Home {
			private service: ShelfService | false;

			constructor(ctx: IContainerContext) {
				this.service = ctx.getService<ShelfService>(ShelfService.name);
				if (this.service) testNumber = this.service.doSomething();
			}
		}

		const sut = new Container({
			appName: "test",
			services: [ShelfService],
			components: [Home],
		});

		sut.start();

		expect(testNumber).toBe(1);
	});

	it("Should fail to get the service and execute it methods", () => {
		let testNumber = 0;
		class Home {
			private service: ShelfService | false;

			constructor(ctx: IContainerContext) {
				this.service = ctx.getService<ShelfService>(ShelfService.name);
				if (this.service) testNumber = this.service.doSomething();
			}
		}

		const sut = new Container({
			appName: "test",
			components: [Home],
		});

		sut.start();

		expect(testNumber).toBe(0);
	});

	it("Should execute certain components by PageRef", () => {
		let testNumber = 1;
		class Comp1 {
			constructor() {
				testNumber += 1;
			}
		}

		class Comp2 {
			constructor() {
				testNumber += 1;
			}
		}
		class Comp3 {
			constructor() {
				testNumber += 5;
			}
		}

		document.body.classList.add("Comps");

		const sut = new Container({
			appName: "test",
			pages: [
				{
					pageRefs: ["Comps"],
					components: [Comp1, Comp2],
				},
				{
					pageRefs: ["Testeee"],
					components: [Comp3],
				},
			],
			ruler: new isPage(),
		});

		sut.start();

		expect(testNumber).toBe(3);
	});
});
