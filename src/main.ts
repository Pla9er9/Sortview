import Algorithm from "./algorithms/algorithm";
import BubbleSort from "./algorithms/bubbleSort";
import SelectionSort from "./algorithms/selectionSort";
import Options from "./options";
import "@simonwep/pickr/dist/themes/monolith.min.css";
import { generateBars } from "./utils";
import setColorPickers from "./colorPickers";
import ShellSort from "./algorithms/shellSort";
import CocktailSort from "./algorithms/cocktailSort";
import InsertionSort from "./algorithms/insertionSort";

Options.saveOptionsToStorage();

let pauseTimeInput = document.getElementById(
    "pauseTimeInput"
) as HTMLInputElement;
pauseTimeInput.value = String(Options.PAUSE_TIME);
pauseTimeInput?.addEventListener("change", () => {
    if (pauseTimeInput) Options.PAUSE_TIME = Number(pauseTimeInput.value);
});

let arraySizeElement: HTMLElement | null = document.getElementById("arraySize");
if (arraySizeElement) arraySizeElement.innerText = String(Options.BAR_QUANTITY);

document.querySelectorAll(".algorithBtn").forEach((e) => {
    e.addEventListener("click", () => {
        algoSwitch(e.id);
    });
});

generateBars();

let algorithm: Algorithm;

function algoSwitch(name: string) {
    algorithm?.break();
    switch (name) {
        case "bubbleSortBtn":
            algorithm = new BubbleSort();
            break;
        case "selectionSortBtn":
            algorithm = new SelectionSort();
            break;
        case "shellSortBtn":
            algorithm = new ShellSort();
            break;
        case "cocktailSortBtn":
            algorithm = new CocktailSort();
            break;
        case "insertionSortBtn":
            algorithm = new InsertionSort();
            break;
    }
    algorithm.run();
}

setColorPickers();
