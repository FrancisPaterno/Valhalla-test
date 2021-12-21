function sumArr(array){

    return array.reduce(function(acc, cur){
        return acc += cur
    }, 0)
}


function sumArrRecursive(array){
    if(array.length<2) return array

    const midIndex = Math.floor(array.length/2)
    const leftArr = array.slice(0, midIndex)
    const rightArr = array.slice(midIndex, array.length)
    return sumNumber(sumArrRecursive(leftArr) , sumArrRecursive(rightArr))
}

function sumNumber(leftArr, rightArr){
    let sum = 0
    for(let i=0; i<leftArr.length; i++){
        sum += leftArr[i]
    }
    for(let i=0; i<rightArr.length; i++){
        sum += rightArr[i]
    }
    return [sum]
}


console.log(sumArrRecursive([7,6,5,4,3,2,1,5,6,7,8,9,7,8,4,5,2,3,1,2,3,4,5,6,5,4,5,6,5,6,5,7,8,9,8,7,6,6,5,5,6,7,7,7]))