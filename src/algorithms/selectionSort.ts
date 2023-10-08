import Algorithm from "./algorithm";

export default class SelectionSort extends Algorithm {
    constructor() {
        super();
    }

    async start() {
        let arr = this.boxes;
        for (let i = 0; i < arr.length - 1; i++) {
            if (this.stop) return;
            let min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (this.stop) return;
                if (arr[j].height < arr[min].height) {
                    min = j;
                }
            }
            const tmp = arr[min].height;
            arr[min].height = arr[i].height;
            await this.showSingleStep(min);

            arr[i].height = tmp;
            await this.showSingleStep(i);
        }
    }
}
