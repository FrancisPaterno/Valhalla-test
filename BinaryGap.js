function solution(N){
    const bin = N.toString(2)
    console.log(bin)
    let largest = 0
    let counter = 0
    for(i in bin){
        
        if(bin[i]==='1'){
            if(counter > largest){
                largest = counter
                counter = 0
            } 
            else counter = 0
        }
        else{
            counter++
        }
    }
    return largest
}

console.log(solution(561892))