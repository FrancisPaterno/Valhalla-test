function solution(A, B, K){
    let counter = 0
    for(let i=A; i<=B;i++){
        if(i%K===0) counter++
    }
    return counter
}


function solution2(A, B, K){
    let N = []
    if(K===1) return B-A

    if(B===K) return 1

    for(let i=A; i<=B;i++){
       N.push(i)
    }
    return modHelper(N,K)
}

function modHelper(N, K){
    if(N.length<2){
       return N[0]%K===0?1:0
    }
    const mid = Math.floor(N.length/2)
    const N1 = N.slice(0, mid)
    const N2 = N.slice(mid, N.length)
    return modHelper(N1,K) + modHelper(N2,K)
}

function solution3(A, B, K){
    if(B<K) return 0

    if(B-A === 0) return Math.ceil(B/K)

    return  Math.ceil(((B-A)+1)/K)
}

function solution4(A, B, K){
    if(A < B && K < B){
        const mid = A%K===0?0:1
        return  (Math.ceil((B)/K)) + mid
    }
    else return 0
}


console.log(solution4(101,123000000,10000))
console.log(solution4(6,11,2))
