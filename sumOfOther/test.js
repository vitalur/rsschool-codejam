const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');

describe('sumOfOther', () => {
    it('1', () => {
        const array = sumOfOther([1, 2, 3, 4]);
        assert.deepEqual(array, [9, 8, 7, 6]);
    });

    it('2', () => {
        const array = sumOfOther([10, -11, 12, 13, -14, 15]);
        assert.deepEqual(array, [15, 36, 13, 12, 39, 10]);
    });

    it('3', () => {
        const array = sumOfOther([1]);
        assert.deepEqual(array, [0]);
    });

    it('4', () => {
        const array = sumOfOther([0, 0]);
        assert.deepEqual(array, [0, 0]);
    });

    it('5', () => {
        const array = sumOfOther([]);
        assert.deepEqual(array, []);
    });
});
