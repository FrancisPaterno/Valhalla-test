const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter an array of integers:",arr=>{
    let len = arr.length
    let arrNum = JSON.parse(arr)
    res = 'No'
    for(var i=0;i<len;i++){
        for(var j=0; j<len; j++){
            if(i !== j){
                if(i !==j && arrNum[i]+arrNum[j] === 8 ){
                    res='Yes'
                    rl.close();
                    break
                }
            }
        }
    }
    console.log(`${arrNum} Sum = 8 ${res}`);
    rl.close();
}); 
