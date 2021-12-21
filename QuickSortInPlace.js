function quicksort(A, lo, hi){
    if(lo >= 0 && hi >= 0){
        if(lo < hi){
            const p = partition(A, lo, hi)
            quicksort(A, lo, p-1)
            quicksort(A, p+1, hi)
        }
    }
    return A
}

function partition(A, lo, hi){
    const pivot = A[hi]
    let i = lo-1

    for(let j=lo; j<=hi; j++){
        if(A[j] <= pivot){
            i++
            if(i !== j)
                [A[i], A[j]] = [A[j], A[i]]
        }
    }
    return i
}

const arr = [7,2,6,4,9,6,1]
const arr1 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,5,1,234,92]
console.log(quicksort(arr1, 0, arr1.length-1))