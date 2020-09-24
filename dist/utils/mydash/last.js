/**
 * Returns last element of passed array or undefined if:
 *  1. Argument is not array
 *  2. Arguments' length equals to 0
 * @param {array} list
 * @returns {*}
 */
export const last = function (list) {
    if (!Array.isArray(list))
        return undefined;
    return list[list.length - 1];
};
