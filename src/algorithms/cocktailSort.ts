import Algorithm from "./algorithm";

export default class CocktailSort extends Algorithm {
    constructor() {
        super();
    }

    protected async start() {
        let arr = this.bars;
        let isSorted = true;

        while (isSorted) {
            for (let i = 0; i < arr.length - 1; i++) {
                if (this.stop) return;
                if (arr[i].height > arr[i + 1].height) {
                    this.increaseComparison();
                    this.increaseArrayAcces(3);
                    let temp = arr[i].height;
                    arr[i].height = arr[i + 1].height;
                    await this.showSingleStep(i);
                    arr[i + 1].height = temp;
                    await this.showSingleStep(i + 1);
                    isSorted = true;
                }
            }

            if (!isSorted) break;

            isSorted = false;

            for (let j = arr.length - 1; j > 0; j--) {
                if (this.stop) return;
                if (arr[j - 1].height > arr[j].height) {
                    this.increaseComparison();
                    this.increaseArrayAcces(3);
                    let temp = arr[j].height;
                    arr[j].height = arr[j - 1].height;
                    await this.showSingleStep(j);
                    arr[j - 1].height = temp;
                    await this.showSingleStep(j - 1);
                    isSorted = true;
                }
            }
        }
    }

    protected getName() {
        return "Cocktail Sort";
    }
}
