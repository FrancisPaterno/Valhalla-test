function solution(A){
    let i = 1;

    while(true){
        if(A.indexOf(i) === -1){
            return i
        }
        i++
    }
}

A = [-1,-3]

console.log(solution(A))