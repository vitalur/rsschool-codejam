const assert = require('assert');
const recursion = require('./recursion.js');

describe('recursion', () => {
  it('1', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70,99,110,130]]);
  });

  it('2', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120}};
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90, 120], [70,99]]);
  });

  it('3', () => {
    const tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}}};
    const array = recursion(tree);
    assert.deepEqual(array, [[100], [90], [70,99]]);
  });

  it('4', () => {
    const tree = {"value":100};
    const array = recursion(tree);
    assert.deepEqual(array, [[100]]);
  });

  it('5', () => {
    const tree = {};
    const array = recursion(tree);
    assert.deepEqual(array, [[]]);
  });
});
