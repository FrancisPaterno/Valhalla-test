function solution(A){
    let sum = 0
    for(let i = 0; i<= A.length; i++){
        sum += i
    }
    
    for(let j=0; j<A.length; j++){
        sum = sum-A[j]
    }
    return sum===0? 1:0
}

function solution2(A){
    let maxN = Math.max(...A)

    if(maxN !== A.length) return 0

    let sum = 0
    for(let i=1; i<=maxN; i++){
        sum += i
    }

    for(let j=0; j<A.length; j++){
        if(A[j] <=0) return 0
        sum -=A[j]
    }
    return sum===0?1:0
}
console.log(solution2([4,1,3,2]))