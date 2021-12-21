function sumNumbers(numbers){
    return (numbers/2) * (1+numbers)
}

function sumNumbersLoop(numbers){
    let total = 0;

    for(let i=1; i<=numbers; i++){
        total += i
    }
    return total
}
function sumNumbersRecursive(numbers){

    if(numbers < 1) return 0

    return numbers + sumNumbersRecursive(numbers-1)
}

console.log(sumNumbersRecursive(5))