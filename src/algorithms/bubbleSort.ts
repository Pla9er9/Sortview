import Algorithm from "./algorithm";

class BubbleSort extends Algorithm {
    constructor() {
        super();
    }

    async start() {
        let arr = this.boxes;

        for (var i = 0; i < arr.length; i++) {
            if (this.stop) this.break;

            for (var j = 0; j < arr.length - i - 1; j++) {
                if (!this.stop && arr[j].height > arr[j + 1].height) {
                    var temp = arr[j].height;

                    arr[j].height = arr[j + 1].height;
                    await this.showSingleStep(j);

                    arr[j + 1].height = temp;
                    // await this.showSingleStep(j + 1);
                }
            }
        }
    }
}

export default BubbleSort;
