let reverse = (arr) => {
    if(arr.length === 0) {
        return []
    }
    console.log(arr)
    return [arr[arr.length - 1], ...reverse(arr.slice(0, -1))]
}
export default reverse;