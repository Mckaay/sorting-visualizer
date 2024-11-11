import { useSortingVisualizerStore } from "@/stores/sortingVisualizer.js";

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function insertionSort(ms, array) {
    const n = array.length;
    const visualizerStore = useSortingVisualizerStore();

    for (let i = 0; i < n - 1; i++) {
        array[i + 1].alreadyCompared = true;
        for (let y = i + 1; y > 0; y--) {
            if (!visualizerStore.currentlySorting) {
                return false;
            }

            array[y].currentlyComparing = true;
            array[y - 1].currentlyComparing = true;

            if (array[y].number >= array[y - 1].number) {
                await delay(ms);
                array[y].currentlyComparing = false;
                array[y - 1].currentlyComparing = false;
                if (i === n - 2) {
                    await delay(60);
                    array[y].alreadyCompared = true;
                }
                break;
            }

            if (array[y].number < array[y - 1].number) {
                [array[y].number, array[y - 1].number] = [array[y - 1].number, array[y].number];
            }

            await delay(ms);
            array[y].currentlyComparing = false;
            array[y - 1].currentlyComparing = false;

            if (i === n-2) {
                await delay(60);
                array[y].alreadyCompared = true;
            }
        }

        array[i + 1].alreadyCompared = false;
    }

    return array;
}
