function solution(A){
    let counter = 0
    for(let i=0; i<A.length; i++){
        for(let j = i+1; j<A.length; j++){
            if(A[i] < A[j]) counter++
        }
    }
    return counter > 1000000000?-1:counter
}

console.log(solution([0,1,0,1,1]))