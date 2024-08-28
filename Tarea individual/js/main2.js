function shorLength(words) {
    return words.sort(function(a, b) {
        return b.length - a.length;
    });
}

const result = shorLength(["short", "longer", "longest"]);
console.log(result);