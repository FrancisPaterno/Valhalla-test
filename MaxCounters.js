 function solution(N,A){
    const counters = new Array(N)
    setMaxCounters(counters, 0)

    for(let K=0; K<A.length;K++){
        if(A[K] === N+1){
            const maxCounter = Math.max(...counters)
            setMaxCounters(counters, maxCounter)
        }
        else counters[A[K]-1]+=1
    }
     return counters
 }

 function setMaxCounters(counter, maxValue){
     for(let i=0; i<counter.length; i++){
        counter[i] = maxValue
     }
 }

 console.log(solution(5,[3,4,4,6,1,4,4]))