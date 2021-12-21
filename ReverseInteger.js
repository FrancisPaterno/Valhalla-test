

function reverseInteger(value){
    let revInt = 0;
    while(value > 0){
        //console.log('val',value)
        const pop = value % 10
        //console.log(pop)
        revInt = revInt * 10 + pop
        value = Math.floor(value / 10)
    }
    return revInt
}

console.log(reverseInteger(123))
//console.log(Math.floor(123 % 10))