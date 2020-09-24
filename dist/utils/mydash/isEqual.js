export const isEqual = function (oldOptions, newOptions) {
    if (oldOptions === newOptions)
        return true;
    if (typeof oldOptions != 'object' ||
        typeof newOptions != 'object' ||
        oldOptions == null ||
        newOptions == null)
        return false;
    let keysOld = Object.keys(oldOptions);
    let keysNew = Object.keys(newOptions);
    if (keysOld.length != keysNew.length)
        return false;
    for (let key of keysOld) {
        if (!keysNew.includes(key))
            return false;
        if (typeof oldOptions[key] === 'function' || typeof newOptions[key] === 'function') {
            if (oldOptions[key].toString() != newOptions[key].toString())
                return false;
        }
        else {
            if (!isEqual(oldOptions[key], newOptions[key]))
                return false;
        }
    }
    return true;
};
