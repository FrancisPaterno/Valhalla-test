function solution(A){
    const arrDistinct = []
    for(let i=0; i<A.length; i++){
        if(arrDistinct.indexOf(A[i])===-1){
            arrDistinct.push(A[i])
        }
    }
    return arrDistinct.length
}

function solution2(A){
    const N = A.length-1
    const arrDistinct = []
    return solution2Helper(A, arrDistinct, N)
}
function solution2Helper(A, arrDistinct, N){
    if(A.length === 1) return 1
    if(N < 0) return 0

    let distinct = 0
    if(arrDistinct.indexOf(A[N])===-1){
        distinct = 1
        arrDistinct.push(A[N])
    }
 
   return distinct + solution2Helper(A, arrDistinct, N-1)
}

console.log(solution2([1,2,3]))
console.log(solution2([2,1,1,2,3,1]))