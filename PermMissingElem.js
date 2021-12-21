function solution(A){
    const len = A.length + 1
    let i = 1
    while(i<=len){
           if(A.indexOf(i)===-1){
               return i
           }
        i++
    }
}

function solution2(A){
   const len = A.length+1
   let sum = 0
   for(let i = 1; i<=len; i++ ){
    sum += i
   }
  
   for(let j=0; j<A.length; j++){
       sum = sum - A[j]
   }
   return sum
}
console.log(solution2([2,3,1,5]))