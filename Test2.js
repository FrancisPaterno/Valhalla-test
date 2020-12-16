const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter an array of integers:", arrInput=>{
    let arrInt = JSON.parse(arrInput);
    console.log(arrInt)
    let highest, lowest;
    for(var i=0; i<arrInt.length;i++){

        if(i===0){
            highest = arrInt[i]
            lowest = arrInt[i]
        }
        else{
            if(highest<arrInt[i]){
                highest = arrInt[i]
            }

            if(lowest>arrInt[i]){
                lowest = arrInt[i]
            }
        }
    }
    console.log('Highest:',highest)
    console.log('Lowest:',lowest)
    rl.close();
});