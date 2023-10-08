import Options from "./options";

export default class Box {
    private boxId: number;
    height: number;
    color: string;

    constructor(boxId: number, randomHeight: number) {
        this.boxId = boxId;
        this.height = randomHeight;
        this.color = Options.defaultColor;
    }

    getHeightInPx(): string {
        return this.height + "px";
    }

    transform(height: number, color: string) {
        this.height = height;
        this.color = color;
        this.reRender();
    }

    reRender() {
        let div = document.getElementById(`box${this.boxId}`);
        if (div == null) return;
        div.style.background = this.color;
        div.style.height = this.getHeightInPx();
    }
}
