const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter string:", word=>{
    var res = null;
    const len = word.length
    var gap = len;
    for(var i=0; i<len; i++){
        for(var j=0;j<len;j++){
            if(word[i] === word[j] && i !==j ){
                if(Math.abs(i-j) < gap){
                    gap = Math.abs(i-j);
                    res = word[j]
                    rl.close();
                    break
                }
               
            }
        }
    }
    rl.close()
    console.log(`\"${word}\" => \"${res}\"`)
});