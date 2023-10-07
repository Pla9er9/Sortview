import Algorithm from "./algorithms/algorithm";
import BubbleSort from "./algorithms/bubbleSort";
import SelectionSort from "./algorithms/selectionSort";

document.getElementById("bubbleSortBtn")?.addEventListener("click", bubbleSort);
document
    .getElementById("selectionSortBtn")
    ?.addEventListener("click", selectionSort);

let algorithm: Algorithm = new BubbleSort();

function bubbleSort() {
    algorithm.break();
    algorithm = new BubbleSort();
    runSelectedAlgorithm();
}

function selectionSort() {
    algorithm.break();
    algorithm = new SelectionSort();
    runSelectedAlgorithm();
}

function runSelectedAlgorithm() {
    algorithm.run();
}
