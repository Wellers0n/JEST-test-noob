let find = (arr, func) => {
    return (function findInternal(arrInternal, counter){
        let value
        let [head, ...tail] = arrInternal;
        return (arrInternal.length === 0) ? value 
        : (func(head, counter)) ? value = head 
        : findInternal(tail, counter + 1)
    })(arr, 0)
}

export default find