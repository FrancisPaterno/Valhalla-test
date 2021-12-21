  function quicksort(array){

    if(array.length <=1)
        return array

    const pivot = array[array.length-1]
    const leftarr = []
    const rightarr = []

    for (const el of array.slice(0, array.length-1)){
        el > pivot? rightarr.push(el): leftarr.push(el)
    }

    return [...quicksort(leftarr), pivot, ...quicksort(rightarr)]
}

const arr = [7,2,6,4,9,6,1]
const arr1 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,5,1,234,92]
console.log(quicksort(arr))