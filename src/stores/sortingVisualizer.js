import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import bubbleSort from "@/modules/SortingAlgorithms/bubbleSort.js";
import insertionSort from "@/modules/SortingAlgorithms/insertionSort.js";
import selectionSort from "@/modules/SortingAlgorithms/selectionSort.js";
import quickSort from "@/modules/SortingAlgorithms/quickSort.js";

export const useSortingVisualizerStore = defineStore('visualizer', () => {

    const array = ref([]);

    const minArrayValue = 20;
    const maxArrayValue = 600;
    const sorted = ref(false);

    const generateNewArray = (size) => {
        array.value = Array.from({ length: size }, () => ({
            number: Math.floor(Math.random() * (maxArrayValue - minArrayValue + 1)) + minArrayValue,
            currentlyComparing: false,
            alreadyCompared: false
        }));
        sorted.value = false;
    };

    const startSorting = async () => {
        await quickSort(array.value)
        // sorted.value = true;
    }

    return { array, generateNewArray, startSorting, sorted }
})
