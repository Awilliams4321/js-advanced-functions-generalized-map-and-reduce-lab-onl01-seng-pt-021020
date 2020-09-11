// Add your functions here

function map(array, func) {
    return array.map(value => func(value))
}

function reduce(array, func, start) {
    let value = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1;

    for (; i < array.length; i++) {
        value = func(array[i], value)
    }

    return value;
}