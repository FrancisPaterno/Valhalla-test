function solution(A){
    const pairMap = new Map

    for(i in A){
        if(pairMap.has(A[i])){
            pairMap.set(A[i], pairMap.get(A[i])+1)
        }
        else{
            pairMap.set(A[i], 1)
        } 
    }

    for(const [key, value] of pairMap.entries()){
        if(value === 1) return key
    }
}

function solution2(A){
    let pairStack = []

    for(i in A){
        if(pairStack.indexOf(A[i]) === -1){
            pairStack.push(A[i])
            
        }
        else pairStack.splice(pairStack.indexOf(A[i]),1)
    }
    return (pairStack.length === 1)?  pairStack[0]:-1
}

function solution3(A){
   for(i in A){
      const j = A.indexOf(A[i], parseInt(i))
      if(j === -1){
          return A[i]
      }
   }
   return -1
}

console.log(solution3([9,3,9,3,9,7,9]))
