function solution(X, A){
    const leaves = []
    for(i=1; i<=X; i++){
        leaves.push(i)
    }

    for(j in A){
        const ind = leaves.indexOf(A[j])
        if(ind !== -1){
            leaves.splice(ind,1)
            if(leaves.length ===0) return parseInt(j)
        }
    }
    return -1
}

function solution2(X,A){
    const leavesSet = new Set()
    for(let i=0; i< A.length; i++){
        if(!leavesSet.has(A[i])){
            leavesSet.add(A[i])
            if(leavesSet.size == X) return i
        }
    }
    return -1
}

console.log(solution2(5, [1,3,1,4,2,3,5,4]))