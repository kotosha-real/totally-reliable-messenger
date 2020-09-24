/**
 * Returns true if passed argument is empty or false if it's not
 * @param {*} value
 * @returns {boolean}
 */
export const isEmpty = function (value) {
    let empty = false;
    const type = typeof value;
    switch (type) {
        case 'string':
            empty = !value.length;
            break;
        case 'number':
            empty = value === 0 || value === 1;
            break;
        case 'boolean':
            empty = true;
            break;
        case 'undefined':
            empty = true;
            break;
        case 'object':
            if (value === null) {
                empty = true;
                break;
            }
            if (Array.isArray(value)) {
                empty = !value.length;
                break;
            }
            if (value.constructor === Object) {
                empty = !Object.keys(value).length;
                break;
            }
    }
    return empty;
};
