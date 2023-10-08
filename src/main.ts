import Algorithm from "./algorithms/algorithm";
import BubbleSort from "./algorithms/bubbleSort";
import SelectionSort from "./algorithms/selectionSort";
import Pickr from '@simonwep/pickr';
import '@simonwep/pickr/dist/themes/monolith.min.css'; 

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


const arr = ["#defaultColorPicker", "#activeColorPicker", "#checkColorPicer"]

arr.forEach((e) => {
    Pickr.create({
        el: e,
        theme: 'monolith',
        components: {
            preview: true,
            opacity: true,
            hue: true,
    
            interaction: {
                hex: true,
                rgba: true,
                input: true,
                clear: true,
                save: true
            }
        }
    });
      
})