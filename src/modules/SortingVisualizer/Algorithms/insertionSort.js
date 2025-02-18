function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function insertionSort(ms, array) {
    const n = array.length;

    for (let i = 1; i < n; i++) {
        let temporaryElement = array[i];
        temporaryElement.state = "comparing";
        await delay(ms);

        let y = i - 1;
        while (y >= 0 && array[y].number > temporaryElement.number) {
            array[y].state = "comparisonWinner";
            await delay(ms);
            array[y + 1] = array[y];
            array[y].state = "default";
            y--;
        }

        array[y + 1] = temporaryElement;
        array[y + 1].state = "swapping";
        await delay(ms);

        for (let j = 0; j <= i; j++) {
            array[j].state = "sorted";
        }
    }

    return array;
}
