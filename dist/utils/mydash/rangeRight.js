import { range } from './range';
/**
 * Returns @range function with @isRight equals to true
 * Possible signatures:
 *  1. rangeRight(end) — @start equals to 0, @step equals to 1
 *  2. rangeRight(start, end) — @step equals to 1
 *  3. rangeRight(start, end, step) — everything works as expected
 *  * signatures refer to @range function 'cause it works under the hood
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {function}
 */
export const rangeRight = function (start, end, step) {
    return range(start, end, step, true);
};
