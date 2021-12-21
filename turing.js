const readLine = require('readline')

var calcPoints = function(ops){
    var resut = null
    const n = ops.length;
    const scores = []
    for(let i=0; i<n; i++){
        switch(ops[i]){
            case '+':
                scores.push(ops[i-1]+ ops[i-2])
                break
            case 'D':
                scores.push(ops[i-1]*2)
                break
            case 'C':
                scores.splice(i,1)
                break
            default:
                scores.push(ops[i])
        }
    }
    return scores
}

var ops = readLine().split(' ')
console.log(calcPoints(ops))