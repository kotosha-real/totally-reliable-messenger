/**
 * Returns true if @obj is Object or false elsewise
 * @param {object} obj
 * @returns {boolean}
 */
export const isObject = function (obj) {
    return obj && typeof obj === 'object' && !Array.isArray(obj);
};
