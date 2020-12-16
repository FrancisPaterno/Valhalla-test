const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question('Enter array of integers:', arr=>{
    var arrInt = JSON.parse(arr)
    for(var i=arrInt.length-1; i>=0;i--){
       for(var j=1; j<=i; j++){
           if(arrInt[j-1] > arrInt[j]){
               var tmp = arrInt[j-1]
               arrInt[j-1] = arrInt[j]
               arrInt[j]=tmp
           }
       }
    }
    rl.close()
    console.log(arrInt);
});