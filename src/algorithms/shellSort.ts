import Algorithm from "./algorithm";

export default class ShellSort extends Algorithm {
    constructor() {
        super();
    }

    protected async start() {
        let arr = this.bars;

        const len = arr.length;
        let gap = Math.floor(len / 2);

        while (gap > 0) {
            if (this.stop) return;
            for (let i = gap; i < len; i++) {
                if (this.stop) return;
                let j = i;
                this.increaseArrayAcces(1);
                let current = arr[i].height;
                while (j - gap >= 0 && current < arr[j - gap].height) {
                    this.increaseComparison();
                    if (this.stop) return;
                    this.increaseArrayAcces(1);
                    arr[j].height = arr[j - gap].height;
                    await this.showSingleStep(j);
                    j = j - gap;
                }
                if (this.stop) return;
                this.increaseArrayAcces(1);
                arr[j].height = current;
                await this.showSingleStep(j);
            }
            gap = Math.floor(gap / 2);
        }
        return arr;
    }

    protected getName() {
        return "Bucket Sort";
    }
}
