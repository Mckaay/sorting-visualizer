function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function bubbleSort(ms, array) {
    let n = array.length;
    let y = 0;

    for (let i = 0; i < n; i++) {
        for (y = 0; y < n - 1 - i; y++) {
            array[y].state = "comparing";
            array[y+1].state = "comparing";
            await delay(ms);

            if (array[y].number > array[y + 1].number) {
                array[y].state = "comparisonWinner";
                await delay(ms);
                array[y].state = "swapping";
                array[y+1].state = "swapping";
                await delay(ms);
                [array[y], array[y + 1]] = [array[y + 1], array[y]];
            } else {
                array[y+1].state = "comparisonWinner";
            }

            await delay(ms);
            array[y].state = "default";
            array[y + 1].state = "default";
        }

        array[n - 1 - i].state = "sorted"
    }

    return true;
}