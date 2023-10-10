import Algorithm from "./algorithm";

export default class InsertionSort extends Algorithm {
    constructor() {
        super();
    }

    protected async start() {
        let arr = this.bars;
        for (let i = 1; i < arr.length; i++) {
            if (this.stop) return;
            this.increaseArrayAcces();
            let current = arr[i].height;

            let j = i - 1;

            while (j > -1 && current < arr[j].height) {
                if (this.stop) return;
                this.increaseComparison();
                this.increaseArrayAcces();
                arr[j + 1].height = arr[j].height;
                await this.showSingleStep(j + 1);
                j--;
            }
            if (this.stop) return;
            this.increaseArrayAcces();
            arr[j + 1].height = current;
            await this.showSingleStep(j + 1);
        }
    }

    protected getName() {
        return "Insertion Sort";
    }
}
