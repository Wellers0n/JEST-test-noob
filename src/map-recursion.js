const map = function(arr, func) {
    return (function mapInternal(arrInternal, counter) {
        if(arrInternal.length === 0){
            return []
        }
        const [head, ...tail] = arrInternal;
        return [func(head, counter, arr), ...(mapInternal(tail, ++counter))]
    })(arr, 0)
}

export default map;