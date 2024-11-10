function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function partition(ms, array, low, high) {
    console.log(ms);
    let pivotValue = array[high].number;

    array[high].pivot = true;
    await delay(ms);

    let i = low - 1;

    for (let j = low; j < high; j++) {
        array[j].leftPointer = true;
        array[high].rightPointer = true;

        if (array[j].number < pivotValue) {
            i++;
            [array[i].number, array[j].number] = [array[j].number, array[i].number];
        }

        await delay(ms);
        array[j].leftPointer = false;
        array[high].rightPointer = false;
    }

    [array[i + 1].number, array[high].number] = [array[high].number, array[i + 1].number];
    array[high].pivot = false;
    return i + 1;
}

export default async function quickSort(ms,array, low = 0, high = array.length - 1) {
    if (low < high) {
        let pivotIndex = await partition(ms,array, low, high);

        await quickSort(ms, array, low, pivotIndex - 1);
        await quickSort(ms, array, pivotIndex + 1, high);
    }
}
