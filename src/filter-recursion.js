let filter = (arr, func) => {
    return (function filterInternal(arrayInternal, counter){
        let [head, ...tail] = arrayInternal
        console.log(func(head, counter, arr))

        return arrayInternal.length === 0
        ? []
        : (func(head, counter, arr)? [head] : []).concat(filterInternal(tail, counter + 1, ))
    })(arr, 0)
}

export default filter