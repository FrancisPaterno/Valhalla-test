function insertionsort(array){
    const arr = array.slice()

    for(let i=1; i<arr.length; i++){
        let hole = i
        const value = arr[i]
        while(hole>0 && arr[hole-1]>value){
            arr[hole] = arr[hole-1]
            hole--
        }
        arr[hole] = value
    }
    return arr
}

let arr = [12,3,16,6,5,1]
console.log(insertionsort(arr))