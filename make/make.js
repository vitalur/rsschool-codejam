module.exports = function make(...cur_num) {
    let res = 0;
    for (let i = 0; i < cur_num.length; i++) {
        res = sum(res, cur_num[i]);
    }
    return function(...next_num) {
        if (typeof next_num[0] === 'function') {
            return res;
        }
        for (let i = 0; i < next_num.length; i++) {
            res = sum(res, next_num[i]);
        }
        return make(res);
    }
}
function sum (a, b) {return a + b;}