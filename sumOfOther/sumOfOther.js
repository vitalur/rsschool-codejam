module.exports = function sumOfOther(array) {
  if (array.length === 0) { return []; }
  const sum = array.reduce(function calculate(next, cur) { return next + cur; });
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    newArray.push(sum - array[i]);
  }
  return newArray;
};
