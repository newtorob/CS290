/**
 * Robert Newrton
 * 04/23/17
 */

function deepEqual (x,y) {
    if (x === y) {
        return true;
    }
    if (x == null || y == null) {
        return false;
    }

    if(typeof x === 'object' && typeof y === 'object') {
        var keys1 = Object.keys(x);
        var keys2 = Object.keys(y);
        if(keys1.length !== keys2.length) { //check length
            return false;
        }
        for (var i in x) {
            if (deepEqual(x[i], y[i]) === false) { //check if values are equal
                return false; //if not, return false
            }
        }

        return true; //if equal return true
    }
    return false;
}