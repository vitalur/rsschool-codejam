function sumOfOther(array) {
    let sum = array.reduce(function(next, cur) {return next + cur;});
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(sum - array[i]);
    }
    return newArray;
}