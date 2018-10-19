function checkKeys(object, keysToCheck) {
    for (var keys in keysToCheck) {
        if (!object.hasOwnProperty(keysToCheck[keys])) {
            return false;
        }
    }
    return true;
}

module.exports = { checkKeys };