function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function partition(array, low, high) {
    let pivotIndex = Math.floor((low + high) / 2);
    let pivotValue = array[pivotIndex].number;

    array[high].pivot = true;
    await delay(500);

    let i = low - 1;

    for (let j = low; j < high; j++) {
        array[j].leftPointer = true;
        array[high].rightPointer = true;

        if (array[j].number < pivotValue) {
            i++;
            [array[i].number, array[j].number] = [array[j].number, array[i].number];
        }

        await delay(500);
        array[j].leftPointer = false;
        array[high].rightPointer = false;
    }

    [array[i + 1].number, array[high].number] = [array[high].number, array[i + 1].number];
    array[high].pivot = false;
    return i + 1;
}

export default async function quickSort(array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pivotIndex = await partition(array, low, high);

        await quickSort(array, low, pivotIndex - 1);
        await quickSort(array, pivotIndex + 1, high);
    }
}
