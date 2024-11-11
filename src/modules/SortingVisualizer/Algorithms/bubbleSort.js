import {useSortingVisualizerStore} from "@/stores/sortingVisualizer.js";
import {ref} from "vue";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function bubbleSort(ms,array) {
    let n = array.length;
    let y = 0;
    const visualizerStore = useSortingVisualizerStore()

    for (let i = 0; i < n; i++) {
        for (y = 0; y < n - 1 - i; y++) {
            if (!visualizerStore.currentlySorting) {
                return false;
            }
            array[y].currentlyComparing = true;
            array[y + 1].currentlyComparing = true;

            if (array[y].number > array[y + 1].number) {
                [array[y].number, array[y + 1].number] = [array[y + 1].number, array[y].number];
            }

            await delay(ms);
            array[y].currentlyComparing = false;
            array[y + 1].currentlyComparing = false;
        }

        array[y].alreadyCompared = true;
    }

    return true;
}
