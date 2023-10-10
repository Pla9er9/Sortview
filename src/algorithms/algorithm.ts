import Bar from "../bar";
import Options from "../options";
import { sleep, generateBars, removeAllBars } from "../utils";

export default abstract class Algorithm {
    protected bars: Bar[] = [];
    protected stop: boolean = false;
    protected comparison: number = -1;
    protected comparisonElement: HTMLElement | null =
        document.getElementById("comparisonElement");
    protected arrayAcces: number = -1;
    protected arrayAccesElement: HTMLElement | null =
        document.getElementById("arrayAcces");

    constructor() {
        removeAllBars();
        this.bars = generateBars();
        this.setName();
        this.increaseArrayAcces();
        this.increaseComparison();
    }

    protected abstract start(): void;
    protected abstract getName(): string;

    async run() {
        await this.start();
        if (this.stop) return;
        await this.check();
        await this.clear();
        await sleep(500);
    }

    protected increaseComparison() {
        this.comparison += 1;
        if (this.comparisonElement != undefined)
            this.comparisonElement.innerText = String(this.comparison);
    }

    protected increaseArrayAcces(value: number = 1) {
        this.arrayAcces += value;
        if (this.arrayAccesElement != undefined)
            this.arrayAccesElement.innerText = String(this.arrayAcces);
    }

    protected async showSingleStep(index: number) {
        this.bars[index].color = Options.activeColor;
        this.bars[index].reRender();
        await sleep(Options.PAUSE_TIME);
        this.bars[index].color = Options.defaultColor;
        this.bars[index].reRender();
    }

    async break() {
        this.stop = true;
    }

    protected async check() {
        for (let i = 0; i < this.bars.length; i++) {
            this.bars[i].color = Options.checkColor;
            this.bars[i].reRender();
            await sleep(10);
        }
    }

    protected async clear() {
        await sleep(200);
        for (let i = 0; i < this.bars.length; i++) {
            this.bars[i].color = Options.defaultColor;
            this.bars[i].reRender();
        }
    }

    private setName() {
        const algoNameElement = document.getElementById("algoName");
        if (algoNameElement) {
            algoNameElement.innerText = this.getName();
        }
    }
}
