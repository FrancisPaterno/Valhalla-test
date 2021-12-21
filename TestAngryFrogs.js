function solution(blocks) {
    // write your code in JavaScript (Node.js 8.9.4)
    let greatestJump = 0
    const count = blocks.length
    for(let i=0; i<count; i++){
       let j=i
       let k=i

       while(j <= count){
           if(blocks[j+1] > blocks[j]){
            j++
           } 
           else break
       }

       while(k>0){
           if(blocks[k-1] === blocks[k]){
            k--
           } 
           else break
       }

       let jump = j-k+1
       if(jump > greatestJump) greatestJump = jump
    }
    return greatestJump
}

console.log(solution([2,6,8,5]))
console.log(solution([1,1]))
console.log(solution([1,5,5,2,8]))