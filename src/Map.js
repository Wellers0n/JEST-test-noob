export default function(arr, func){
 let newArr = [];

 if(!Array.isArray(arr)){
   throw new TypeError('')
 }
 if(typeof func !== 'function'){
   throw new TypeError("erro, esse params deve ser um function")
 }

 for(let i = 0; i < arr.length; i++){
   newArr.push(func(arr[i], i, arr));
 }
 return newArr
}