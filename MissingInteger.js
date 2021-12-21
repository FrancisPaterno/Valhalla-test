function solution(A){

    let i = 1

    while(true){
        const ind = A.indexOf(i)
        if(ind === -1) return i

        i++
    }
}


function solution2(A){
 let i = 1;
 return findSmallestElem(A, i)
}

function findSmallestElem(A, i){

    if(A.indexOf(i)=== -1){
        return i
    } 

    return findSmallestElem(A, i+1) + findSmallestElem(A,i+2)+ findSmallestElem(A, i+3)
}

function solution3(A){
    let i = 1

    while(true){
        if(!findElem2(A, i)>0) return i
        i++
    }
}

function findElem2(A, i){

    if(A.length < 2){
        return  A[0] === i?1:0
    }
    const mid = Math.floor(A.length/2)

    const A1 = A.slice(0, mid)
    const A2 = A.slice(mid, A.length)

    return findElem2(A1, i) + findElem2(A2, i)
}


console.log(solution3([1,3,6,4,1,2]))