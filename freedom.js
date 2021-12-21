let input = 'aaabbcdd';
let res = [];
for(let i=0; i<input.length; i++){
    let counter =0;
    
    let char = input[i];
    for(let j =0; j<input.length; j++){
    
        if(input[i]===input[j]){
        counter++;
        }
    }
    let val = counter+char;
    if(!res.includes(val)){
        res.push(counter + char);
    }

}
console.log(res.join(''))
