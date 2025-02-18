import {reactive, watch} from "vue";
import {checkIfArrayIsSorted, generateRandomArrayOfNumbers} from "@/helpers.js";
import bubbleSort from "@/modules/SortingVisualizer/Algorithms/bubbleSort.js";
import selectionSort from "@/modules/SortingVisualizer/Algorithms/selectionSort.js";
import insertionSort from "@/modules/SortingVisualizer/Algorithms/insertionSort.js";
import quickSort from "@/modules/SortingVisualizer/Algorithms/quickSort.js";

const state = reactive({
    array: [],
    arraySize: 10,
    speed: '100',
    algorithm: 'bubble',
    currentlySorting: false,
    sorted: false,
});

export function useSortingVisualizer() {
    watch(() => state.arraySize, () => {
        generateArray();
    });

    const generateArray = () => {
        state.sorted = false;
        state.array = generateRandomArrayOfNumbers(state.arraySize)
    }

    const sort = async () => {
        if (state.currentlySorting === true) {
            return;
        }

        state.currentlySorting = true;
        switch (state.algorithm) {
            case "bubble":
                await bubbleSort(state.speed, state.array);
                break;
            case "selection":
                await selectionSort(state.speed, state.array);
                break;
            case "insertion":
                await insertionSort(state.speed, state.array);
                break;
            case "quick":
                await quickSort(state.speed, state.array);
                break;
        }

        if (checkIfArrayIsSorted(state.array)) {
            state.sorted = true;
        }

        state.currentlySorting = false;
    }

    return {
        state,
        generateArray,
        sort,
    }
}