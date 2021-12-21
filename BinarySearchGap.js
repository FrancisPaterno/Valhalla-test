function solution(N){
   let bin =searchHelper(N)
   console.log(bin)
   let start = 0
   let counter = 0
   let largestCounter = 0
   for(let i in bin){
       if(bin[i] === 1){
        start++
        if(largestCounter < counter){
            largestCounter = counter
            counter = 0
            start = 0
        }
       } 

       if(bin[i] ===0 && start > 0) counter++
   }
   return largestCounter
}

function searchHelper(N){
    let rem, i = 1, bin = 0
    let binStr = []
    while(N !== 0){
        rem = N % 2;
        N =parseInt(N/2) 
        //bin = bin + rem * i
       //i = i * 10
        binStr.push(rem)
    }
    return  binStr.reverse()
}

console.log(solution(6291457))