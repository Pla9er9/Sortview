import Box from "../box";
import Options from "../options";
import { sleep, generateBoxes, removeAllBoxes } from "../utils";

abstract class Algorithm {
    protected boxes: Box[] = [];
    protected stop: boolean = false;

    constructor() {
        removeAllBoxes();
        this.boxes = generateBoxes();
    }

    protected abstract start(): void;

    async run() {
        await this.start();
        if (this.stop) return;
        await this.check();
        await this.clear();
        await sleep(500);
    }

    protected async showSingleStep(index: number) {
        this.boxes[index].color = Options.activeColor;
        this.boxes[index].reRender();
        await sleep(Options.PAUSE_TIME);
        this.boxes[index].color = Options.defaultColor;
        this.boxes[index].reRender();
    }

    async break() {
        this.stop = true;
    }

    protected async check() {
        for (let i = 0; i < this.boxes.length; i++) {
            this.boxes[i].color = Options.checkColor;
            this.boxes[i].reRender();
            await sleep(10);
        }
    }

    protected async clear() {
        await sleep(200);
        for (let i = 0; i < this.boxes.length; i++) {
            this.boxes[i].color = Options.defaultColor;
            this.boxes[i].reRender();
        }
    }
}

export default Algorithm;
