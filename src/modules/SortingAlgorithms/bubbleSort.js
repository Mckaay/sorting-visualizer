function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default async function bubbleSort(array) {
    let n = array.length;
    let y = 0;

    for (let i = 0; i < n; i++) {
        for (y = 0; y < n - 1 - i; y++) {
            array[y].currentlyCompared = true;
            array[y + 1].currentlyCompared = true;

            if (array[y].number > array[y + 1].number) {
                [array[y].number, array[y + 1].number] = [array[y + 1].number, array[y].number];
            }

            await delay(10);
            array[y].currentlyCompared = false;
            array[y + 1].currentlyCompared = false;
        }

        array[y].alreadyCompared = true;
    }

    return array;
}
