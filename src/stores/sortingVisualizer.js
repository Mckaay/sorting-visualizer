import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import bubbleSort from "@/modules/SortingAlgorithms/bubbleSort.js";

export const useSortingVisualizerStore = defineStore('visualizer', () => {

    const array = ref([]);

    const minArrayValue = 20;
    const maxArrayValue = 600;

    const generateNewArray = (size) => {
        array.value = Array.from({ length: size }, () => ({
            number: Math.floor(Math.random() * (maxArrayValue - minArrayValue + 1)) + minArrayValue,
            currentlyCompared: false,
            alreadyCompared: false
        }));
    };

    const startSorting = () => {
        bubbleSort(array.value)
    }

    return { array, generateNewArray, startSorting }
})
