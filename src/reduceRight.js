let reduceRight = (arr, func, value) => {
    let acc = value;
    // console.log(arr.length); 
    for (let i = arr.length; i--;) {
        console.log(i)
        acc = func(acc, arr[i])
    }
    return acc
}

export default reduceRight   