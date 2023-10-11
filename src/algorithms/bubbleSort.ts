import Algorithm from "./algorithm";

export default class BubbleSort extends Algorithm {
    constructor() {
        super();
    }

    protected async start() {
        let arr = this.bars;

        for (var i = 0; i < arr.length; i++) {
            if (this.stop) return;

            for (var j = 0; j < arr.length - i - 1; j++) {
                if (this.stop) return;
                this.increaseComparison();
                if (!this.stop && arr[j].height > arr[j + 1].height) {
                    var temp = arr[j].height;

                    this.increaseArrayAcces(3);

                    arr[j].height = arr[j + 1].height;
                    await this.showSingleStep(j);
                    arr[j + 1].height = temp;
                    await this.showSingleStep(j + 1);
                }
            }
        }
    }
    protected getName() {
        return "Bubble sort";
    }
}
