// store file (e.g., useSortingVisualizerStore.js)
import {computed, onMounted, ref, watch} from 'vue';
import { defineStore } from 'pinia';
import { sortingAlgorithms, algorithmOptions, speedOptions } from "@/modules/SortingVisualizer/options.js";
import quickSort from "@/modules/SortingVisualizer/Algorithms/quickSort.js";

export const useSortingVisualizerStore = defineStore('visualizer', () => {
    const array = ref([]);
    const arraySize = ref(20);
    const sorted = ref(false);
    const currentAlgorithmSelected = ref('bubble');
    const currentSpeedSelected = ref('slow');
    const currentlySorting = ref(false);

    const barWidth = computed(() => {
        const barContainerWidth = 1200;
        const gapSpace = (arraySize.value - 1) * 8;

        return barWidth.value = (barContainerWidth - gapSpace) / arraySize.value;
    })

    const generateNewArray = () => {
        array.value = [];

        array.value = Array.from({ length: arraySize.value }, () => ({
            number: Math.floor(Math.random() * 580) + 20,
            currentlyComparing: false,
            alreadyCompared: false
        }));
        sorted.value = false;
    };

    generateNewArray(arraySize.value);

    const startSorting = async () => {
        if (!currentAlgorithmSelected.value) {
            console.error("No algorithm selected");
            return;
        }

        const algorithmCallback = sortingAlgorithms[currentAlgorithmSelected.value];
        const speed = speedOptions.find(option => option.value === currentSpeedSelected.value);
        const delay = speed ? speed.delay : 500;

        if (algorithmCallback) {
            currentlySorting.value = true;
            sorted.value = await algorithmCallback(delay, array.value);
            currentlySorting.value = false;
        } else {
            console.error("Invalid algorithm selected");
        }
    };

    return {
        array,
        arraySize,
        algorithmOptions,
        speedOptions,
        currentAlgorithmSelected,
        currentSpeedSelected,
        sorted,
        currentlySorting,
        barWidth,
        generateNewArray,
        startSorting
    };
});
