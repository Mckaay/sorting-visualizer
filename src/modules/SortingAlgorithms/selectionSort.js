function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function selectionSort(array) {
    let n = array.length;
    let y = 0;

    let minimumIndex = 0;

    for (let i = 0; i < n; i++) {
        let min = array[i].number;
        let swapIndex = i;

        for(y = i+1; y < n; y++) {
            array[y].currentlyComparing = true;
            array[y - 1].currentlyComparing = true;

            await delay(50);
            array[y].currentlyComparing = false;
            array[y - 1].currentlyComparing = false;
            if (array[y].number < min) {
                min = array[y].number;
                array[minimumIndex].currentMinimum = false;
                array[y].currentMinimum = true;
                minimumIndex = y;
                swapIndex = y;
            }
        }
        [array[i].number, array[swapIndex].number] = [array[swapIndex].number, array[i].number];
        array[minimumIndex].currentMinimum = false;
        array[i].alreadyCompared = true;

    }
    return array;
}