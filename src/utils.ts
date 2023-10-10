import Box from "./bar";
import Options from "./options";

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

export function generateBars(): Box[] {
    let boxArray: Box[] = [];
    for (let i = 0; i < Options.BOX_QUANTITY; i++) {
        let random = getRandomNumber(Options.MAX_BOX_HEIGHT);
        let box = new Box(i, random * 10 + 100);
        boxArray.push(box);

        let div = document.createElement("div");
        div.classList.add("box");
        div.id = `box${i}`;
        Options.BOXES_HTML_ELEMENT?.appendChild(div);
        box.reRender();
    }
    return boxArray;
}

export function removeAllBars(): void {
    var child = Options.BOXES_HTML_ELEMENT?.lastElementChild;
    while (child) {
        Options.BOXES_HTML_ELEMENT?.removeChild(child);
        child = Options.BOXES_HTML_ELEMENT?.lastElementChild;
    }
}
