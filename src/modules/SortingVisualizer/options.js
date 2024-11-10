// options.js
import bubbleSort from "@/modules/SortingVisualizer/Algorithms/bubbleSort.js";
import insertionSort from "@/modules/SortingVisualizer/Algorithms/insertionSort.js";
import quickSort from "@/modules/SortingVisualizer/Algorithms/quickSort.js";
import selectionSort from "@/modules/SortingVisualizer/Algorithms/selectionSort.js";

export const sortingAlgorithms = {
    bubble: bubbleSort,
    selection: selectionSort,
    insertion: insertionSort,
    quick: quickSort,
};

export const algorithmOptions = [
    { value: 'bubble', name: 'Bubble Sort' },
    { value: 'selection', name: 'Selection Sort' },
    { value: 'insertion', name: 'Insertion Sort' },
    { value: 'quick', name: 'Quick Sort' }
];

export const speedOptions = [
    { value: 'slow', name: 'Slow', delay: 100 },
    { value: 'medium', name: 'Medium', delay: 50 },
    { value: 'fast', name: 'Fast', delay: 10 }
];
