function solution(N){
    let rightSum = N.slice(1, N.length).reduce(reducer)
    let leftSum = N[0]
    let minDiff = Number.MAX_VALUE
    for(let i=1; i<N.length; i++){
        let diff = Math.abs(leftSum-rightSum)
        if(diff < minDiff ) minDiff = diff
        leftSum += N[i]
        rightSum -= N[i]
    }
    return minDiff
}

const reducer =(sum, cur)=>sum + cur

console.log(solution([3,1,2,4,3]))