function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function selectionSort(ms,array) {
    let n = array.length;
    let y = 0;
    let minimumIndex = 0;

    for (let i = 0; i < n; i++) {
        let min = array[i];
        let swapIndex = i;
        min.state = "minimum";
        await delay(ms);

        for(y = i+1; y < n; y++) {
            array[y].state = "comparing";
            await delay(ms);
            array[y].state = "default";
            if (array[y].number < min.number) {
                array[y].state = "comparisonWinner";
                await delay(ms);
                min.state = "default";
                min = array[y];
                min.state = "minimum"
                minimumIndex = y;
                swapIndex = y;
            }
        }

        array[i].state = "swapping";
        array[swapIndex].state = "swapping";
        await delay(ms);
        [array[i], array[swapIndex]] = [array[swapIndex], array[i]];
        array[i].state = "default";
        array[swapIndex].state = "default";
        array[i].state = "sorted";
    }
    return array;
}
