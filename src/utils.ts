import Bar from "./bar";
import Options from "./options";

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

export function generateBars(): Bar[] {
    let barArray: Bar[] = [];
    for (let i = 0; i < Options.BAR_QUANTITY; i++) {
        let random = getRandomNumber(Options.MAX_BAR_HEIGHT);
        let bar = new Bar(i, random * 10 + 100);
        barArray.push(bar);

        let div = document.createElement("div");
        div.classList.add("bar");
        div.id = `bar${i}`;
        Options.BARS_HTML_ELEMENT?.appendChild(div);
        bar.reRender();
    }
    return barArray;
}

export function removeAllBars(): void {
    var child = Options.BARS_HTML_ELEMENT?.lastElementChild;
    while (child) {
        Options.BARS_HTML_ELEMENT?.removeChild(child);
        child = Options.BARS_HTML_ELEMENT?.lastElementChild;
    }
}
