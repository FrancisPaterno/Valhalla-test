console.log(topTwo([ 20, 34, 21, 87, 92]))
console.log(topTwo([1, 1, 0]))

function topTwo(numbers){
    let max1 = Number.MIN_VALUE
    let max2 = Number.MIN_VALUE

    for(let i=0; i<numbers.length; i++){
        if(numbers[i]> max1){
            max2 = max1
            max1 = numbers[i]
        }
        else if (max2 < numbers[i]){
            max2 = numbers[i]
        }
    }
    console.log('First maximum number:'+ max1)
    console.log('Second maximum number:' + max2)
}