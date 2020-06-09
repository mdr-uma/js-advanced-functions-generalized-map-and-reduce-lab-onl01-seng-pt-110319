function map(sourceArray, func) {
    let result = []
    for (let i = 0; i < sourceArray.length; i++) {
        let element = sourceArray[i]
        result.push(func(element))
    }
    return result;
}

function reduce(sourceArray, func, startingPoint = 0) {
    let result = (!!startingPoint) ? startingPoint : sourceArray[0]
    let i = (!!startingPoint) ? 0 : 1
    for (i; i < sourceArray.length; i++) {
        result = func(sourceArray[i], result)
    }
    return result;
}