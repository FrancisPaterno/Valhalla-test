function solution(S, P, Q){
    const gnomeMap = new Map()
    gnomeMap.set('A', 1)
    gnomeMap.set('C', 2)
    gnomeMap.set('G', 3)
    gnomeMap.set('T', 4)

    const M = P.length
    const minGnome = []
    
    for(let i=0; i<M; i++){
        const start = P[i]
        const end = Q[i]
        let minG = Number.MAX_VALUE
        for(j=start; j<=end; j++){
            const g = gnomeMap.get(S[j])
            if(g<minG) minG = g
        }
        minGnome.push(minG)
    }
    return minGnome
}

function solution2(S, P, Q){
    const numS = []
    for(i in S){
        switch(S[i]){
            case 'A':
                numS.push(1)
                break
            case 'C':
                numS.push(2)
                break
            case 'G':
                numS.push(3)
                break
            case 'T':
                numS.push(4)
        }
    }

    const M = P.length
    let minG = []
    for(let j=0; j<M; j++){
        const start = P[j]
        const end = Q[j]

        const l = numS.slice(start, end+1)
        minG.push(Math.min(...l))
    }
    return minG
}

function solution3(S, P, Q){
    const gnomeMap = new Map()
    gnomeMap.set('A', 1)
    gnomeMap.set('C', 2)
    gnomeMap.set('G', 3)
    gnomeMap.set('T', 4)

    const M = P.length
    let minG = []
    const numS = Array.from(S)

    for(let j=0; j<M; j++){
        const start = P[j]
        const end = Q[j]

        const l = numS.slice(start, end+1).sort()
        minG.push(gnomeMap.get(l[0]))
    }

   return minG
}


console.log(solution3('CAGCCTA', [2,5,0],[4,5,6]))