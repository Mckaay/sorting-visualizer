// store file (e.g., useSortingVisualizerStore.js)
import { ref } from 'vue';
import { defineStore } from 'pinia';
import { sortingAlgorithms, algorithmOptions, speedOptions } from "@/modules/SortingVisualizer/options.js";
import quickSort from "@/modules/SortingVisualizer/Algorithms/quickSort.js";

export const useSortingVisualizerStore = defineStore('visualizer', () => {
    const array = ref([]);
    const sorted = ref(false);
    const currentAlgorithmSelected = ref('bubble');
    const currentSpeedSelected = ref('slow');

    const generateNewArray = (size) => {
        array.value = Array.from({ length: size }, () => ({
            number: Math.floor(Math.random() * 580) + 20,
            currentlyComparing: false,
            alreadyCompared: false
        }));
        sorted.value = false;
    };

    const startSorting = async () => {
        if (!currentAlgorithmSelected.value) {
            console.error("No algorithm selected");
            return;
        }

        const algorithmCallback = sortingAlgorithms[currentAlgorithmSelected.value];
        const speed = speedOptions.find(option => option.value === currentSpeedSelected.value);
        const delay = speed ? speed.delay : 500;

        if (algorithmCallback) {
            await algorithmCallback(delay, array.value);
            sorted.value = true;
        } else {
            console.error("Invalid algorithm selected");
        }
    };

    return {
        currentAlgorithmSelected,
        speedOptions,
        currentSpeedSelected,
        algorithmOptions,
        array,
        generateNewArray,
        startSorting,
        sorted
    };
});
