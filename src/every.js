let every = (arr, func) => {
   return (function everyInternal(arrInternal, counter){
        let [head, ...tail] = arrInternal;
        if(arrInternal.length === 0){
            return true
        }else{
            if(!func(head, counter)){
                return false
            }
            return everyInternal(tail, counter + 1)
        }

    })(arr, 0)
    
}

export default every