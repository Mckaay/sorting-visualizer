export const generateRandomArrayOfNumbers = (size) => {
    return Array.from({length: size}, function () {
        return {
            number:  Math.random() * (100 - 1) + 1,
            state: "default",
        }
    });
}

export const checkIfArrayIsSorted = (array) => {
    let sorted = true;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            sorted = false;
            break;
        }
    }

    return sorted;
}