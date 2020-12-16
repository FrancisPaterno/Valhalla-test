const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter some words:", words=>{
    let arrStr = words.split(' ')
    let reverseStr = '';
    for(var i=arrStr.length-1; i>=0; i--){
        reverseStr += `${arrStr[i]} `
    }
    console.log(reverseStr)
    rl.close();
});