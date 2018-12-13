let reduce = (arr, func, value) => {
    let acc = value
    return (function reduceInternal(arrInternal){
    let [head, ...tail] = arrInternal;
        if(arrInternal.length === 0){
            return acc
        }
    console.log(acc)
    acc = func(acc, head)
    return (acc, reduceInternal(tail))
    })(arr)
}

export default reduce; 