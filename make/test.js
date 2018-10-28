const assert = require('assert');
const make = require('./make.js');

function sum (a, b) {return a + b;}

describe('make', () => {
    it('1', () => {
        const array = make(15)(34, 21, 666)(41)(sum);
        assert.deepEqual(array, 777);
    });

    it('2', () => {
        const array = make(15, 20)(34, 21, 666)(41, 3)(sum);
        assert.deepEqual(array, 800);
    });

    it('3', () => {
        const array = make(10)(10)(10)(sum);
        assert.deepEqual(array, 30);
    });

    it('4', () => {
        const array = make(10)(sum);
        assert.deepEqual(array, 10);
    });

    it('5', () => {
        const array = make()()()(sum);
        assert.deepEqual(array, 0);
    });
});
