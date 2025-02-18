function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function quickSort(ms, array, low = 0, high = null) {
    if (high === null) high = array.length - 1;

    if (low < high) {
        const pivotIndex = await partition(ms, array, low, high);
        await quickSort(ms, array, low, pivotIndex - 1);
        await quickSort(ms, array, pivotIndex + 1, high);
    }
    return array;
}

async function partition(ms, array, low, high) {
    const pivot = array[high];
    pivot.state = "pivot";
    await delay(ms);

    let i = low - 1;

    for (let j = low; j < high; j++) {
        array[j].state = "comparing";
        await delay(ms);

        if (array[j].number <= pivot.number) {
            i++;
            if (i !== j) {
                array[i].state = "swapping";
                array[j].state = "swapping";
                await delay(ms);
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        if (i >= 0) array[i].state = "default";
        array[j].state = "default";
    }

    if (i + 1 !== high) {
        array[high].state = "swapping";
        array[i + 1].state = "swapping";
        await delay(ms);
        [array[i + 1], array[high]] = [array[high], array[i + 1]];
    }

    array[i + 1].state = "sorted";

    for (let k = low; k <= high; k++) {
        if (k !== i + 1 && array[k].state !== "sorted") {
            array[k].state = "default";
        }
    }

    return i + 1;
}
