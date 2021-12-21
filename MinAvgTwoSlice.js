function solution(A){
    const N = A.length
    let minAvg = Number.MAX_VALUE
    let minIndex = 0

    for(let Q=N-1; Q>=0; Q--){
        
        for(let P=0; P<Q; P++){
            if(Q-P+1 >=2){
                console.log(A.slice(P,Q+1), Q-P+1)
                let sum = A.slice(P,Q+1).reduce((acc, el)=>{return acc+=el},0)
                let avg = sum/(Q-P+1)
                if(avg<minAvg){
                    minAvg = avg
                    minIndex = P
                }
            }
        }
        //console.log(minIndex, minAvg)
    }
    return minIndex
   
}
//console.log(solution([4,2,2,5,1,5,8]))
//console.log(solution([1,2]))
console.log(solution([-3,-5,-8,-4,-10]))