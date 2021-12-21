function solution(A, K){
    const end = A.length
    if(end === K) return A

    let mid = (K>end)?K%end:K

    A1 = A.slice(end-mid,end)
    A2 = A.slice(0, end-mid)
    return [...A1,...A2]
}
console.log(solution([3,8,9,7,6],3))
console.log(7%5)