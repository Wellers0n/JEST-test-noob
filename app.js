let map = (arr, func) => {
    let newArr = []
    for (let i = arr.length; i--;) {
        newArr.push(func(arr[i]))
    }
    return newArr;
}

let map2 = (arr, ...params) => {return map(arr, ...params)}

console.log(map2([1,2], (item) => item))