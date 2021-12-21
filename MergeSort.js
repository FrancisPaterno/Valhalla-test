function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }

    const middleIndex = Math.floor(arr.length/2)
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex, arr.length)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    let resultArr = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
        if(leftArr[leftIndex] < rightArr[rightIndex]){
            resultArr.push(leftArr[leftIndex])
            leftIndex += 1
        }
        else{
            resultArr.push(rightArr[rightIndex])
            rightIndex += 1
        }
    }

    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

let arr = [12,3,16,6,5,1]
const arr1 = [1,4,2,8,345,123,43,32,5643,63,123,43,2,5,1,234,92]
console.log(mergeSort(arr1))