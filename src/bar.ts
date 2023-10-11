import Options from "./options";

export default class Bar {
    barId: number;
    height: number;
    color: string;

    constructor(barId: number, randomHeight: number) {
        this.barId = barId;
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
        let div = document.getElementById(`bar${this.barId}`);
        if (div == null) return;
        div.style.background = this.color;
        div.style.height = this.getHeightInPx();
    }
}
