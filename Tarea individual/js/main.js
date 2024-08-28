 function intersectArrays(array1, array2) {
    const result = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            result.push(array1[i]);
        }
    }

    return result;
}

const result = intersectArrays([1, 2, 3, 4, 5, 6], [2, 3, 4, 5]);
console.log(result); 